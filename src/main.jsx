import React from 'react'
import ReactDOM from 'react-dom/client'
import {Landing} from './Pages/Landing.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HabitsProvider} from "./Habits/HabitsProvider.jsx";
import {UserProvider} from "./UserData/UserProvider.jsx";
import {HabitPage} from "./Pages/HabitPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <HabitsProvider>
            <UserProvider>
                <Routes>
                    <Route path={'/'} element={<Landing/>}/>
                    <Route path={'/habit/:name/:date'} element={<HabitPage/>}/>
                </Routes>
            </UserProvider>
        </HabitsProvider>
    </BrowserRouter>
)