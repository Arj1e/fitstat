import types from './types';

const cycleset = (cycle) =>{
   return({type: types.UPDATE_CYCLE, item:cycle})
}
const maskparams =(cycle) =>{
   return({type : types.UPDATE_MASK_CYCLE, item:cycle})
}
const maskanimate =(cycle)=>{
   return({type : types.UPDATE_MASK_ANIMATION, item:cycle })
}
const loginanimate =(cycle)=>{
   return({type: types.UPDATE_LOGIN_ANIMATION, item:cycle})
}

export default { 
   cycleset,
   maskparams,
   loginanimate,
   maskanimate
 };
