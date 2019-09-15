import React from 'react';

import {CTX} from './Store';

export default function Poem() {

    const [appState, doAction] = React.useContext(CTX);

    return (
        <div>
            <button onClick={() => doAction({type: 'UPDATE_COLOR', payload: 'blue'})}>Click</button>
            Roses are {appState.color}
        </div>
    )
}