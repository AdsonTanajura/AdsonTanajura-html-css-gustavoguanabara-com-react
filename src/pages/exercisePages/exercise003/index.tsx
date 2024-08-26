import React, {useEffect} from "react";
import {Container} from './styles';
import cssLogo from '../../../asset/CSS3-250px.svg.png';
import htmlLogo from './HTML-250px.svg.png';



const Ex003:React.FC = () => {

    useEffect(() => {
        document.title =  'Teste com Imagens';
    
    }, [])
    


    return (

        <Container>
            <h1>Testando carga e Imagens</h1>
            <p>Abaixo você vai ver uma imagem que está na mesma pasta.</p> 
            <img src={htmlLogo} alt="HTML" />
            <p>Podemos também carregar imagens que estão em sub-pastas.</p>
            <img src={cssLogo} alt="Css" />
        </Container>


    )
};

export default Ex003;