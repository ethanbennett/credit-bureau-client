import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';

import Header from '../components/Header';
import BureauPage from '../containers/BureauPage';
import ClientsPage from '../containers/ClientsPage';
import OrganizationsPage from '../containers/OrganizationsPage';
import ClientDetailsPage from '../containers/ClientDetailsPage';
import OrganizationDetailsPage from '../containers/OrganizationDetailsPage';

import '../assets/stylesheets/App.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Route exact path="/" component={BureauPage} />
        <Route exact path="/clients" component={ClientsPage} />
        <Route exact path="/organizations" component={OrganizationsPage} />
        <Route path="/clients/:id" component={ClientDetailsPage} />
        <Route path="/organizations/:id" component={OrganizationDetailsPage} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
};

export default withRouter(connect()(App));
