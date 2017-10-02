import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

import '../../src/assets/stylesheets/BureauDataWidget.scss';

class BureauDataWidget extends Component {
  renderIcon() {
    return (
      <i
        className="material-icons"
        id="widget-icon"
        onClick={this.props.showDialog}
      >
        add_circle_outline
      </i>
    );
  }

  render() {
    return (
      <div>
        <Card className="widget__card">
          <CardTitle
            title="Bureau Data"
            subtitle="Overall MFI data"
            children={this.renderIcon()}
          />
          <CardText>
            <div className="widget-body__text">
              Here's where the Bureau Stats will go
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default BureauDataWidget;
