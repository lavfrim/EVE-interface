import { createStore } from 'redux';

const initialState = {
   fractionsComponentArray: [],
   solarSystemsNames: {},
   errorMessage: '',
};

function reducer(state = initialState, action) {
    switch (action.type) {
      case 'CHANGE_TEST': return ({...state, test: action.payload});
      case 'SET_FACTIONS_ARRAY': return ({...state, fractionsComponentArray:action.payload});
      case 'SET_ERROR_MESSAGE': return ({...state, errorMessage: action.payload});
      default: return state;
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export const setFractionsArray = (array) => {
    return {
        type: 'SET_FACTIONS_ARRAY',
        payload: array,
    }
};

export const setErrorMessage = (message) => {
    return {
        type: 'SET_ERROR_MESSAGE',
        payload: message,
    }
};
