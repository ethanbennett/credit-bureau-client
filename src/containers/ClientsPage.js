import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientWidget from '../components/ClientWidget';
import ClientDialog from '../components/ClientDialog';

import { createClient } from '../actions/bureau';
import { renderLoader } from '../utils/renderLoader';

export class ClientsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false,
    };
  }

  toggleDialog = () => {
    this.setState({ dialogVisible: !this.state.dialogVisible });
  };

  render = () => {
    const { requesting } = this.props;
    const { dialogVisible } = this.state;

    return (
      <div>
        {renderLoader(requesting)}
        <ClientWidget toggleDialog={this.toggleDialog} />
        <ClientDialog
          dialogVisible={dialogVisible}
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
