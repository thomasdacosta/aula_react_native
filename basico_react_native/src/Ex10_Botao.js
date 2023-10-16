import React from 'react';
import { Button } from 'react-native';

const App = () => {
    function cliqueBotao() {
        alert('Botão 1');
    }

    return (
        <>
            <Button title="Clica Aqui 1" onPress={cliqueBotao} />

            <Button title="Clica Aqui 2" onPress={function () {
                alert('Botão 2');
            }} />
            
            <Button title="Clica Aqui 3" onPress={() => {
                alert('Botão 3');
            }} />
        </>
    );
}

export default App;
