import React, {useMemo} from 'react';
import Toggle from '../ComponentsGerais/Toggle';
import emojis from '../../utils/emojis';
import { Container,
    Profile, 
    Welcome, 
    UserName, } from './styles';

const MainHeader: React.FC = () =>{

    // Exibe um emoji aleatorio toda a vez que a pagina for recarregada
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[]);


    return(
        <Container>
            <Toggle/>
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Max Ferraz</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;