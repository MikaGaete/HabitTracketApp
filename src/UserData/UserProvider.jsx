import {UserContext} from "./UserContext.jsx";
import {useState} from "react";

export const UserProvider = ({children}) => {

    const [habits, setHabits] = useState([
        {
            type: "",
            name: "Walk",
            icon: "https://static.thenounproject.com/png/112220-200.png",
            color: {
                primary: "C57B57",
                secondary: "F1AB86"
            },
            goal: {
                number: 5000,
                unit: "steps"
            },
            frecuency: ['Tuesday', 'Thursday', 'Saturday'],
            reminders: ['20:12', '20:14', '20:16'],
            message: "There's no living without walking",
            history: [],
        }/*,
        {
            type: "",
            name: "Read",
            icon: "https://img.favpng.com/20/0/17/computer-icons-book-png-favpng-80cubVqjQmBHYCFaaxbdEQQQt.jpg",
            color: {
                primary: "#785589",
                secondary: "#977390"
            },
            goal: {
                number: 100,
                unit: "pages"
            },
            frecuency: ['Thursday', 'Saturday', 'Sunday'],
            reminders: ['21:15', '21:17', '21:19'],
            message: "A reader lives a thousand lives before he dies",

        },*/
    ])

    return (
        <UserContext.Provider value={{habits, setHabits}}>
            {children}
        </UserContext.Provider>
    )
}