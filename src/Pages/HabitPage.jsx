import {useParams} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "../UserData/UserContext.jsx";

const GetIndexes = (name, date, habits) => {
    let index1, index2;

    for (let i = 0; i < habits.length; i++) {
        if (habits[i].name === name) {
            index1 = i;
            for (let j = 0; j < habits[i].history.length; j++) {
                if (habits[i].history[j].date === date) {
                    index2 = j;
                    break;
                }
            }
            break;
        }
    }

    return ({index1, index2});
}

export const HabitPage = () => {
    const {name, date} = useParams();
    const {habits} = useContext(UserContext);
    const reFormattedDate = date.replaceAll('-', '/');
    const indexes = GetIndexes(name, reFormattedDate, habits);
    const [progress, setProgress] = useState(habits[indexes.index1].history[indexes.index2].progress);

    useState(() => {
        habits[indexes.index1].history[indexes.index2].progress = progress;
    }, [progress])


    console.log(habits);
    console.log(progress);
    setProgress(1500);
    console.log(progress);

    console.log(habits);


    console.log(indexes)
}