import {
  AdminsListActionTypes,
  IInitialState,
  TokenksListTypes,
} from "store/actions/tokensList.types";

const InitialState: IInitialState = {
  tokensList: [],
  loading: false,
  errors: null,
};

export const MainPageReducer = (
  state = InitialState,
  action: AdminsListActionTypes
): IInitialState => {
  switch (action.type) {
    case TokenksListTypes.FETCH_TOKENS_REQUEST: {
      return { ...state, loading: true, errors: null };
    }
    case TokenksListTypes.FETCH_TOKENS_SUCCESS: {
      return { ...state, loading: false, tokensList: action.payload };
    }
    case TokenksListTypes.FETCH_TOKENS_FAILURE: {
      return { ...state, loading: false, errors: action.payload };
    }
    default:
      return state;
  }
};
