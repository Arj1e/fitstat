import types from './types';

const INITIAL_STATE = {
    user_id: 2,
    user_name: "Test",
    user_lastname: "Testowy",
    sesion_key: 12345
}

const appStateReducer = (state =  INITIAL_STATE, action)=>{
    switch(action.type){
        case types.UPDATE_ID:
            return{
                ...state, user_id: action.item
            }
        default:
            return state
    }
}

export default appStateReducer; 