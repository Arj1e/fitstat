import {combineReducers} from 'redux';
import mountCyclesReducer from './LifeCycle';
import appStateReducer from './AppStore';

const rootReducer = combineReducers({
    appstate: appStateReducer,
    cyclestate: mountCyclesReducer
})

export default rootReducer;