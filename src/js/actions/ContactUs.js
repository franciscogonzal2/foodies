import api from "../api/contactUs";

export const GET_CONTACT_ACTION_START = "GET_CONTACT_ACTION_START";
export const GET_CONTACT_ACTION_SUCCESS = "GET_CONTACT_ACTION_SUCCESS";

function getContactStart() {
  return {
    type: GET_CONTACT_ACTION_START
  };
}
function getContactSuccess(data) {
  return {
    type: GET_CONTACT_ACTION_SUCCESS,
    data
  };
}

export function getContactAsync(data) {
  return function(dispatch) {
    dispatch(getContactStart());
    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(data)
    };
    api.getContactAsync(request)
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
            dispatch(getContactSuccess(data));
        })
      )
  };
}