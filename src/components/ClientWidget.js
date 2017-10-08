import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

import { renderIcon } from '../utils/renderIcon';

class ClientWidget extends Component {
  render() {
    const { toggleDialog } = this.props;
    return (
      <Card className="widget__card">
        <CardTitle
          title="Clients"
          subtitle="All clients for this organization"
          children={renderIcon(toggleDialog)}
        />
        <CardText className="widget-body__text">
          Here's where every client will be displayed with a link to their
          profile pages
        </CardText>
      </Card>
    );
  }
}

export default ClientWidget;
