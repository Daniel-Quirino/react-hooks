import React from 'react';

const CTX = React.createContext();

export {CTX};

function reducer(state, action) {
    debugger;
    switch(action.type) {
        case 'UPDATE_COLOR':
            return {...state, color: action.payload}
        default:
            throw Error('reducer error');
    }
}

export default function Store(props) {
    const stateHook = React.useReducer(reducer, {color: 'red'});

    return (
        <CTX.Provider value={stateHook}>
            {props.children}
        </CTX.Provider>
    )
}

