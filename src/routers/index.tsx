import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

import ExercisePage  from '../components/ExercisePage/ExercisePage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },

    {
        path: '/exercise/:exerciseName',
        element: <ExercisePage />
    },
]);


export default router;