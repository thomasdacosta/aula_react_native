import React, { Fragment } from 'react';
import { Text } from 'react-native';

const App = () => {
    return (
        <Fragment key={1}>
            <Text>Ex08: Exemplo usando o React Fragment que é diferente do View</Text>
            <Text>Ex08: Serve para envolver 2 componentes ou mais</Text>
        </Fragment>
    );
}

export default App;
