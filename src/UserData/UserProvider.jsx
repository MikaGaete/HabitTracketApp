import {UserContext} from "./UserContext.jsx";
import {useEffect, useState} from "react";

export const UserProvider = ({children}) => {
    const [habits, setHabits] = useState(JSON.parse(localStorage.getItem('HabitTrackerAppData')));

    useEffect(() => {
        localStorage.removeItem('HabitTrackerAppData');
        localStorage.setItem('HabitTrackerAppData', JSON.stringify(habits));
    }, [habits]);

    const LocalSave = async (habit) => {
        await setHabits([
            ...habits,
            habit
        ])
    }

    return (
        <UserContext.Provider value={{habits, LocalSave}}>
            {children}
        </UserContext.Provider>
    )
}