import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

import { useTimer } from './useGameTimer';
const dings = [
    require('../../assets/dong.mp3'),
    require('../../assets/bip.mp3'),
]

function Timer({ player }) {
    const [nowPlayer, setNowPlayer] = useState(player);
    // console.log(`App Player: ${player.number}`);
    // console.log(`Now Player: ${nowPlayer.number}`);
    const timeLeft = useTimer(nowPlayer.number, 40);
    const [ding, setDing] = useState(false);
    const angle = `${nowPlayer.angle[nowPlayer.number]}deg`

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
        // console.log(`Sound: - ${ding ? 'ON' : 'OFF'}`);
        if (time == 8 && (ding === false || ding < 5)) {
            setDing(5);
        }
        if (time <= 5 && time > 0 && ding == time) {
            SoundEndTurn(1);
            setDing(time - 1);
        }
        if (time == 0 && ding === 0) {
            SoundEndTurn(0);
            setDing(false);
        }
        if (time <= 0) {
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
            setNowPlayer({ ...nowPlayer, number: nowPlayer.number % player.maxPlayers + 1 });
        }
        //console.log(`START: ${nowPlayer.number + 1}`);
    }
    const handleStop = () => {
        setNowPlayer({ ...nowPlayer, number: 0 });
        // console.log(`STOP`);
    }

    return (
        <TouchableOpacity
            onPress={handleStart}
            onLongPress={handleStop}
            style={{ ...styles.body, backgroundColor: 'transparent' }}>
            <View><Text style={styles.toptext}>Tap for NEXT, Hold for STOP</Text></View>
            <View style={styles.body}>
                <View style={{ ...styles.outCircle,backgroundColor: nowPlayer.colors[nowPlayer.number === 0 ? player.number : nowPlayer.number] }}>
                    <View style={{ ...styles.inCircle, transform: [{rotate: angle}] }} >
                        <Text style={{ fontSize: 72, fontWeight: 'bold', color: 'orange' }}>{nowPlayer.number === 0 ? "START" : formatTimer(Math.ceil(timeLeft))}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    body: {
        position: 'relative',
        padding: 5,
        alignItems: 'center',
        // justifyContent: 'center',
        height: '100%',
    },
    outCircle: {
        marginTop: 30,
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
        backgroundColor: '#333',
        // transform: [{rotate: '90deg'}]
    },
    toptext: {
        fontSize: 26,
        color: '#666',
        paddingTop: 20,
        margin: 0,
    },
});

export default Timer;