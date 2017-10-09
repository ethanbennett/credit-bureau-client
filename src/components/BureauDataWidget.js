import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import { push } from 'react-router-redux';

class BureauDataWidget extends Component {
  renderIcon() {
    return (
      <i
        className="material-icons org-widget-icon"
        id="widget-icon"
        onClick={this.props.showDialog}
      >
        add_circle_outline
      </i>
    );
  }

  getPosition = i => {
    if (i % 2 === 0) {
      return 'left';
    }

    return 'right';
  };

  renderMfiCards = () => {
    const { orgList } = this.props;

    return orgList.map((org, i) => {
      const name = org.orgName;
      const country = org.country;
      const id = org.orgId;
      const loans = org.totalSuccessfulLoans;
      const position = this.getPosition(i);

      return (
        <Card className={'org-index-' + position} key={i} raise={true}>
          <CardTitle
            className="org-index__title"
            title={name}
            subtitle={country}
          />
          <CardText className="org-index__data">
            {'Total Successful Payments: ' + loans}
          </CardText>
        </Card>
      );
    });
  };

  render() {
    return (
      <div>
        <Card className="widget__card org-widget">
          <CardTitle
            className="widget-title"
            title="All Organizations"
            children={this.renderIcon()}
          />
          <Card>{this.renderMfiCards()}</Card>
        </Card>
      </div>
    );
  }
}

export default BureauDataWidget;
