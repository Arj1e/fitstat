import types from './types';

const initialCycles = {
    login_panel_cycle:"mounted"
}

const mountCyclesReducer = (state = initialCycles, action) =>{

    switch(action.type){
        case types.UPDATE_CYCLE:
            return{
                ...state, login_panel_cycle: action.item
            }
        default:
            return state
    }
}

export default mountCyclesReducer;