import { GET_OTHER, GET_OTHER2, GET_MODELS, GET_ORDER, GET_ONE_MODEL } from '../constants/constants';


function modelsReducer(state = { details1: [], details2: [], models: [], order: [], model: [] }, action) {

    switch (action.type) {
        case GET_OTHER:
            return {
                ...state,
                details1: action.payload
            }
        case GET_OTHER2:
            return {
                ...state,
                details2: action.payload
            }
        case GET_MODELS:
            return {
                ...state,
                models: action.payload
            }
        case GET_ORDER:
            return {
                ...state,
                order: action.payload
            }
        case GET_ONE_MODEL:
            return {
                ...state,
                model: action.payload
            }
            
        default:
            return state
    }
}


export { modelsReducer };