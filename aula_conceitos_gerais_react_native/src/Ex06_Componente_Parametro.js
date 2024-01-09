import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const App = (param) => {
    console.warn(param);
    
    return (
        <SafeAreaView>
            {
                Object.keys(param).map((key) => (
                    <Text key={key}>Ex06: props variável {key}: {param[key]}</Text>
                ))
            }
        </SafeAreaView>
    );
};

export default App;
