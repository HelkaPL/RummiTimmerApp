import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PlayerBar = (params) => {
  return (
    <>
      <View><Text style={{ ...styles.toptext, opacity: params.player.number === 0 ? 1 : 0 }}>Wybierz kolor który zaczyna.</Text></View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => params.setPlayer({ ...params.player, number: 1 })}
          style={{ ...styles.playerAvatar, backgroundColor: params.player.colors[1] }}
        >
          <Text style={styles.headerContent}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => params.setPlayer({ ...params.player, number: 2 })}
          style={{ ...styles.playerAvatar, backgroundColor: params.player.colors[2] }}
        >
          <Text style={styles.headerContent}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => params.setPlayer({ ...params.player, number: 3 })}
          style={{ ...styles.playerAvatar, backgroundColor: params.player.colors[3] }}
        >
          <Text style={styles.headerContent}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => params.setPlayer({ ...params.player, number: (params.player.maxPlayers < 4) ? params.player.number : 4 })}
          onLongPress={() => params.setPlayer({ ...params.player, maxPlayers: (params.player.maxPlayers < 4) ? 4 : 3 })}
          style={{ ...styles.playerAvatar, backgroundColor: params.player.colors[4], opacity: params.player.maxPlayers >= 4 ? 1 : 0.2 }}
        >
          <Text style={styles.headerContent}></Text>
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