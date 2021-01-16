import axios from "axios";

async function getAll() {
  return axios
    .get(`${process.env.REACT_APP_API}/models`)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return undefined;
    });
}

async function getOne(id) {
  return axios
    .get(`${process.env.REACT_APP_API}/models/`+ id)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return undefined;
    });
}

async function getAllDetails(id) {
  return axios
    .get(`${process.env.REACT_APP_API}/details/`+ id)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return undefined;
    });
}

async function getAllOthers(id) {
  return axios
    .get(`${process.env.REACT_APP_API}/otherdetails/`+ id)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return undefined;
    });
}

async function getAllCategory(category) {
  return axios
    .post(`${process.env.REACT_APP_API}/models/`+ category)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return undefined;
    });
}


export { getAll, getOne, getAllDetails, getAllOthers, getAllCategory };