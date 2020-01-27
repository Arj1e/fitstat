import {createStore} from 'redux';
import{ composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../../Ducks/reducers';
const store = createStore(rootReducer, composeWithDevTools());

export default store;