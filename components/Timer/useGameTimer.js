import { useEffect, useState } from "react";

export const useTimer = (nowPlayer, timeLimitInSeconds) => {
    const [startTime, setStartTime] = useState(Date.now());
    const [player, setPlayer] = useState(nowPlayer);
    if (nowPlayer !== player) {
        setStartTime(Date.now())
        setPlayer(nowPlayer);
    };
    // console.log(`Start time ${new Date(startTime)}`);
    const endTime = startTime + timeLimitInSeconds * 1000;
    // console.log(`End time ${new Date(endTime)}`);
    const [timer, setTimer] = useState(timeLimitInSeconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const timeNow = Date.now();
            const timeLeft = ((endTime - timeNow) / 1000);
            console.log(`${intervalId} - ${player} - ${timeLeft}`);
            setTimer(timeLeft);
            if (player === 0 || timeLeft < 0) { clearInterval(intervalId); }

        }, 1000 * 1 / 10);

        return () => {
            clearInterval(intervalId);
        };
    }, [startTime, player]);

    return timer;
};
