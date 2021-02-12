import { LOGIN_USER, REGISTER_USER, FETCH_ALL_USERS } from "./actionTypes";

// Register User
export const registerUser = (body) => {
  return (dispatch) => {
    // fetch(`${URL}/user_events`, {
    //   method: "POST",
    //   body: JSON.stringify(body),
    //   headers: {
    //     Accept: "application/json",
    //     "content-type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch(currentUserInfo(data.attendee_id));
    //     dispatch(showEventInfo(data.event_id));
    //   });
  };
};

//fetches all users
export const fetchUsers = () => {
  return (dispatch) => {
    // fetch(`${URL}/users`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch({
    //       type: FETCH_USERS,
    //       payload: data,
    //     });
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  };
};
