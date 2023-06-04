import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PlayerBar = ({ player }) => {
  // console.log(player);
  return (
    <View style={styles.header}>
      <Text style={styles.headerContent}>Player {player.number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerContent: {
    fontSize: 43,
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default PlayerBar;