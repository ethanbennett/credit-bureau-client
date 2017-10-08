import {
  FETCH_ORG_LIST__FAILURE,
  FETCH_ORG_LIST__REQUEST,
  FETCH_ORG_LIST__SUCCESS,
  FETCH_ORG_DATA__FAILURE,
  FETCH_ORG_DATA__REQUEST,
  FETCH_ORG_DATA__SUCCESS,
  FETCH_CLIENT_LIST__FAILURE,
  FETCH_CLIENT_LIST__REQUEST,
  FETCH_CLIENT_LIST__SUCCESS,
  FETCH_CLIENT_LIST_FOR_ORG__FAILURE,
  FETCH_CLIENT_LIST_FOR_ORG__REQUEST,
  FETCH_CLIENT_LIST_FOR_ORG__SUCCESS,
  FETCH_CLIENT_DATA__FAILURE,
  FETCH_CLIENT_DATA__REQUEST,
  FETCH_CLIENT_DATA__SUCCESS,
  FETCH_LOAN_DATA__FAILURE,
  FETCH_LOAN_DATA__REQUEST,
  FETCH_LOAN_DATA__SUCCESS,
  FETCH_PROPOSALS__FAILURE,
  FETCH_PROPOSALS__REQUEST,
  FETCH_PROPOSALS__SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  orgList: [],
  clientList: [],
  orgData: [],
  clientData: [],
  loans: [],
  proposals: [],
  error: '',
};

export default function bureau(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORG_LIST__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case FETCH_ORG_LIST__REQUEST:
      return { ...state, requesting: true };
    case FETCH_ORG_LIST__SUCCESS:
      return { ...state, requesting: false, orgList: action.orgList };
    case FETCH_ORG_DATA__FAILURE:
      return { ...state, requesting: false };
    case FETCH_ORG_DATA__REQUEST:
      return { ...state, requesting: true };
    case FETCH_ORG_DATA__SUCCESS:
      return { ...state, requesting: false, orgData: action.orgData };
    case FETCH_CLIENT_LIST__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case FETCH_CLIENT_LIST__REQUEST:
      return { ...state, requesting: true };
    case FETCH_CLIENT_LIST__SUCCESS:
      return { ...state, requesting: false, clientList: action.clientList };
    case FETCH_CLIENT_LIST_FOR_ORG__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case FETCH_CLIENT_LIST_FOR_ORG__REQUEST:
      return { ...state, requesting: true };
    case FETCH_CLIENT_LIST_FOR_ORG__SUCCESS:
      return { ...state, requesting: false, clientList: action.clientList };
    case FETCH_CLIENT_DATA__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case FETCH_CLIENT_DATA__REQUEST:
      return { ...state, requesting: true };
    case FETCH_CLIENT_DATA__SUCCESS:
      return { ...state, requesting: false, clientData: action.clientData };
    case FETCH_LOAN_DATA__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case FETCH_LOAN_DATA__REQUEST:
      return { ...state, requesting: true };
    case FETCH_LOAN_DATA__SUCCESS:
      return { ...state, requesting: false, loans: action.loans };
    case FETCH_PROPOSALS__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case FETCH_PROPOSALS__REQUEST:
      return { ...state, requesting: true };
    case FETCH_PROPOSALS__SUCCESS:
      return { ...state, requesting: false, proposals: action.proposals };
    default:
      return state;
  }
}
