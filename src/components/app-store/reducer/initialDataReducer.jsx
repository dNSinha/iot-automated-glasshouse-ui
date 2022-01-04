import * as actionTypes from '../actions/actionTypes';

export default function initialDataReducer(state = null, action) {
    switch (action.type) {
        case actionTypes.SET_INITIAL_DATA:
            return Object.assign({}, action.data);
        default:
            return state;
    }
}
