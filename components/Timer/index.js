import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

import { useTimer } from './useGameTimer';
const dings = [
    require('../../assets/sound.wav'),
]

function Timer({ player }) {
    const [nowPlayer, setNowPlayer] = useState(player);
    const timeLeft = useTimer(nowPlayer.number, 10);
    // console.log(playerColors.background);
    const [ding, setDing] = useState(false)
    //==sound module
    const SoundEndTurn = async (time) => {
        console.log(`sound - ${time}`);
        const sound = new Audio.Sound()
        try {
            let source = dings[0]
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
        console.log(`Czas: ${time}`);
        if (!time) return `0:00`
        if (time <= -0) {
            if (!ding) {
                setDing(true);
                SoundEndTurn(time);
            }
            return `0:00`;
        }
        if (time < 10) {
            return `0:0${time}`;
        }
        return `0:${time}`;
    }

    const handleStart = () => {
        if (nowPlayer.number >= 4) { setNowPlayer({ ...nowPlayer, number: 1 }) }
        else {
            setNowPlayer({ ...nowPlayer, number: nowPlayer.number + 1 });
        }
        console.log(`START: ${nowPlayer.number + 1}`);
        // console.log(nowPlayer);

    }
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
                <View style={{ ...styles.outCircle, backgroundColor: nowPlayer.colors.outCircle[nowPlayer.number] }}>
                    <View style={styles.inCircle}>
                        <Text style={{ fontSize: 72, fontWeight: 'bold', color: 'orange' }}>{nowPlayer.number === 0 ? "START" : formatTimer(timeLeft.toFixed())}</Text>
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