import axios from "axios";

const BASE_URL = `https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json`;

export const homeInitState = {
  loading: false,
  error: null,
  data: [],
};

export const homeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_LOADING": {
      return { loading: true, error: null, data: [] };
    }
    case "UPDATE_ERROR": {
      return { loading: false, error: "Failed to fetch data", data: [] };
    }
    case "UPDATE_SUCCESS": {
      return { loading: false, error: null, data: [...payload.data] };
    }
    default: {
      throw new Error("Invalid Action Type");
    }
  }
};

export const getHomePageData = async (dispatch) => {
  dispatch({ type: "UPDATE_LOADING" });
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL}`,
    });
    dispatch({ type: "UPDATE_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "UPDATE_ERROR" });
  }
};

export const getSingleVideo = async (target, id) => {
  try {
    const response = await axios({
      method: "GET",
      url: `http://localhost:8080/${target}/${id}`,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const searchVideos = async (query) => {
  try {
    const response = await axios({
      method: "GET",
      url: `http://localhost:8080/video`,
      params: {
        q: query,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const authenticateUser = async (credentials) => {
  try {
    const response = await axios({
      method: "POST",
      url: `https://reqres.in/api/login`,
      data: credentials,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const uploadYourVideo = async (details) => {
  try {
    await axios({
      method: "POST",
      url: `http://localhost:8080/uploads`,
      data: { ...details },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getYourVideos = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `http://localhost:8080/uploads`,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
