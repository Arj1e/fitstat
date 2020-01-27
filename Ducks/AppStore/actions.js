import types from './types';

const idset = (id)=>{
    return({ type :types.UPDATE_ID, item:id})
}

export default { idset }