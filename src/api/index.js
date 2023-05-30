import axios from "axios";
export async function petition({
  url,
  method,
  body,
  constants,
  token,
  dispatch,
  headers,
  params,
  controller = null,
}) {
  const { REQUEST, SUCCESS, FAILURE } = constants;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let petitionHeaders = {
    "Content-Type": "application/json",
  };
  if (token) {
    petitionHeaders["Authorization"] = `Bearer ${userInfo.access}`;
  }
  let paramsPetition = {};
  if (headers) {
    petitionHeaders = { ...petitionHeaders, ...headers };
  }
  if (params) {
    paramsPetition = params;
  }
  try {
    if (controller) {
      console.log(controller.signal);
    }
    dispatch({ type: REQUEST });
    const { data } = await axios({
      method,
      url: process.env.REACT_APP_API_URL + url,
      data: body,
      headers: petitionHeaders,
      params: paramsPetition,
      signal: controller ? controller.signal : null,
    });
    dispatch({ type: SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response?.data ? error.response.data : error.message,
    });
    if (
      error.response?.data === "invalid token" ||
      error.response?.data === "jwt expired"
    ) {
      localStorage.removeItem("token");
    }
    throw error.response?.data ? error.response.data : error.message;
  }
}
