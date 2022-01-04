import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import initialDataReducer from './initialDataReducer';


const appReducer = combineReducers({
    initialDataReducer,
    userReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE') {
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;