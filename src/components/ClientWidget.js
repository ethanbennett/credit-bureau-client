import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import { Link } from 'react-router-dom';

import { renderIcon } from '../utils/renderIcon';

class ClientWidget extends Component {
  renderTitle = (name, id) => {
    return <Link to={`/clients/${id}`}>{name}</Link>;
  };

  renderClientCards = () => {
    const { clientList } = this.props;

    if (clientList.length > 0) {
      return clientList.map((client, i) => {
        const { id, name, birthday } = client;

        return (
          <Card className="org-index" key={i} raise={true}>
            <CardTitle
              className="org-index__title"
              title={this.renderTitle(name, id)}
            />
            <CardText className="org-index__data">{birthday}</CardText>
          </Card>
        );
      });
    }
  };

  render() {
    const { toggleDialog, address } = this.props;

    return (
      <Card className="widget__card">
        <CardTitle
          title="Clients"
          subtitle="All clients for this organization"
          children={renderIcon(toggleDialog)}
        />
        {this.renderClientCards()}
      </Card>
    );
  }
}

export default ClientWidget;
