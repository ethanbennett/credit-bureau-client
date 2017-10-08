import {
  FETCH_ORG_LIST__FAILURE,
  FETCH_ORG_LIST__REQUEST,
  FETCH_ORG_LIST__SUCCESS,
  FETCH_ORG_DATA__FAILURE,
  FETCH_ORG_DATA__REQUEST,
  FETCH_ORG_DATA__SUCCESS,
  CREATE_ORG__FAILURE,
  CREATE_ORG__REQUEST,
  CREATE_ORG__SUCCESS,
  FETCH_CLIENT_LIST__FAILURE,
  FETCH_CLIENT_LIST__REQUEST,
  FETCH_CLIENT_LIST__SUCCESS,
  FETCH_CLIENT_LIST_FOR_ORG__FAILURE,
  FETCH_CLIENT_LIST_FOR_ORG__REQUEST,
  FETCH_CLIENT_LIST_FOR_ORG__SUCCESS,
  FETCH_CLIENT_DATA__FAILURE,
  FETCH_CLIENT_DATA__REQUEST,
  FETCH_CLIENT_DATA__SUCCESS,
  CREATE_CLIENT__FAILURE,
  CREATE_CLIENT__REQUEST,
  CREATE_CLIENT__SUCCESS,
  FETCH_LOAN_DATA__FAILURE,
  FETCH_LOAN_DATA__REQUEST,
  FETCH_LOAN_DATA__SUCCESS,
  FETCH_PROPOSALS__FAILURE,
  FETCH_PROPOSALS__REQUEST,
  FETCH_PROPOSALS__SUCCESS,
  CREATE_PROPOSAL__FAILURE,
  CREATE_PROPOSAL__REQUEST,
  CREATE_PROPOSAL__SUCCESS,
  INCREASE_VOTE__FAILURE,
  INCREASE_VOTE__REQUEST,
  INCREASE_VOTE__SUCCESS,
  DECREASE_VOTE__FAILURE,
  DECREASE_VOTE__REQUEST,
  DECREASE_VOTE__SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  clientData: [],
  clientList: [],
  error: '',
  loans: [],
  orgData: [],
  orgList: [],
  proposals: [],
  requesting: false,
  transactionHash: '',
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
    case CREATE_PROPOSAL__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case CREATE_PROPOSAL__REQUEST:
      return { ...state, requesting: true };
    case CREATE_PROPOSAL__SUCCESS:
      return {
        ...state,
        requesting: false,
        transactionHash: action.transactionHash,
      };
    case CREATE_CLIENT__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case CREATE_CLIENT__REQUEST:
      return { ...state, requesting: true };
    case CREATE_CLIENT__SUCCESS:
      return {
        ...state,
        requesting: false,
        transactionHash: action.transactionHash,
      };
    case CREATE_ORG__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case CREATE_ORG__REQUEST:
      return { ...state, requesting: true };
    case CREATE_ORG__SUCCESS:
      return {
        ...state,
        requesting: false,
        transactionHash: action.transactionHash,
      };
    case INCREASE_VOTE__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case INCREASE_VOTE__REQUEST:
      return { ...state, requesting: true };
    case INCREASE_VOTE__SUCCESS:
      return {
        ...state,
        requesting: false,
        transactionHash: action.transactionHash,
      };
    case DECREASE_VOTE__FAILURE:
      return { ...state, requesting: false, error: action.error };
    case DECREASE_VOTE__REQUEST:
      return { ...state, requesting: true };
    case DECREASE_VOTE__SUCCESS:
      return {
        ...state,
        requesting: false,
        transactionHash: action.transactionHash,
      };
    default:
      return state;
  }
}
