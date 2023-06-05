import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

import { useTimer } from './useGameTimer';
const dings = [
    require('../../assets/sound.wav'),
    require('../../assets/counting.mp4'),
]

function Timer({ player }) {
    // const [startPlayer, setStartPlayer] = useState(player);
    // const [nextPlayer, setNextPlayer] = useState(0);
    // if (nextPlayer.number !== player.number) {
    //     setNextPlayer(player.number)
    // }
    // console.log(`Incoming: gracz ${player.number}`);
    const [nowPlayer, setNowPlayer] = useState(player);
    // console.log(`Start Player: ${startPlayer.number}`);
    console.log(`App Player: ${player.number}`);
    console.log(`Now Player: ${nowPlayer.number}`);
    // console.log(startPlayer);
    const timeLeft = useTimer(nowPlayer.number, 40);
    // console.log(nowPlayer);
    //==sound module
    const [ding, setDing] = useState(false)
    const SoundEndTurn = async (soundID) => {
        console.log(`sound !!`);
        const sound = new Audio.Sound()
        try {
            let source = dings[soundID]
            await sound.loadAsync(source)
            await sound
                .playAsync()
                .then(async playbackStatus => {
                    setTimeout(() => {
                        sound.unloadAsync()
                    }, playbackStatus.playableDurationMillis)
                })
                .catch(error => { console.log(error); })
        } catch (error) { console.log(error); }
    }


    const formatTimer = (time) => {
        console.log(`Sound: - ${ding ? 'ON' : 'OFF'}`);
        if (time == 7 && ding == false) { setDing(true); console.log(`Sound: SWITCH`); }
        if (time == 5 && ding) { SoundEndTurn(1); setDing(false); console.log(`SoundCounting`); }
        console.log(`FormatTime: ${time}`);
        // if (!time) return `0:00`;
        if (time <= 0) {
            // if (ding) {
            //     console.log(`Checking time: ${time}`);
            //     SoundEndTurn(0)
            //     setDing(false);
            // };
            return `0:00`;
        }
        if (time < 10) {
            return `0:0${time}`;
        }
        return `0:${time}`;
    }

    const handleStart = () => {
        if (nowPlayer.number === 0) {
            setNowPlayer({ ...nowPlayer, number: player.number });
        } else {
            setNowPlayer({ ...nowPlayer, number: nowPlayer.number % 4 + 1 });
        }
        console.log(nowPlayer);
        console.log(`START: ${nowPlayer.number + 1}`);
    }
    // console.log(nowPlayer);

    const handleStop = () => {
        // setGameStatus("off");
        setNowPlayer({ ...nowPlayer, number: 0 });
        console.log(`STOP`);
    }

    return (
        <TouchableOpacity
            onPress={handleStart}
            onLongPress={handleStop}
            style={{ ...styles.body, backgroundColor: 'transparent' }}>
            <View style={styles.body}>
                <View style={{ ...styles.outCircle, backgroundColor: nowPlayer.colors[nowPlayer.number === 0 ? player.number : nowPlayer.number] }}>
                    <View style={styles.inCircle}>
                        <Text style={{ fontSize: 72, fontWeight: 'bold', color: 'orange' }}>{nowPlayer.number === 0 ? "START" : formatTimer(Math.ceil(timeLeft))}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    body: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    outCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '150%',
        aspectRatio: 1,
        borderRadius: 500,
    },
    inCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        aspectRatio: 1,
        borderRadius: 500,
        backgroundColor: '#333'
        // backgrounrdColor: player.colors.inCircle,
    },
});

export default Timer;