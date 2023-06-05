import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PlayerBar = ({ player }) => {
  // console.log(player);
  return (
    <View style={styles.header}>
      <TouchableOpacity style={{ ...styles.playerAvatar, backgroundColor: player.colors.outCircle[1] }}>
        <Text style={styles.headerContent}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.playerAvatar, backgroundColor: player.colors.outCircle[2] }}>
        <Text style={styles.headerContent}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.playerAvatar, backgroundColor: player.colors.outCircle[3] }}>
        <Text style={styles.headerContent}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.playerAvatar, backgroundColor: player.colors.outCircle[4] }}>
        <Text style={styles.headerContent}>4</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 5,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  playerAvatar: {
    borderWidth: 0,
    borderRadius: 500,
    margin: 0,
    padding: 0,
    height: 60,
    alignItems: 'center',
    aspectRatio: 1,
  },
  headerContent: {
    margin: 0,
    padding: 0,
    fontSize: 43,
    // alignItems: 'center',
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default PlayerBar;