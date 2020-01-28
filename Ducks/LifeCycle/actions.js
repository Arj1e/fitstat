import types from './types';

const cycleset = (cycle) =>{
   return({type: types.UPDATE_CYCLE, item:cycle})
}
const maskparams =(cycle) =>{
   return({type : types.UPDATE_MASK_CYCLE, item:cycle})
}

export default { 
   cycleset,
   maskparams
 };
