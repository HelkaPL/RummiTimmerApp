import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayerBar from './components/PlayerBar';
import Timer from './components/Timer';

export default function App() {
  const [player, setPlayer] = useState({ number: 0, maxPlayers: 4, colors: ['#666666', '#714693', '#FED33C', '#0076A3', '#5CFE3C'], angle: [0, 0, 90, 180, 270] });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#333"
        barStyle='Visible'
      />
      <PlayerBar setPlayer={setPlayer} player={player} />
      <Timer player={player} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#333',
  },
});
