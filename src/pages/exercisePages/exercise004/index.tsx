import React from "react";

import faviconIcon from '../../../asset/favicon.ico'
import FaviconChanger from "../../../components/FaviconChanger/FaviconChanger";
import { Container } from "./styles";



const Ex004:React.FC = () => {

    return (
        <Container>
            <FaviconChanger iconUrl={faviconIcon}/>
            <h1>Olha o favicon aqui em cima </h1>
        </Container>

    )
};

export default Ex004;