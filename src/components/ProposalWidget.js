import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

import '../../src/assets/stylesheets/ProposalWidget.scss';

const ProposalWidget = () => {
  return (
    <div>
      <Card className="widget__card">
        <CardTitle title="Proposals" />
        <CardText>
          <p className="widget__text">Here's where the Proposals will go</p>
        </CardText>
      </Card>
    </div>
  );
};

export default ProposalWidget;
