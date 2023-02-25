import {UserContext} from "./UserContext.jsx";
import {useState} from "react";

export const UserProvider = ({children}) => {

    const [habits, setHabits] = useState([
        {
            type: "",
            name: "Walk",
            icon: "Running",
            color: {
                primary: "bg-lime-500",
                secondary: "F1AB86"
            },
            goal: {
                number: 5000,
                unit: "steps"
            },
            frecuency: ['Tuesday', 'Thursday', 'Saturday'],
            reminders: ['11:05', '11:08', '11:11'],
            message: "There's no living without walking",
            history: [],
        },
        {
            type: "",
            name: "Read",
            icon: "Reading",
            color: {
                primary: "bg-red-600",
                secondary: "977390"
            },
            goal: {
                number: 100,
                unit: "pages"
            },
            frecuency: ['Thursday', 'Saturday', 'Sunday'],
            reminders: ['21:15', '21:17', '21:19'],
            message: "A reader lives a thousand lives before he dies",
            history: [],
        },
    ])

    return (
        <UserContext.Provider value={{habits, setHabits}}>
            {children}
        </UserContext.Provider>
    )
}