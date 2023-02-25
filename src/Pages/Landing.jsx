import {Notifications} from "../Utilities/Notifications.jsx";
import {TimeCheck} from "../Utilities/TimeCheck.jsx";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserData/UserContext.jsx";
import {HabitCard} from "../Components/HabitCard.jsx";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from "react-router-dom";

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

    console.log()
    console.log(currentTime);

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
        <div className={'w-[100vw] h-full min-h-screen'}>
            <div className={'flex flex-col justify-between min-h-screen h-full p-4'}>
                <TimeCheck setCurrentDate={CheckDateAvailability} setCurrentTime={setCurrentTime}/>
                <div className={'flex flex-col justify-around h-full mx-auto'}>
                    <div className={'mx-auto font-bold text-2xl'}>
                        {
                            currentDate.month === (test.getMonth() + 1) && currentDate.day === (test.getDay() + 1) && currentDate.year === test.getFullYear() ?
                                'Today' : `${currentDate.month}/${currentDate.day}/${currentDate.year}`
                        }
                    </div>
                    <div className={'text-center w-[45px] h-[45px] mx-auto mt-1'}>
                        <CircularProgressbar value={50} text={new Intl.DateTimeFormat("en-US", {weekday: "narrow"}).format(test)} styles={buildStyles({
                            textSize: '40px',
                            pathColor: `rgba(0, 0, 0, 1)`,
                            textColor: '#000000',
                            trailColor: '#d6d6d6',
                        })} />
                    </div>
                </div>
                <div className={'flex flex-col justify-around h-full w-[90%] lg:w-[50%] mx-auto'}>
                    {habits.map((habit) => <HabitCard key={habit.name} currentDate={currentDate} {...habit} />)}
                </div>
                <div className={'flex flex-row justify-around w-[100%] lg:w-[50%] mx-auto bottom-0'}>
                    <Link to={'/habit/new'}  className={'my-auto'}>
                        <img className={'w-[45px] h-[45px] rotate-45 cursor-pointer'} src={'http://192.168.100.45/Add.svg'}/>
                    </Link>
                    <div>2</div>
                    <div className={'my-auto'}>
                        <img className={'w-[40px] h-[40px]'} src={'http://192.168.100.45/Profile.png'}/>
                    </div>
                    <div>4</div>
                    <div className={'my-auto'}>
                        <img className={'w-[40px] h-[40px] cursor-pointer'} src={'http://192.168.100.45/Settings.png'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}