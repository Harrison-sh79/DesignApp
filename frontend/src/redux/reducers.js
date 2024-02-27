import { LOAD_STATE, SET_VALUE, CLEAR_STATE } from "./actionTypes";
import {
  CARD_APPLY_STATUS,
  EMAIL_VERIFIED_STATUS,
} from "../utils/globalConstants";

const initialState = {
  userId: null,
  cardApplyStatus: CARD_APPLY_STATUS.NO_APPLICATION,
  emailVerifiedStatus: EMAIL_VERIFIED_STATUS.NOT_VERIFIED,
  card: null,
  previewTransactions: [],
};

export const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STATE:
      return loadState(state, action.value);
    case SET_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
};
