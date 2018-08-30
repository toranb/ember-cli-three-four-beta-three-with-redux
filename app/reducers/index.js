import { combineReducers } from 'redux';

const number = ((state, action) => {
    if(action.type === 'ADD') {
        return state + 1;
    }
    return state || 0;
});

export default combineReducers({
    number
});
