import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BureauDataWidget from '../components/BureauDataWidget';
import OrgDialog from '../components/OrgDialog';

import { renderLoader } from '../utils/renderLoader';

export class OrganizationsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false,
    };
  }

  toggleDialog = () => {
    this.setState({ dialogVisible: !this.state.dialogVisible });
  };

  render = () => {
    const { orgList, requesting } = this.props;
    const { dialogVisible } = this.state;

    return (
      <div>
        {renderLoader(requesting)}
        <BureauDataWidget orgList={orgList} showDialog={this.toggleDialog} />
        <OrgDialog
          dialogVisible={dialogVisible}
          hideDialog={this.toggleDialog}
        />
      </div>
    );
  };
}

OrganizationsPage.propTypes = {
  orgList: PropTypes.array,
  requesting: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    orgList: state.bureau.orgList,
    requesting: state.bureau.requesting,
  };
}

export default connect(mapStateToProps)(OrganizationsPage);
