import {Link, useParams} from "react-router-dom";
import {useContext, useState} from "react";
import {HabitsContext} from "../Habits/HabitsContext.jsx";
import Select from "react-select/base";

export const HabitCreationForm = () => {
    const {Colors, Icons} = useContext(HabitsContext);
    const {name, icon, color} = useParams();
    const [notifications, setNotifications] = useState(false);
    const [notificationArray, setNotificationArray] = useState([]);
    const [selectedAtributes, setSelectedAtributes] = useState({
        name: name,
        icon: icon,
        color: color,
        goalValue: 0,
        goalUnit: "",
        notifications: []
    });

    console.log(selectedAtributes.notifications);

    const changes = (event) => {
        event.preventDefault();
        if (event.target.name.slice(0, event.target.name.length - 1) === 'notifications') {
            const aux = selectedAtributes.notifications;
            aux[event.target.name.slice(event.target.name.length - 1)] = event.target.value;
            setSelectedAtributes({
                ...selectedAtributes,
                [event.target.name.slice(0, event.target.name.length - 1)]: aux
            })
        }
        setSelectedAtributes({
            ...selectedAtributes,
            [event.target.name]: event.target.value,
        })
    }

    const addNotification = (event) => {
        event.preventDefault();
        if (notificationArray.length === 0) {
            setNotifications(true);
        }
        setNotificationArray([...notificationArray, (notificationArray.length)]);
    }

    const colors = Object.keys(Colors);
    return (
        <div className={'w-[100%] h-full min-h-screen'}>
            <div className={'flex flex-col justify-between min-h-screen h-full p-4'}>
                <div className={'flex flex-row justify-between w-[100%] lg:w-[90%] mx-auto'}>
                    <Link to={'/habit/new'}>
                        <img className={'w-[30px] h-[30px]'} src={'http://192.168.100.45/BackArrow.png'}/>
                    </Link>
                    <div className={'font-bold text-2xl'}>
                        New Habit
                    </div>
                    <div>
                        <img className={'w-[30px] h-[30px]'} src={'http://192.168.100.45/Profile.png'}/>
                    </div>
                </div>
                <form className={' flex flex-col justify-around h-full w-[90%] lg:w-[50%] mx-auto my-2'}>
                    <div className={'flex justify-between w-full'}>
                        <div className={'w-[48%]'}>
                            <legend>Color</legend>
                            <select className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'color'} defaultValue={color} onChange={changes}>
                                {colors.map(Color => (
                                    <option value={Color} className={'capitalize'}>
                                        <div className={`w-[20px] h-[20px] ${Colors[Color].primary} rounded-lg`}></div>
                                        <div>{Color}</div>
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={'w-[48%]'}>
                            <legend>Icon</legend>
                            <select className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'icon'} defaultValue={icon} onChange={changes}>
                                {Icons.map(Icon => (
                                    <option value={Icon}>
                                        <img src={`http://192.168.100.45/${Icon}.png`}/>
                                        <div>{Icon}</div>
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={'w-full'}>
                        <legend>Name</legend>
                        <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'name'} type={'text'} onChange={changes} defaultValue={name}/>
                    </div>
                    <div className={'w-full flex flex-row justify-between'}>
                        <div className={'flex flex-col w-[48%]'}>
                            <legend>Goal</legend>
                            <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'goalValue'} type={'number'} onChange={changes}/>
                        </div>
                        <div className={'flex flex-col w-[48%]'}>
                            <legend>Goal Unit</legend>
                            <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'goalUnit'} type={'text'} onChange={changes}/>
                        </div>
                    </div>
                    <div className={'w-full'}>
                        <legend>Name</legend>
                        <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'name'} type={'date'} onChange={changes} defaultValue={name}/>
                    </div>
                    <div className={'w-full'}>
                        <legend>Notifications{notifications ? '' : '?'}</legend>
                        {notifications ?
                            <div>
                                {
                                    notificationArray.map((number) =>
                                        <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'notifications' + number} type={'time'} onChange={changes}/>
                                    )
                                }
                                <button className={`h-16 rounded-lg my-auto mx-auto flex justify-center items-center border-2 w-16 text-2xl`} onClick={addNotification}> + </button>
                            </div> :
                            <button className={`h-16 rounded-lg my-auto mx-auto flex justify-center items-center border-2 w-16 text-2xl`} onClick={addNotification}> + </button>
                        }
                    </div>
                </form>
                <div className={' flex flex-col justify-around h-full w-[90%] lg:w-[50%] mx-auto my-2'}>
                    <div className={'font-semibold'}>Preview:</div>
                    <div className={`${Colors[selectedAtributes.color].primary} h-16 rounded-lg my-1 flex justify-between border-2 hover:cursor-pointer `}>
                        <div className={'flex justify-around'}>
                            <img className={'w-8 h-8 my-auto ml-4'} src={`http://192.168.100.45/${selectedAtributes.icon}.png`}/>
                            <div className={'my-auto ml-4'}>{selectedAtributes.name}</div>
                        </div>
                        <div className={'my-auto mr-4 right-0'}>
                            0 / {selectedAtributes.goalValue} {selectedAtributes.goalUnit}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}