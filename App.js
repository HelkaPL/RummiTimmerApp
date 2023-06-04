import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayerBar from './components/PlayerBar';
import Timer from './components/Timer';

export default function App() {
  const [player, setPlayer] = useState({ number: 0, colors: { outCircle: ['#0076A3', '#D4CD16', '#F7C8DA', 'skyblue', 'tomato', 'lightblue'] } });
  // const [player, setPlayer] = useState(0);
  // console.log(`Gracz: ${player.number}`)

  return (
    <SafeAreaView style={styles.container}>
      <PlayerBar player={player} />
      <Timer player={player} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
