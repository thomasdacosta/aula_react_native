import React from 'react'
import { View, Text } from 'react-native'

export default ({num = 0}) => {
    return (
        <View>
            <Text>Ex12: O resultado é:</Text>
            {num % 2 === 0
                ? <Text>Par</Text>
                : <Text>Ímpar</Text>
            }
        </View>
    )
}