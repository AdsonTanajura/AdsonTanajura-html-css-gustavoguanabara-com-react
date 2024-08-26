import React from 'react';
import { useParams } from 'react-router-dom';

// Componentes para os exercícios
import Ex001 from '../../pages/ExercisePages/exercise001';
import Ex002 from '../../pages/ExercisePages/exercise002';
import Ex003 from '../../pages/ExercisePages/exercise003';
import Ex004 from '../../pages/ExercisePages/exercise004';
import { Container } from './styles';


const exerciseComponents: { [key: string]: React.ComponentType } = {
    ex001: Ex001,
    ex002: Ex002,
    ex003: Ex003,
    ex004: Ex004,


};

const ExercisePage:React.FC = () => {
    const { exerciseName } = useParams<{ exerciseName: string }>();


    if (!exerciseName) {
        return (
         <Container>
             <div>Exercise not found</div>;
         </Container>   
        )
    }

    const Component = exerciseComponents[exerciseName];

    return Component ? <Component /> : <div>Exercise not found</div>;
};

export default ExercisePage;

