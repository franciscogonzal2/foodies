import api from "../api/categories";

export const GET_CATEGORIES_ACTION_START = "GET_CATEGORIES_ACTION_START";
export const GET_CATEGORIES_ACTION_SUCCESS = "GET_CATEGORIES_ACTION_SUCCESS";

function getCategoriesStart() {
  return {
    type: GET_CATEGORIES_ACTION_START
  };
}
function getCategoriesSuccess(data) {
  return {
    type: GET_CATEGORIES_ACTION_SUCCESS,
    data
  };
}
export function getCategoriesAsync() {
  return function(dispatch) {
    dispatch(getCategoriesStart());
    const request = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    api.getCategoriesAsync(request)
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
            dispatch(getCategoriesSuccess(data));
        })
      )
  };
}