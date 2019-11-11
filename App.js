import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Animated,
} from 'react-native';
import data from './data.json';
import HomeInfo from './HomeInfo';
import WorkInfo from './WorkInfo';

GLOBAL.self = GLOBAL; // eslint-disable-line

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    paddingTop: 40,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#0099ff',
    borderRadius: 15,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.3);

    this.state = {
      info: true,
      button: 'work',
    };
  }

  spring = () => {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  };

  changeState = () => {
    this.spring();
    const { info } = this.state;
    if (info === true) {
      this.setState({ info: false });
      this.setState({ button: 'home' });
    } else {
      this.setState({ info: true });
      this.setState({ button: 'work' });
    }
  };

  render() {
    const { info, button } = this.state;
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 250,
            height: 250,
            borderColor: 'black',
            borderWidth: 2,
            transform: [{ scale: this.springValue }],
          }}
          source={{ uri: data[0].avatar }}
        />
        <Text style={styles.name}>{`${data[0].name.first_name} ${data[0].name.last_name}`}</Text>
        <TouchableOpacity style={styles.button} onPress={this.changeState} underlayColor="#fff">
          <Text style={styles.buttonText}>{`Show ${button} info`}</Text>
        </TouchableOpacity>
        {info && <HomeInfo data={data[0]} />}
        {!info && <WorkInfo data={data[0]} />}
      </View>
    );
  }
}
