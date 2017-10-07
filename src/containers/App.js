import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';

import { addItem } from '../store/items/actions';
import Header from '../components/Header';
import BureauPage from '../containers/BureauPage';
import ClientsPage from '../containers/ClientsPage';
import OrganizationsPage from '../containers/OrganizationsPage';
import '../assets/stylesheets/App.scss';

export class App extends Component {
  handleAddItem(text) {
    this.props.dispatch(addItem(text));
  }

  render() {
    return (
      <div className="app">
        <Header />

        <Route exact path="/" component={BureauPage} />
        <Route exact path="/clients" component={ClientsPage} />
        <Route exact path="/organizations" component={OrganizationsPage} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  items: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    items: state.items.list,
  };
}

export default withRouter(connect(mapStateToProps)(App));
