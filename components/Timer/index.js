import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useTimer } from './useGameTimer';

function Timer({ player }) {
    const [nowPlayer, setNowPlayer] = useState(player);
    const timeLeft = useTimer(nowPlayer.number, 40);
    // console.log(playerColors.background);
    const formatTimer = (time) => {
        if (!time || time <= 0) {
            // PlaySound();
            return `0:00`;
        }
        if (time < 10) return `0:0${time}`;
        return `0:${time}`;
    }

    const handleStart = () => {
        // setGameStatus("on");
        if (nowPlayer.number >= 4) { setNowPlayer({ ...nowPlayer, number: 1 }) }
        else {
            setNowPlayer({ ...nowPlayer, number: nowPlayer.number + 1 });
        }
        // console.log(nowPlayer);
    }

    return (
        <TouchableOpacity
            onPress={handleStart}
            // onLongPress={console.log('Long press! STOP')}
            style={{ ...styles.body, backgroundColor: 'transparent' }}>
            <View style={styles.body}>
                <View style={{ ...styles.outCircle, backgroundColor: nowPlayer.colors.outCircle[nowPlayer.number] }}>
                    <View style={styles.inCircle}>
                        <Text style={{ fontSize: 90, fontWeight: 'bold', color: 'orange' }}>{nowPlayer !== 0 ? formatTimer(timeLeft.toFixed()) : "START"}</Text>
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