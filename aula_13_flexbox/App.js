import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const ExemploFlexbox = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.text}>Exemplo com flexDirection: 'row'</Text>
                    <View style={styles.rowContainer}>
                        <View style={[styles.box, {backgroundColor: 'red'}]}/>
                        <View style={[styles.box, {backgroundColor: 'green'}]}/>
                        <View style={[styles.box, {backgroundColor: 'blue'}]}/>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>Exemplo com flexDirection: 'column'</Text>
                    <View style={styles.columnContainer}>
                        <View style={[styles.box, {backgroundColor: 'red'}]}/>
                        <View style={[styles.box, {backgroundColor: 'green'}]}/>
                        <View style={[styles.box, {backgroundColor: 'blue'}]}/>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>Exemplo com flexDirection: 'row-reverse'</Text>
                    <View style={styles.rowReverseContainer}>
                        <View style={[styles.box, {backgroundColor: 'red'}]}/>
                        <View style={[styles.box, {backgroundColor: 'green'}]}/>
                        <View style={[styles.box, {backgroundColor: 'blue'}]}/>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>Exemplo com flexDirection: 'column-reverse'</Text>
                    <View style={styles.columnReverseContainer}>
                        <View style={[styles.box, {backgroundColor: 'red'}]}/>
                        <View style={[styles.box, {backgroundColor: 'green'}]}/>
                        <View style={[styles.box, {backgroundColor: 'blue'}]}/>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>Exemplo com flexWrap</Text>
                    <View style={styles.flexContainer}>
                        <View style={[styles.box, { backgroundColor: 'red'}]}/>
                        <View style={[styles.box, { backgroundColor: 'green'}]}/>
                        <View style={[styles.box, { backgroundColor: 'blue'}]}/>
                        <View style={[styles.box, { backgroundColor: 'yellow'}]}/>
                        <View style={[styles.box, { backgroundColor: 'orange'}]}/>
                        <View style={[styles.box, { backgroundColor: 'purple'}]}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    section: {
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    rowReverseContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    columnReverseContainer: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },
    flexContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    box: {
        width: 100,
        height: 100,
        margin: 10,
    },
});

export default ExemploFlexbox;
