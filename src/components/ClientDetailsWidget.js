import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

class ClientDetailsWidget extends Component {
  render() {
    const {
      name,
      birthday,
      homeAddress,
      married,
      numberOfPayments,
      successfulPayments,
      totalDeposits,
    } = this.props.clientData;

    return (
      <Card className="widget__card">
        <CardTitle title={name} subtitle="Client Details" />
        <CardText>
          <p>Birthday: {birthday}</p>
          <p>Home Address: {homeAddress}</p>
          <p>Married: {String(married)}</p>
          <p>Total Number of Payments: {parseInt(numberOfPayments, 10)}</p>
          <p>
            Total Number of successfulPayments:{' '}
            {parseInt(successfulPayments, 10)}
          </p>
          <p>Total Deposits: {parseInt(totalDeposits, 10)}</p>
        </CardText>
      </Card>
    );
  }
}

export default ClientDetailsWidget;
