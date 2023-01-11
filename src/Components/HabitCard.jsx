import {Link, useNavigate} from "react-router-dom";
import {HabitPage} from "../Pages/HabitPage.jsx";
import {useState} from "react";

export const HabitCard = ({name, icon, color, goal, currentDate}) => {
    const navigate = useNavigate();

    const ExpandHabit = () => {
        const formattedDate = currentDate.month + '-' + currentDate.day + '-' + currentDate.year;
        navigate(`/habit/${name}/${formattedDate}`)
    }

    return (
        <div className={`bg-[#${color.primary}] w-[50vw] h-16 rounded-lg my-1 flex justify-between hover:cursor-pointer`} onClick={ExpandHabit}>
            <div className={'flex justify-around w-[8vw]'}>
                <img className={'w-8 h-8 my-auto'} src={icon}/>
                <div className={'my-auto'}>{name}</div>
            </div>
            <div className={'my-auto mr-2'}>0/{goal.number} {goal.unit}</div>
        </div>
    )
}