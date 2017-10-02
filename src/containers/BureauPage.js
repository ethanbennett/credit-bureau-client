import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields';

import BureauDataWidget from '../components/BureauDataWidget';
import ProposalWidget from '../components/ProposalWidget';

import '../assets/stylesheets/BureauPage.scss';

export class BureauPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mfiDialogVisible: false,
      proposalDialogVisible: false,
      actions: [],
    };
  }

  showMfiDialog = () => {
    this.setActions();
    this.setState({ mfiDialogVisible: true });
  };

  hideMfiDialog = () => {
    this.setState({ actions: [] });
    this.setState({ mfiDialogVisible: false });
  };

  renderMfiDialog = () => {
    return (
      <DialogContainer
      id="simple-action-dialog"
      visible={this.state.mfiDialogVisible}
      onHide={this.hideMfiDialog}
      actions={this.state.actions}
      title="Add a New MFI"
      >
      <TextField
        className="first-text-field"
        id="simple-action-dialog-field"
        label="Organization Name"
      />
      </DialogContainer>
    );
  }

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
        actions={this.state.actions}
        title="Add a New Proposal"
      >
      <TextField
        className="first-text-field"
        id="simple-action-dialog-field"
        label="Proposal Title"
      />
      <TextField
        id="simple-action-dialog-field"
        label="Description"
      />
      </DialogContainer>
    );
  }

  setActions = () => {
    this.state.actions.push({
      secondary: true,
      children: 'Cancel',
      onClick: this.hideMfiDialog,
    });
    this.state.actions.push(
      <Button flat primary onClick={this.hideMfiDialog}>
        Confirm
      </Button>
    );
  };

  render() {
    return (
      <div>
        <BureauDataWidget showDialog={this.showMfiDialog} />
        <ProposalWidget showDialog={this.showProposalDialog} />
        {this.renderMfiDialog()}
        {this.renderProposalDialog()}
      </div>
    );
  }
}

BureauPage.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(BureauPage);
