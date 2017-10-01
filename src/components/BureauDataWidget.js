import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

import '../../src/assets/stylesheets/BureauDataWidget.scss';

const BureauDataWidget = () => {
  return (
    <div>
      <Card className="bureau-data-widget__card">
        <CardTitle title="Bureau Data" />
        <CardText>
          <p>Here's where the Bureau Stats will go</p>
        </CardText>
      </Card>
    </div>
  );
};

export default BureauDataWidget;
