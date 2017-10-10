import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

import { decreaseVote, increaseVote } from '../actions/bureau';
import { renderIcon } from '../utils/renderIcon';

class ProposalWidget extends Component {
  renderProposals = () => {
    const { proposals } = this.props;

    return proposals.map((proposal, i) => {
      const { name, votesFor, votesAgainst } = proposal;

      return (
        <Card className="org-index" key={i} raise={true}>
          <CardTitle
            className="org-index__title"
            title={name}
            subtitle={
              'Votes For: ' + votesFor + ' || Votes Against ' + votesAgainst
            }
          />
          <CardText className="org-index__data">{this.renderVoting()}</CardText>
        </Card>
      );
    });
  };

  renderVoting = () => {
    return (
      <div>
        <div
          className="vote"
          onClick={() => this.props.dispatch(increaseVote())}
        >
          Vote Up
        </div>
        <div
          className="vote"
          onClick={() => this.props.dispatch(decreaseVote())}
        >
          Vote Down
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Card className="widget__card">
          <CardTitle
            className="widget-title"
            children={renderIcon(this.props.showDialog)}
            subtitle="Blockchain-Based Governance for the Bureau"
            title="Proposals"
          />
          {this.renderProposals()}
        </Card>
      </div>
    );
  }
}

export default ProposalWidget;
