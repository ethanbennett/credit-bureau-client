import React, { Component } from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

class ClientDialog extends Component {
  render() {
    const { dialogVisible, hideDialog } = this.props;

    return (
      <DialogContainer
        id="simple-action-dialog"
        visible={dialogVisible}
        onHide={hideDialog}
        title="Add a New Client"
      >
        <TextField id="simple-action-dialog-field" label="Name" />
        <div className="btn-container">
          <Button id="cancel-btn" label="CANCEL" onClick={hideDialog} flat />
          <Button
            id="submit-btn"
            label="SUBMIT"
            onClick={hideDialog}
            primary
            raised
            type="submit"
          />
        </div>
      </DialogContainer>
    );
  }
}

export default ClientDialog;
