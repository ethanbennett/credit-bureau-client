import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Loader from 'react-loader';

import {
  getOrgData,
  getAllLoanDataForAddresses,
  getBasicClientInfoForOrg,
} from '../actions/bureau';

import '../assets/stylesheets/BureauPage.scss';

export class OrganizationDetailsPage extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    // dispatch(getOrgData(match.params.id));
    // dispatch(getAllLoanDataForAddresses(match.params.id));
    // dispatch(getBasicClientInfoForOrg(match.params.id));
  };

  renderClientWidget = () => {
    return (
      <Card className="widget__card">
        {this.renderLoader()}
        <CardTitle
          title="Clients"
          subtitle="All clients for this organization"
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

  renderLoader = () => {
    if (this.props.requesting) {
      return <Loader />;
    }
  };

  render() {
    return (
      <div>
        {this.renderLoader()};
        {this.renderClientWidget()};
      </div>
    );
  }
}

OrganizationDetailsPage.propTypes = {
  clients: PropTypes.array,
  dispatch: PropTypes.func,
  loans: PropTypes.array,
  orgData: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    clients: state.bureau.clientList,
    loans: state.bureau.loans,
    orgData: state.bureau.orgData,
  };
}

export default connect(mapStateToProps)(OrganizationDetailsPage);
