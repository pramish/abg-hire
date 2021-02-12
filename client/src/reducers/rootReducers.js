import { FETCH_ALL_USERS, REGISTER_USER } from "../actions/actionTypes";

const initialState = {
  allUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case REGISTER_USER:
      return {
        // ...state,
        // allEvents: [...state.allEvents, action.payload],
        // currentUserInfo: {
        //   ...state.currentUserInfo,
        //   created_events: [
        //     ...state.currentUserInfo.created_events,
        //     action.payload,
        //   ],
        //   events: [...state.currentUserInfo.events, action.payload],
        // },
      };
    default:
      return state;
  }
};

export default reducer;
