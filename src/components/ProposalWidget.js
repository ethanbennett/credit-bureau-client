import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

import '../../src/assets/stylesheets/ProposalWidget.scss';

class ProposalWidget extends Component {
  renderIcon() {
    return (
      <i className="material-icons" id="widget-icon" onClick={this.props.showDialog}>
        add_circle_outline
      </i>
    );
  }

  render() {
    return (
      <div>
        <Card className="widget__card">
          <CardTitle
            children={this.renderIcon()}
            subtitle="Blockchain-Based Governance for the Bureau"
            title="Proposals"
          />
          <CardText>
            <div className="widget-body__text">
              Here's where the Proposals will go
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default ProposalWidget;
