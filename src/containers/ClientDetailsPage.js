import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import { renderLoader } from '../utils/renderLoader';

import { getClientData, getLoanData } from '../actions/bureau';

export class ClientDetailsPage extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    const id = match.params.id.replace(/%20/g, ' ').toString();

    dispatch(getClientData(id));
  };

  render() {
    return <Card />;
  }
}

ClientDetailsPage.propTypes = {
  clientData: PropTypes.object,
  loans: PropTypes.array,
  requesting: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    clientData: state.bureau.clientData,
    loans: state.bureau.loans,
    requesting: state.bureau.requesting,
  };
}

export default connect(mapStateToProps)(ClientDetailsPage);
