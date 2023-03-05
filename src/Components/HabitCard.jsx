import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {HabitsContext} from "../Habits/HabitsContext.jsx";

export const HabitCard = ({name, icon, color, goal, currentDate}) => {
    const navigate = useNavigate();
    const {Colors} = useContext(HabitsContext);

    const ExpandHabit = () => {
        const formattedDate = currentDate.month + '-' + currentDate.day + '-' + currentDate.year;
        navigate(`/habit/${name}/${formattedDate}`)
    }

    return (
        <div className={`${Colors[color].primary} h-16 rounded-lg my-1 flex justify-between border-2 hover:cursor-pointer `} onClick={ExpandHabit}>
            <div className={'flex justify-around'}>
                <img className={'w-8 h-8 my-auto ml-4'} src={`http://192.168.100.45/${icon}.png`}/>
                <div className={'my-auto ml-4'}>{name}</div>
            </div>
            <div className={'my-auto mr-4 right-0'}>
                0 / {goal.number} {goal.unit}
            </div>
        </div>
    )
}