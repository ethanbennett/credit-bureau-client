import {
  ORG_LIST__FAILURE,
  ORG_LIST__REQUEST,
  ORG_LIST__SUCCESS
} from '../actions/actionTypes';

const initialState = {
  orgList: [],
}

export default function bureau(state = initialState, action) {
  switch (action.type) {
    case ORG_LIST__FAILURE:
      return { ...state, requesting: false };
    case ORG_LIST__REQUEST:
      return { ...state, requesting: true };
    case ORG_LIST__SUCCESS:
      return { ...state, orgList: action.orgList };
    default:
      return state;
  }
}