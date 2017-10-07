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
  return { type: types.ORG_LIST__REQUEST };
}

export function getOrgListSuccess(orgList) {
  return { type: types.ORG_LIST__SUCCESS, orgList: orgList };
}

export function getOrgListFailure(err) {
  return { type: types.ORG_LIST__FAILURE, error: err };
}
