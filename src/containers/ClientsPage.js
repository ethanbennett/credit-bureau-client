import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

import Loader from '../components/Loading';

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

  renderLoader = () => {
    if (this.props.requesting) {
      return <Loader />;
    }
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
        {this.renderLoader()}
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

ClientsPage.propTypes = {
  dispatch: PropTypes.func,
  clientsList: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    clientsList: state.bureau.clientsList,
    requesting: state.bureau.requesting,
  };
}

export default connect(mapStateToProps)(ClientsPage);
