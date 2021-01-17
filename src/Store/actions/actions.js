import Axios from 'axios';
import {GET_OTHER, GET_MODELS, GET_OTHER2, GET_ORDER, GET_ONE_MODEL }from '../constants/constants';


const getAllModels = () => async (dispatch) => {
    const { data } = await Axios.get(`${process.env.REACT_APP_API}/models`);
    dispatch({type: GET_MODELS, payload: data})
}

const getAllOther = (carId, id) => async (dispatch) => {
        const { data } = await Axios.get(`${process.env.REACT_APP_API}/otherdetails/` + carId + '/' + id);
    id === 1 ? (dispatch({ type: GET_OTHER, payload: data })) : (dispatch({ type: GET_OTHER2, payload: data }) )   
}

const getOneModel = (id) => async (dispatch) => {
    const { data } = await Axios.get(`${process.env.REACT_APP_API}/models/`+ id);
    dispatch({type: GET_ONE_MODEL, payload: data})
}

const getAllAutos = () => async (dispatch) => {
    const { data } = await Axios.get(`${process.env.REACT_APP_API}/models/autos`);
    dispatch({type: GET_MODELS, payload: data})
}

const getAllPickups = () => async (dispatch) => {
    const { data } = await Axios.get(`${process.env.REACT_APP_API}/models/pickups`);
    dispatch({type: GET_MODELS, payload: data})
}

const getAllSuvs = () => async (dispatch) => {
    const { data } = await Axios.get(`${process.env.REACT_APP_API}/models/suvs`);
    dispatch({type: GET_MODELS, payload: data})
}

const getOrder = (a,b) => (dispatch) => {
    const data = { a, b }
    dispatch({type: GET_ORDER, payload: data})
}


export { getAllModels, getAllOther, getOneModel, getAllAutos, getAllPickups, getAllSuvs, getOrder };

