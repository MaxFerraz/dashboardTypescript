import React from 'react';
import { Container } from './styles';

interface Props {
    children?: React.ReactNode;
}

//Passa pro componente filhos para que possam ser usados dentro da function
const Content: React.FC<Props> = ({children}) =>{
    return(
        <Container>
            {children}
        </Container>
    );
}

export default Content;