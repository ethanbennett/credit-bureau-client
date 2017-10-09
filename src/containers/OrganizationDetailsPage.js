import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientDialog from '../components/ClientDialog';
import ClientWidget from '../components/ClientWidget';

import {
  getOrgData,
  getLoanData,
  getClientListForOrg,
  getQuarterlyReport,
} from '../actions/bureau';
import { renderLoader } from '../utils/renderLoader';

export class OrganizationDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false,
    };
  }

  componentWillMount = () => {
    const { dispatch, match } = this.props;
    dispatch(getOrgData(match.params.id));
  };
  // dispatch(getLoanData(walletAddress));
  // dispatch(getClientListForOrg(match.params.id), walletAddress);
  // dispatch(getQuarterlyReport(walletAddress));

  toggleDialog = () => {
    this.setState({ dialogVisible: !this.state.dialogVisible });
  };

  render() {
    const { requesting } = this.props;
    const { dialogVisible } = this.state;

    return (
      <div>
        {renderLoader(requesting)};
        <ClientWidget
          address={this.props.orgData.walletAddress}
          dispatch={this.props.dispatch}
          getClients={getClientListForOrg}
          toggleDialog={this.toggleDialog}
        />
        <ClientDialog
          dialogVisible={dialogVisible}
          hideDialog={this.toggleDialog}
        />
      </div>
    );
  }
}

OrganizationDetailsPage.propTypes = {
  clients: PropTypes.array,
  dispatch: PropTypes.func,
  loans: PropTypes.array,
  orgData: PropTypes.object,
  requesting: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    clients: state.bureau.clientList,
    loans: state.bureau.loans,
    orgData: state.bureau.orgData,
    requesting: state.bureau.requesting,
  };
}

export default connect(mapStateToProps)(OrganizationDetailsPage);
