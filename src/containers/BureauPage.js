import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

import BureauDataWidget from '../components/BureauDataWidget';
import ProposalWidget from '../components/ProposalWidget';
import OrgDialog from '../components/OrgDialog';
import ProposalDialog from '../components/ProposalDialog';

import {
  createOrg,
  getOrgList,
  getProposals,
  createProposal,
} from '../actions/bureau';
import { renderLoader } from '../utils/renderLoader';

export class BureauPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mfiDialogVisible: false,
      proposalDialogVisible: false,
    };
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(getOrgList());
    dispatch(getProposals());
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
        <Card className="widget__card">
          <CardTitle title="Welcome to the Future of Credit" />
          <CardText>
            <p>
              All the data in this app is hosted on the blockchain, so it's
              immutable, easy to share, and failure-resistant. It also allows
              for participating organizations to govern the bureau in
              decentralized and democratic ways. Don't forget, though: you won't
              see your new data on the page until the transaction containing
              your update has been mined (approximately 30 seconds).
            </p>
          </CardText>
        </Card>
        <ProposalWidget
          dispatch={this.props.dispatch}
          proposals={proposals}
          showDialog={this.toggleProposalDialog}
        />
        <ProposalDialog
          dispatch={this.props.dispatch}
          createProposal={createProposal}
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
