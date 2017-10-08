import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientDialog from '../components/ClientDialog';
import ClientWidget from '../components/ClientWidget';

import {
  getOrgData,
  getAllLoanDataForAddresses,
  getBasicClientInfoForOrg,
} from '../actions/bureau';
import { renderLoader } from '../utils/renderLoader';

import '../assets/stylesheets/BureauPage.scss';

export class OrganizationDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false,
    };
  }
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    // dispatch(getOrgData(match.params.id));
    // dispatch(getAllLoanDataForAddresses(match.params.id));
    // dispatch(getBasicClientInfoForOrg(match.params.id));
  };

  toggleDialog = () => {
    this.setState({ dialogVisible: !this.state.dialogVisible });
  };

  render() {
    const { requesting } = this.props;
    const { dialogVisible } = this.state;

    return (
      <div>
        {renderLoader(requesting)};
        <ClientWidget toggleDialog={this.toggleDialog} />
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
  orgData: PropTypes.array,
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
