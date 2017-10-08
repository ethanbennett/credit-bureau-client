import * as types from './actionTypes';
import Bureau from '../services/Bureau';

export function getOrgList() {
  return async dispatch => {
    dispatch(getOrgListRequest());

    try {
      const orgList = await Bureau.getOrgList();
      dispatch(getOrgListSuccess(orgList));
    } catch (err) {
      dispatch(getOrgListFailure(err));
    }
  };
}

export function getOrgListRequest() {
  return { type: types.FETCH_ORG_LIST__REQUEST };
}

export function getOrgListSuccess(orgList) {
  return { type: types.FETCH_ORG_LIST__SUCCESS, orgList: orgList };
}

export function getOrgListFailure(err) {
  return { type: types.FETCH_ORG_LIST__FAILURE, error: err };
}

export function getOrgData(orgId) {
  return async dispatch => {
    dispatch(getOrgDataRequest());

    try {
      const orgData = await Bureau.getOrgData(orgId);
      dispatch(getOrgDataSuccess(orgData));
    } catch (err) {
      dispatch(getOrgDataFailure(err));
    }
  };
}

export function getOrgDataRequest() {
  return { type: types.FETCH_ORG_DATA__REQUEST };
}

export function getOrgDataSuccess(orgData) {
  return { type: types.FETCH_ORG_DATA__SUCCESS, orgData: orgData };
}

export function getOrgDataFailure(err) {
  return { type: types.FETCH_ORG_DATA__FAILURE, error: err };
}

export function getClientList() {
  return async dispatch => {
    dispatch(getClientListRequest());

    try {
      const clientList = await Bureau.getClientList();
      dispatch(getClientListSuccess(clientList));
    } catch (err) {
      dispatch(getClientListFailure(err));
    }
  };
}

export function getClientListRequest() {
  return { type: types.FETCH_CLIENT_LIST__REQUEST };
}

export function getClientListSuccess(clientList) {
  return { type: types.FETCH_CLIENT_LIST__SUCCESS, clientList: clientList };
}

export function getClientListFailure(err) {
  return { type: types.FETCH_CLIENT_LIST__FAILURE, error: err };
}

export function getClientListForOrg() {
  return async dispatch => {
    dispatch(getClientListForOrgRequest());

    try {
      const clientList = await Bureau.getClientListForOrg(orgId);
      dispatch(getClientListForOrgSuccess(clientList));
    } catch (err) {
      dispatch(getClientListForOrgFailure(err));
    }
  };
}

export function getClientListForOrgRequest() {
  return { type: types.FETCH_CLIENT_LIST__REQUEST };
}

export function getClientListForOrgSuccess(clientList) {
  return { type: types.FETCH_CLIENT_LIST__SUCCESS, clientList: clientList };
}

export function getClientListForOrgFailure(err) {
  return { type: types.FETCH_CLIENT_LIST__FAILURE, error: err };
}

export function getClientData(clientId) {
  return async dispatch => {
    dispatch(getClientDataRequest());

    try {
      const clientData = await Bureau.getClientData(clientId);
      dispatch(getClientDataSuccess(clientData));
    } catch (err) {
      dispatch(getClientDataFailure(err));
    }
  };
}

export function getClientDataRequest() {
  return { type: types.FETCH_CLIENT_DATA__REQUEST };
}

export function getClientDataSuccess(clientData) {
  return { type: types.FETCH_CLIENT_DATA__SUCCESS, clientData: clientData };
}

export function getClientDataFailure(err) {
  return { type: types.FETCH_CLIENT_DATA__FAILURE, error: err };
}

export function getLoanData(orgOrClientAddress) {
  return async dispatch => {
    dispatch(getLoanDataRequest());

    try {
      const loanData = await Bureau.getAllLoanData(orgOrClientAddress);
      dispatch(getLoanDataSuccess(loanData));
    } catch (err) {
      dispatch(getLoanDataFailure(err));
    }
  };
}

export function getLoanDataRequest() {
  return { type: types.FETCH_LOAN_DATA__REQUEST };
}

export function getLoanDataSuccess(loanData) {
  return { type: types.FETCH_LOAN_DATA__SUCCESS, loans: loanData };
}

export function getLoanDataFailure(err) {
  return { type: types.FETCH_LOAN_DATA__FAILURE, error: err };
}

export function getProposals() {
  return async dispatch => {
    dispatch(getProposalsRequest());

    try {
      const proposals = await Bureau.getProposals();
      dispatch(getProposalsSuccess(proposals));
    } catch (err) {
      dispatch(getProposalsFailure(err));
    }
  };
}

export function getProposalsRequest() {
  return { type: types.FETCH_PROPOSALS__REQUEST };
}

export function getClientsSuccess(proposals) {
  return { type: types.FETCH_PROPOSALS__SUCCESS, proposals: proposals };
}

export function getProposalsFailure(err) {
  return { type: types.FETCH_PROPOSALS__FAILURE, error: err };
}
