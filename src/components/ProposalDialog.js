import React, { Component } from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

class ProposalDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  handleSubmit = () => {
    const { createProposal, dispatch } = this.props;

    dispatch(createProposal(this.state.name));
    this.props.hideDialog();
  };

  render() {
    const { dialogVisible, hideDialog } = this.props;

    return (
      <DialogContainer
        id="simple-action-dialog"
        visible={dialogVisible}
        onHide={hideDialog}
        title="Add a New Proposal"
      >
        <TextField
          id="simple-action-dialog-field"
          label="Proposal Name"
          onChange={name => this.setState({ name: name })}
        />
        <div className="btn-container">
          <Button id="cancel-btn" label="CANCEL" onClick={hideDialog} flat />
          <Button
            id="submit-btn"
            label="SUBMIT"
            onClick={this.handleSubmit}
            primary
            raised
            type="submit"
          />
        </div>
      </DialogContainer>
    );
  }
}

export default ProposalDialog;
