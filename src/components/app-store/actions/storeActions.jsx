import * as actionTypes from './actionTypes';

export const setInitialData = (data) => {
    return { type: actionTypes.SET_INITIAL_DATA, data }
};

export const addUerDetails = (payload) => {
    return { type: 'SAVE', payload }
};