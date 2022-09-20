import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};

    /* Para se comportar como caixa */
    display:flex;
    /* deixa cada um em uma ponta da caixa */
    justify-content:space-between;
    /* deixa alinhado no centro */
    align-items: center;
    /* Para os elementos não ficarem colados nas laterais */
    padding:0 10px;
    border-bottom:1px solid ${props => props.theme.colors.gray};

`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;