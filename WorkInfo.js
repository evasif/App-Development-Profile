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
        borderColor: '#F44336',
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

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: data.name,
        };
    }

    render() {
        const { data } = this.props;
        return (
            <View>
                <View style={styles.boarder}>
                    <Text style={styles.text}>{data.work.email}</Text>
                </View>
                <View style={styles.boarder}>
                    <Text style={styles.text}>{data.work.phone_number}</Text>
                </View>
                <View style={styles.boarder}>
                    <Text style={styles.text}>{data.work.address}</Text>
                </View>
                <View style={styles.boarder}>
                    <Text style={styles.text}>{data.work.job_title}</Text>
                </View>
                <View style={styles.boarder}>
                    <Text style={styles.text}>{data.work.department}</Text>
                </View>
                <View style={styles.boarder}>
                    <Text style={styles.text}>{data.work.company}</Text>
                </View>
            </View>
        );
    }
}
