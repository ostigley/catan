import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Table from 'react-native-simple-table'

const columns = [
  {
    title: 'Player',
    dataIndex: 'name',
    // width: 105
  },
  {
    title: 'Won',
    dataIndex: 'wins',
    // width: 140
  },
  {
    title: 'Losses',
    dataIndex: 'losses'
  },
  {
    title: 'Played',
    dataIndex: 'played'
  },
];


export default ScoreBoard = ({dataSource}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catan Table</Text>
      {<Table height={100} columnWidth={60} columns={columns} dataSource={dataSource} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
