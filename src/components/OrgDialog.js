import React, { Component } from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

class OrgDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orgId: '',
      name: '',
      hqAddress: '',
      country: '',
      currency: '',
      orgWallet: '',
    };
  }

  handleSubmit = () => {
    const { createOrg, dispatch } = this.props;
    const { orgId, name, hqAddress, country, currency, orgWallet } = this.state;

    dispatch(createOrg(orgId, name, hqAddress, country, currency, orgWallet));
    this.props.hideDialog();
  };

  render() {
    const { dialogVisible, hideDialog } = this.props;

    return (
      <DialogContainer
        id="simple-action-dialog"
        visible={dialogVisible}
        onHide={hideDialog}
        title="Add a New MFI"
      >
        <TextField
          id="simple-action-dialog-field"
          label="ID"
          onChange={id => this.setState({ orgId: id })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Name"
          onChange={name => this.setState({ name: name })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Wallet Address"
          onChange={wallet => this.setState({ orgWallet: wallet })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Country"
          onChange={country => this.setState({ country: country })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Currency"
          onChange={currency => this.setState({ currency: currency })}
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

export default OrgDialog;
