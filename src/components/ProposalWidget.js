import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

import '../../src/assets/stylesheets/ProposalWidget.scss';

const ProposalWidget = () => {
  return (
    <div>
      <Card className="widget__card">
        <CardTitle
          title="Proposals"
          subtitle="Blockchain-Based Governance for the Bureau"
        />
        <CardText>
          <div className="widget-body__text">
            Here's where the Proposals will go
          </div>
        </CardText>
      </Card>
    </div>
  );
};

export default ProposalWidget;
