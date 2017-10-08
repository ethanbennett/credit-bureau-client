import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BureauDataWidget from '../components/BureauDataWidget';
import ProposalWidget from '../components/ProposalWidget';
import OrgDialog from '../components/OrgDialog';
import ProposalDialog from '../components/ProposalDialog';

import { createOrg, getOrgList, getProposals } from '../actions/bureau';
import { renderLoader } from '../utils/renderLoader';

import '../assets/stylesheets/BureauPage.scss';

export class BureauPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mfiDialogVisible: false,
      proposalDialogVisible: false,
    };
  }

  componentDidMount = () => {
    const { dispatch, match } = this.props;
    // dispatch(getOrgList());
    // dispatch(getProposals());
  };

  toggleMfiDialog = () => {
    this.setState({ mfiDialogVisible: !this.state.mfiDialogVisible });
  };

  toggleProposalDialog = () => {
    this.setState({ proposalDialogVisible: !this.state.proposalDialogVisible });
  };

  render() {
    const { orgList, proposals, requesting } = this.props;
    const { mfiDialogVisible, proposalDialogVisible } = this.state;

    return (
      <div>
        {renderLoader(requesting)}
        <BureauDataWidget orgList={orgList} showDialog={this.toggleMfiDialog} />
        <ProposalWidget
          dispatch={this.props.dispatch}
          proposals={proposals}
          showDialog={this.toggleProposalDialog}
        />
        <OrgDialog
          dialogVisible={mfiDialogVisible}
          hideDialog={this.toggleMfiDialog}
        />
        <ProposalDialog
          dialogVisible={proposalDialogVisible}
          hideDialog={this.toggleProposalDialog}
        />
      </div>
    );
  }
}

BureauPage.propTypes = {
  dispatch: PropTypes.func,
  orgList: PropTypes.array,
  proposals: PropTypes.array,
  requesting: PropTypes.bool,
  transactionHash: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    orgList: state.bureau.orgList,
    proposals: state.bureau.proposals,
    requesting: state.bureau.requesting,
    transactionHash: state.bureau.transactionHash,
  };
}

export default connect(mapStateToProps)(BureauPage);
