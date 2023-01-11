import {useEffect, useState} from "react";

export const TimeCheck = ({setCurrentDate, setCurrentTime}) => {
    const MINUTE_MS = 60000;

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            time.setTime(Date.now());
            setCurrentDate({
                day: (time.getDay() + 1),
                month: (time.getMonth() + 1),
                year: time.getFullYear()
            })
            setCurrentTime({
                hours: time.getHours(),
                minutes: time.getMinutes()
            })
        }, MINUTE_MS);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])
}