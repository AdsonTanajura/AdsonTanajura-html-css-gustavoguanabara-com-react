import React, {useEffect} from "react";
import {Container} from './styles';

import faviconIcon from '../../../asset/favicon.ico'
import cssLogo from '../../../asset/CSS3-250px.svg.png';
import htmlLogo from './HTML-250px.svg.png';

import FaviconChanger from "../../../components/FaviconChanger/FaviconChanger";



const Ex003:React.FC = () => {

    useEffect(() => {
        document.title =  'Teste com Imagens';
    
    }, [])
    


    return (

        <Container>
            <FaviconChanger iconUrl={faviconIcon}/>
            <h1>Testando carga e Imagens</h1>
            <p>Abaixo você vai ver uma imagem que está na mesma pasta.</p> 
            <img src={htmlLogo} alt="Imagem que Representa o html" />
            <p>Podemos também carregar imagens que estão em sub-pastas.</p>
            <img src={cssLogo} alt="Imagem que Representa o css" />
            <p>Também podemos carregar imagens externas.</p>
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-3629449-3031512.png?f=avif&w=256" alt="Imagem que Representa o JavaScript"></img>
        </Container>


    )
};

export default Ex003;