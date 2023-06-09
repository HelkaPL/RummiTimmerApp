import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PlayerBar = (params) => {
  // console.log(player);
  return (
    <>
      <View><Text style={{ ...styles.toptext, opacity: params.player.number === 0 ? 1 : 0 }}>Wybierz kto rozpoczyna gre.</Text></View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => params.setPlayer({ ...params.player, number: 1 })}
          style={{ ...styles.playerAvatar, backgroundColor: params.player.colors[1] }}
        >
          <Text style={styles.headerContent}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => params.setPlayer({ ...params.player, number: 2 })}
          style={{ ...styles.playerAvatar, backgroundColor: params.player.colors[2] }}
        >
          <Text style={styles.headerContent}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => params.setPlayer({ ...params.player, number: 3 })}
          style={{ ...styles.playerAvatar, backgroundColor: params.player.colors[3] }}
        >
          <Text style={styles.headerContent}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => params.setPlayer({ ...params.player, number: 4 })}
          style={{ ...styles.playerAvatar, backgroundColor: params.player.colors[4] }}
        >
          <Text style={styles.headerContent}>4</Text>
        </TouchableOpacity>
      </View >
    </>
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
  toptext: {
    fontSize: 26,
    color: '#FFF',
    opacity: 1,
  },
});

export default PlayerBar;