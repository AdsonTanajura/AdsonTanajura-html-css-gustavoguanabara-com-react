
import React, { useEffect } from "react";

import { Container } from "./styles";


const Ex002: React.FC = () => {

    useEffect(() => {

        document.title = 'Paragrafos'

    });


    return (
        <Container>
            <h1>Paragrafos e quebra de linha </h1>
            <hr />
            <p>
                Você pode escrever um paragrafo de qualquer jeito. Basta colocar tudo no meio do par de de tags &lt;p&gt; e &lt;/p.&gt;
            </p>
            <p>
                Se precisar quebrar o texto em alguma lugar especifico <br /> como esse voce pode usar a tag &lt;br&gt; 
            </p>
            <p>
                Vamos adicionar alguns sibolos especiais:
                &reg;
                &cop;
                &trade;
                &euro;
                &pound;
                &yen;
                &cent;
                &Delta;
            </p>
            <p>
                Vamos adicionar alguns Emoji:
                &#x1F525;
                &#x2B50;
                &#x1F602;
                &#x1F440;
                
            </p>
        </Container>

    );
};

export default Ex002;