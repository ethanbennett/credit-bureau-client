import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

export class ClientsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false,
    };
  }
  renderDialog = () => {
    return (
      <DialogContainer
        id="simple-action-dialog"
        visible={this.state.dialogVisible}
        onHide={this.hideDialog}
        title="Add a New Client"
      >
        <TextField id="simple-action-dialog-field" label="Name" />
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

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  hideDialog = () => {
    this.setState({ dialogVisible: false });
  };

  renderIcon = () => {
    return (
      <i className="material-icons" id="widget-icon" onClick={this.showDialog}>
        add_circle_outline
      </i>
    );
  };

  render = () => {
    return (
      <Card className="widget__card">
        <CardTitle
          title="Clients"
          subtitle="All existing loan recipients"
          children={this.renderIcon()}
        />
        <CardText className="widget-body__text">
          Here's where every client will be displayed with a link to their
          profile pages
        </CardText>
        {this.renderDialog()}
      </Card>
    );
  };
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ClientsPage);
