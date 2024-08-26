import React, {useEffect} from "react";
import { Container } from "./styles";


const Ex001: React.FC = () => {
    useEffect(() => {
        document.title = 'Meu primeiro exercício';
        
    }, []);

    return (
        <Container>
            <h1>Olá Mundo!</h1>
            <hr />
            <p>
            Esse é meu primeiro documento em HTML! Estou muito Feliz!
            </p>
            <p>Esse é um momento unico Estou criando um site!</p>
        </Container>

    );
};

export default Ex001;