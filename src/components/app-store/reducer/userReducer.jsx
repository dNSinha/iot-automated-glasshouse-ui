export const userReducer = (state = {}, action) => {
    if (action.type === 'SAVE') {
        const newState = Object.assign({}, state, {
            user: action.payload
        })
        return newState;
    }
    return state;
}
