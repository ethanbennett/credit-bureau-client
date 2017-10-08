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

export function getClientListForOrg(orgId) {
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

export function getProposalsSuccess(proposals) {
  return { type: types.FETCH_PROPOSALS__SUCCESS, proposals: proposals };
}

export function getProposalsFailure(err) {
  return { type: types.FETCH_PROPOSALS__FAILURE, error: err };
}

export function createClient(
  id,
  clientWallet,
  name,
  homeAddress,
  birthday,
  age,
  gender,
  education,
  householdSize,
  dependents,
  marritalStatus,
  phoneNumber
) {
  return async dispatch => {
    dispatch(createClientRequest());

    try {
      const transactionHash = await Bureau.createClient(
        id,
        clientWallet,
        name,
        homeAddress,
        birthday,
        age,
        gender,
        education,
        householdSize,
        dependents,
        marritalStatus,
        phoneNumber
      );
      dispatch(createClientSuccess(transactionHash));
    } catch (err) {
      dispatch(createClientFailure(err));
    }
  };
}

export function createClientRequest() {
  return { type: types.CREATE_CLIENT__REQUEST };
}

export function createClientSuccess(transactionHash) {
  return {
    type: types.CREATE_CLIENT__SUCCESS,
    transactionHash: transactionHash,
  };
}

export function createClientFailure(err) {
  return { type: types.CREATE_CLIENT__FAILURE, error: err };
}

export function createOrg(id, name, hqAddress, country, currency, orgWallet) {
  return async dispatch => {
    dispatch(createOrgRequest());

    try {
      const transactionHash = await Bureau.createOrg(
        id,
        name,
        hqAddress,
        country,
        currency,
        orgWallet
      );
      dispatch(createOrgSuccess(transactionHash));
    } catch (err) {
      dispatch(createOrgFailure(err));
    }
  };
}

export function createOrgRequest() {
  return { type: types.CREATE_ORG__REQUEST };
}

export function createOrgFailure(err) {
  return { type: types.CREATE_ORG__FAILURE, error: err };
}

export function createOrgSuccess(transactionHash) {
  return { type: types.CREATE_ORG__SUCCESS, transactionHash: transactionHash };
}

export function increaseVote(proposalId) {
  return async dispatch => {
    dispatch(increaseVoteRequest());

    try {
      const transactionHash = await Bureau.increaseVote(proposalId);
      dispatch(increaseVoteSuccess(transactionHash));
    } catch (err) {
      dispatch(increaseVoteFailure(err));
    }
  };
}

export function increaseVoteRequest() {
  return { type: types.INCREASE_VOTE__REQUEST };
}

export function increaseVoteFailure(err) {
  return { type: types.INCREASE_VOTE__FAILURE, error: err };
}

export function increaseVoteSuccess(transactionHash) {
  return {
    type: types.INCREASE_VOTE__SUCCESS,
    transactionHash: transactionHash,
  };
}

export function decreaseVote(proposalId) {
  return async dispatch => {
    dispatch(decreaseVoteRequest());

    try {
      const transactionHash = await Bureau.decreaseVote(proposalId);
      dispatch(decreaseVoteSuccess(transactionHash));
    } catch (err) {
      dispatch(decreaseVoteFailure(err));
    }
  };
}

export function decreaseVoteRequest() {
  return { type: types.DECREASE_VOTE__REQUEST };
}

export function decreaseVoteFailure(err) {
  return { type: types.DECREASE_VOTE__FAILURE, error: err };
}

export function decreaseVoteSuccess(transactionHash) {
  return {
    type: types.DECREASE_VOTE__SUCCESS,
    transactionHash: transactionHash,
  };
}
