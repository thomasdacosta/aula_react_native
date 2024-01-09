import React, { Fragment } from 'react';
import { Text, View } from 'react-native';

const App = () => {
    const platform = Platform.OS;
    return (
        <View>
            {
                platform === 'android' ? (
                    <Text>Ex11: Android</Text>
                ) : platform === 'ios' ? (
                    <Text>Ex11: iOS</Text>
                ) : (
                    <Text>Ex11: Outro</Text>                    
                )
            }
        </View>
    );
}

export default App;
