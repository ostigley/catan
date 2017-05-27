/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { firebaseApp } from './src/firebase/firebase.js'
import ScoreBoard from './src/score-board.js'
import ClaimWin from './src/claim-win.js'

export default class catan extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: []
    }

    this.dataRef = firebaseApp.database().ref();
  }

  componentDidMount() {
    firebaseApp.database().ref('/players/').once('value')
      .then( snapshot => {
        this.setState({data: snapshot.val()}, function() {console.log(this.state)})
      })
      .catch(console.error)
  }

  // listenForData (dataRef) {
  //   // dataRef.on('value', snap => {

  //   //   // get children as an array
  //   //   var data = [];
  //   //   snap.forEach((child) => {
  //   //     console.log(child)
  //   //     data.push({
  //   //       title: child.val().title,
  //   //       _key: child.key
  //   //     });
  //   //   });

  //   // });
  // }

  render() {
    return (
      <View style={styles.container}>
        <ScoreBoard dataSource={this.state.data}/>
        <ClaimWin />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('catan', () => catan);
