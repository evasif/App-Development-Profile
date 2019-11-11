import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from './data.json';

//GLOBAL.self = GLOBAL; // eslint-disable-line

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boarder: {
        padding: 10,
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    text: {
        padding: 0,
        fontSize: 15,
        textAlign: 'center',
    },
});

export default class HomeInfo extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <View>
                <View style={styles.boarder}>
                    <Text style={styles.text}>{data.home.email}</Text>
                </View>
                <View style={styles.boarder}>
                    <Text style={styles.text}>{data.home.phone_number}</Text>
                </View>
                <View style={styles.boarder}>
                    <Text style={styles.text}>{data.home.address}</Text>
                </View>
            </View>
        );
    }

};
