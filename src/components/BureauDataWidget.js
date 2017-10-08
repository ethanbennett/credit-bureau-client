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

  renderMfiCards = () => {
    const { orgList } = this.props;

    orgList.map((org, i) => {
      return (
        <Card className="org-index" key={i}>
          <CardTitle
            className="org-index__title"
            title="Org Name Placeholder"
            avatar="http://google.com/placeholder"
          />
          <CardText className="org-index__data">Placeholder data</CardText>
        </Card>
      );
    });
  };

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
            <div className="widget-body__text">{this.renderMfiCards()}</div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default BureauDataWidget;
