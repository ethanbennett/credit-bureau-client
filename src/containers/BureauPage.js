import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields';

import BureauDataWidget from '../components/BureauDataWidget';
import ProposalWidget from '../components/ProposalWidget';
import Loader from '../components/Loading';
import { createOrg, getOrgList, getProposals } from '../actions/bureau';

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

  showMfiDialog = () => {
    this.setState({ mfiDialogVisible: true });
  };

  hideMfiDialog = () => {
    this.setState({ mfiDialogVisible: false });
  };

  renderMfiDialog = () => {
    return (
      <DialogContainer
        id="simple-action-dialog"
        visible={this.state.mfiDialogVisible}
        onHide={this.hideMfiDialog}
        title="Add a New MFI"
      >
        <TextField id="simple-action-dialog-field" label="Name" />
        <TextField id="simple-action-dialog-field" label="Physical Address" />
        <TextField id="simple-action-dialog-field" label="Wallet Address" />
        <TextField id="simple-action-dialog-field" label="Country" />
        <TextField id="simple-action-dialog-field" label="Currency" />
        <div className="btn-container">
          <Button
            id="cancel-btn"
            label="CANCEL"
            onClick={this.hideMfiDialog}
            flat
          />
          <Button
            id="submit-btn"
            label="SUBMIT"
            onClick={this.hideMfiDialog}
            primary
            raised
            type="submit"
          />
        </div>
      </DialogContainer>
    );
  };

  showProposalDialog = () => {
    this.setState({ proposalDialogVisible: true });
  };

  hideProposalDialog = () => {
    this.setState({ proposalDialogVisible: false });
  };

  renderProposalDialog = () => {
    return (
      <DialogContainer
        id="simple-action-dialog"
        visible={this.state.proposalDialogVisible}
        onHide={this.hideProposalDialog}
        title="Add a New Proposal"
      >
        <TextField id="simple-action-dialog-field" label="Proposal Title" />
        <TextField id="simple-action-dialog-field" label="Description" />
        <div className="btn-container">
          <Button
            id="cancel-btn"
            label="CANCEL"
            onClick={this.hideProposalDialog}
            flat
          />
          <Button
            id="submit-btn"
            label="SUBMIT"
            onClick={this.hideProposalDialog}
            primary
            raised
            type="submit"
          />
        </div>
      </DialogContainer>
    );
  };

  renderLoader = () => {
    if (this.props.requesting) {
      return <Loader />;
    }
  };

  render() {
    const { orgList, proposals } = this.props;

    return (
      <div>
        {this.renderLoader()}
        <BureauDataWidget orgList={orgList} showDialog={this.showMfiDialog} />
        <ProposalWidget
          dispatch={this.props.dispatch}
          proposals={proposals}
          showDialog={this.showProposalDialog}
        />
        {this.renderMfiDialog()}
        {this.renderProposalDialog()}
      </div>
    );
  }
}

BureauPage.propTypes = {
  dispatch: PropTypes.func,
  orgList: PropTypes.array,
  proposals: PropTypes.array,
  transactionHash: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    orgList: state.bureau.orgList,
    requesting: state.bureau.requesting,
    proposals: state.bureau.proposals,
    transactionHash: state.bureau.transactionHash,
  };
}

export default connect(mapStateToProps)(BureauPage);
