import {HabitsContext} from './HabitsContext'
export const HabitsProvider = ({children}) => {

    const Habits = [
        {
            type: "Sports",
            name: "Walk",
            icon: "",
            colors: {
                primary: "",
                secondary: ""
            },
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "Sports",
            name: "Run",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "Sports",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "Sports",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "Sports",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "Sports",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        },
        {
            type: "",
            name: "",
            icon: "",
            color: "",
            goal: {
                value: "",
                unit: ""
            },
            frecuency: "",
            reminders: "",
            message: "",
        }
    ];

    return (
        <HabitsContext.Provider value={Habits}>
            {children}
        </HabitsContext.Provider>
    )
}