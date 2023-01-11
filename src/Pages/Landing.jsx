import {Notifications} from "../Utilities/Notifications.jsx";
import {TimeCheck} from "../Utilities/TimeCheck.jsx";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserData/UserContext.jsx";
import {HabitCard} from "../Components/HabitCard.jsx";

export const Landing = () => {
    const test = new Date();
    test.setTime(Date.now())
    const {habits} = useContext(UserContext);
    const [currentDate, setCurrentDate] = useState({ day: (test.getDay() + 1), month: test.getMonth() + 1, year: test.getFullYear() })
    const [currentTime, setCurrentTime] = useState({ hours: test.getHours(), minutes: test.getMinutes() });
    const [dateChangeAvailable, setDateChangeAvailable] = useState(true);
    const not = new Notifications();
    test.setTime(Date.now());
    not.componentDidMount();

    useEffect(() => {
        for (let i = 0; i < habits.length; i++) {
            habits[i].frecuency.forEach((day) => {
                if (day === (new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(test))) {
                    habits[i].reminders.forEach((reminder) => {
                        const time = reminder.split(':');
                        if (Number(time[0]) === currentTime.hours && Number(time[1]) === currentTime.minutes) {
                            not.showNotification(habits[i].name, habits[i].icon, habits[i].message)
                        }
                    })
                }
            })
        }
    }, [currentTime]);

    useEffect(() => {
        const formattedDate = currentDate.month + '/' + currentDate.day + '/' + currentDate.year;
        for (let i = 0; i < habits.length; i++) {
            let exists = false;
            for (let j = (habits[i].history.length - 1); j > -1; j--) {
                if (habits[i].history[j].date === formattedDate) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                habits[i].history.push({
                    date: formattedDate,
                    progress: 0
                })
            }
        }
    }, [currentDate]);

    const CheckDateAvailability = (dateObject) => {
        if (dateChangeAvailable) setCurrentDate(dateObject);
    }

    return (
        <div className={'w-[100vw] h-full min-h-screen flex flex-col'}>
            <TimeCheck setCurrentDate={CheckDateAvailability} setCurrentTime={setCurrentTime}/>
            <div className={'mx-auto'}>
                {currentDate.month}/{currentDate.day}/{currentDate.year}
            </div>
            <div className={'flex flex-col justify-around h-full mx-auto'}>
                {habits.map((habit) => <HabitCard key={habit.name} currentDate={currentDate} {...habit} />)}
            </div>
        </div>
    )
}