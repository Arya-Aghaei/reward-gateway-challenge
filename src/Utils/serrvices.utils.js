import axios from "axios";

const API_USERNAME = process.env.REACT_APP_API_USERNAME;
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD;

export const authRequestHeader = () => {
  const headers = {
    Authorization: `Basic ${btoa(API_USERNAME + ":" + API_PASSWORD)}`,
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
  };

  return headers;
};

const CheckError = (response, showNotification) => {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const doApiGet = async ({ url = "" }) => {
  try {
    const response = await axios
      .get(`${url}`, {
        headers: {
          ...authRequestHeader(),
        },
      })
      .then((res) => {
        return res?.data;
      })
      .catch((er) => {
        CheckError(er);
      });
    return response;
  } catch (e) {
    CheckError(e);
  }
};
