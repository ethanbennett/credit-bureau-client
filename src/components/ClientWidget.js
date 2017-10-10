import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import { Link } from 'react-router-dom';

import { renderIcon } from '../utils/renderIcon';

class ClientWidget extends Component {
  renderTitle = (name, id) => {
    return (
      <Link className="widget-link" to={`/clients/${id}`}>
        {name}
      </Link>
    );
  };

  renderClientCards = () => {
    const { clientList } = this.props;

    if (clientList.length > 0) {
      return clientList.map((client, i) => {
        const { id, name, birthday } = client;
        const splitBirthday = birthday.split('');

        return (
          <Card className="org-index" key={i} raise={true}>
            <CardTitle
              className="org-index__title"
              title={this.renderTitle(name, id)}
            />
            <CardText className="org-index__data">
              {splitBirthday[0] +
                splitBirthday[1] +
                '/' +
                splitBirthday[2] +
                splitBirthday[3] +
                '/' +
                splitBirthday[4] +
                splitBirthday[5] +
                splitBirthday[6] +
                splitBirthday[7]}
            </CardText>
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
