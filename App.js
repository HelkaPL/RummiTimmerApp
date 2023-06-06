import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayerBar from './components/PlayerBar';
import Timer from './components/Timer';

export default function App() {
  const [player, setPlayer] = useState({ number: 0, colors: ['#0076A3', '#714693', '#F653A6', '#FED33C', '#5CFE3C'] });
  // const [player, setPlayer] = useState({ number: 0, colors: ['#0076A3', '#714693', '#F653A6', '#FED33C', '#5CFE3C'] }); // previous colors array

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
    // marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#333',
  },
});
