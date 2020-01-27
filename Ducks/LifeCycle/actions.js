import types from './types';

const cycleset = (cycle) =>{
   return({type: types.UPDATE_CYCLE, item:cycle})
}

export default { cycleset };
