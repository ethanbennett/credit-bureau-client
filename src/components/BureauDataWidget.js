import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import { Link } from 'react-router-dom';

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

  renderTitle = (name, id) => {
    return <Link to={`/organizations/${id}`}>{name}</Link>;
  };

  renderMfiCards = () => {
    const { orgList } = this.props;

    return orgList.map((org, i) => {
      const { country, orgName, orgId, totalSuccessfulLoans } = org;
      const id = orgId.toString();

      return (
        <Card className="org-index" key={i} raise={true}>
          <CardTitle
            className="org-index__title"
            title={this.renderTitle(orgName, id)}
            subtitle={country}
          />
          <CardText className="org-index__data">
            {'Total Successful Payments: ' + totalSuccessfulLoans}
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
