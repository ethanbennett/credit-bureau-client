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
    };
  }

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
      <TextField
        id="simple-action-dialog-field"
        label="Organization Name"
      />
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
        title="Add a New Proposal"
      >
      <TextField
        id="simple-action-dialog-field"
        label="Proposal Title"
      />
      <TextField
        id="simple-action-dialog-field"
        label="Description"
      />
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
  }

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
