import React, { Component } from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

class ClientDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientWallet: '0x0',
      name: '',
      homeAddress: '',
      birthday: '',
      age: 0,
      gender: 0,
      education: 0,
      householdSize: 0,
      dependents: 0,
      maritalStatus: false,
      phoneNumber: 0,
    };
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    const {
      clientWallet,
      name,
      homeAddress,
      birthday,
      age,
      gender,
      education,
      householdSize,
      dependents,
      maritalStatus,
      phoneNumber,
    } = this.state;
    const id = name + '-' + birthday;

    dispatch(
      this.props.createClient(
        id,
        clientWallet,
        name,
        homeAddress,
        birthday,
        age,
        gender,
        education,
        householdSize,
        dependents,
        maritalStatus,
        phoneNumber
      )
    );
    this.props.hideDialog();
  };

  render() {
    const { dialogVisible, hideDialog } = this.props;

    return (
      <DialogContainer
        className="client-dialog"
        id="simple-action-dialog"
        visible={dialogVisible}
        onHide={hideDialog}
        title="Add a New Client"
      >
        <TextField
          id="simple-action-dialog-field"
          label="Name"
          onChange={name => this.setState({ name: name })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Wallet Address"
          onChange={address => this.setState({ clientWallet: address })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Home Address"
          onChange={address => this.setState({ homeAddress: address })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Birthday (mmddyyyy: no punctuation, please!)"
          onChange={birthday => this.setState({ birthday: birthday })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Age"
          onChange={age => this.setState({ age: age })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Sex"
          onChange={sex => this.setState({ gender: sex })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Education"
          onChange={education => this.setState({ education: education })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Household Size"
          onChange={size => this.setState({ householdSize: size })}
        />
        <TextField
          id="simple-action-dialog-field"
          label="Dependents"
          onChange={dependents => this.setState({ dependents: dependents })}
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

export default ClientDialog;
