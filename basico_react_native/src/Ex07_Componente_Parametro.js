import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const App = ({param1, param2}) => {
    return (
        <SafeAreaView>
            <Text>Ex07: props fixo 1: {param1}</Text>
            <Text>Ex07: props fixo 2: {param2}</Text>
        </SafeAreaView>
    );
};

export default App;
