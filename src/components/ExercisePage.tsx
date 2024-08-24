import React from 'react';
import { useParams } from 'react-router-dom';

// Componentes para os exercícios
import Ex001 from '../pages/exercisePages/exercise001';
import Ex002 from '../pages/exercisePages/exercise002';

const exerciseComponents: { [key: string]: React.ComponentType } = {
    ex001: Ex001,
    ex002: Ex002,
};

const ExercisePage:React.FC = () => {
    const { exerciseName } = useParams<{ exerciseName: string }>();


    if (!exerciseName) {
        return <div>Exercise not found</div>;
    }

    const Component = exerciseComponents[exerciseName];

    return Component ? <Component /> : <div>Exercise not found</div>;
};

export default ExercisePage;

