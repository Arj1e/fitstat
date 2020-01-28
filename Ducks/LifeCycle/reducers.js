import types from './types';

const initialCycles = {
    login_panel_cycle:"mounted",
    login_panel_animation:"mounted",
    mask_params_cycle:"mounted",
    mask_params_animation:"mounted"
}

const mountCyclesReducer = (state = initialCycles, action) =>{

    switch(action.type){
        case types.UPDATE_CYCLE:
            return{
                ...state, login_panel_cycle: action.item
            }
        case types.UPDATE_MASK_CYCLE:
            return{
                ...state, mask_params_cycle: action.item
            }
    

        default:
            return state
    }
}

export default mountCyclesReducer;