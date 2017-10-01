import React, { Component } from 'react';
import { connect } from 'react-redux';
import BureauDataWidget from '../components/BureauDataWidget';
import ProposalWidget from '../components/ProposalWidget';

import '../assets/stylesheets/BureauPage.scss';

export class BureauPage extends Component {
  render() {
    return (
      <div>
        <BureauDataWidget />
        <ProposalWidget />
      </div>
    );
  }
}

BureauPage.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(BureauPage);
