import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

import { decreaseVote, increaseVote } from '../actions/bureau';
import { renderIcon } from '../utils/renderIcon';

import '../../src/assets/stylesheets/ProposalWidget.scss';

class ProposalWidget extends Component {
  renderProposalHeader = () => {
    return (
      <tr className="proposal-table__header">
        <td>Placeholder Table Header</td>
      </tr>
    );
  };

  renderProposalRows = () => {
    const { proposals } = this.props;

    proposals.map((proposal, i) => {
      return (
        <tr className="proposal-table__data" key={i}>
          <td>
            <p>Placeholder Data</p>
          </td>
        </tr>
      );
    });
  };

  renderProposals = () => {
    return (
      <table className="proposal-table">
        <tbody>
          {this.renderProposalHeader()}
          {this.renderProposalRows()}
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <div>
        <Card className="widget__card">
          <CardTitle
            children={renderIcon(this.props.showDialog)}
            subtitle="Blockchain-Based Governance for the Bureau"
            title="Proposals"
          />
          <CardText>
            <div className="widget-body__text">{this.renderProposals()}</div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default ProposalWidget;
