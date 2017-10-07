import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields';

import BureauDataWidget from '../components/BureauDataWidget';

export class OrganizationsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false,
    };
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  hideDialog = () => {
    this.setState({ dialogVisible: false });
  };

  renderDialog = () => {
    return (
      <DialogContainer
        id="simple-action-dialog"
        visible={this.state.dialogVisible}
        onHide={this.hideDialog}
        title="Add a New MFI"
      >
        <TextField id="simple-action-dialog-field" label="Organization Name" />
        <div className="btn-container">
          <Button
            id="cancel-btn"
            label="CANCEL"
            onClick={this.hideDialog}
            flat
          />
          <Button
            id="submit-btn"
            label="SUBMIT"
            onClick={this.hideDialog}
            primary
            raised
            type="submit"
          />
        </div>
      </DialogContainer>
    );
  };

  render = () => {
    return (
      <div>
        <BureauDataWidget showDialog={this.showDialog} />
        {this.renderDialog()}
      </div>
    );
  };
}

OrganizationsPage.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(OrganizationsPage);
