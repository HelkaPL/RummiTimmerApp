import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayerBar from './components/PlayerBar';
import Timer from './components/Timer';

export default function App() {
  const [player, setPlayer] = useState({ number: 0, colors: { outCircle: ['#0076A3', '#714693', '#F653A6', '#FED33C', '#5CFE3C'] } });
  const [nextPlayer, setNextPlayer] = useState(player.number);
  console.log(`Gracz: ${player.number}`)
  callback = (nextPlayer) => {
    setNextPlayer(nextPlayer);
  }
  console.log(`Teraz gra: ${nextPlayer}`);

  return (
    <SafeAreaView style={styles.container}>
      <PlayerBar player={player} />
      <Timer player={player} parentCallback={callback} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#333',
  },
});
