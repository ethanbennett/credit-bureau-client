import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientWidget from '../components/ClientWidget';
import ClientDialog from '../components/ClientDialog';

import { getClientList, createClient } from '../actions/bureau';
import { renderLoader } from '../utils/renderLoader';

export class ClientsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false,
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getClientList());
  };

  toggleDialog = () => {
    this.setState({ dialogVisible: !this.state.dialogVisible });
  };

  render = () => {
    const { requesting } = this.props;
    const { dialogVisible } = this.state;

    return (
      <div>
        <ClientWidget
          toggleDialog={this.toggleDialog}
          clientList={this.props.clientList}
        />
        <ClientDialog
          createClient={createClient}
          dialogVisible={dialogVisible}
          dispatch={this.props.dispatch}
          hideDialog={this.toggleDialog}
        />
      </div>
    );
  };
}

ClientsPage.propTypes = {
  clientList: PropTypes.array,
  dispatch: PropTypes.func,
  requesting: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    clientList: state.bureau.clientList,
    requesting: state.bureau.requesting,
  };
}

export default connect(mapStateToProps)(ClientsPage);
