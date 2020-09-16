import api from "../api/menu";

export const GET_MENU_ACTION_START = "GET_MENU_ACTION_START";
export const GET_MENU_ACTION_SUCCESS = "GET_MENU_ACTION_SUCCESS";

function getMenuActionStart() {
  return {
    type: GET_MENU_ACTION_START
  };
}
function getMenuActionSuccess(data) {
  return {
    type: GET_MENU_ACTION_SUCCESS,
    data
  };
}
export function getMenuAsync() {
  return function(dispatch) {
    dispatch(getMenuActionStart());
    const request = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    api.getMenuAsync(request)
      .then(response => {
        const statusReq = response.status;
        if (statusReq === 200 || statusReq === 202) {
          return response.json();
        } else {
          if (statusReq === 401) {
            return false;
          } else {
            return false;
          }
        }
      })
      .then(data =>
        dispatch(() => {
            dispatch(getMenuActionSuccess(data));
        })
      )
  };
}