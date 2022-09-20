import styled from 'styled-components';

interface ITitleContainerProps{
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* margin-bottom para empurrar o conteudo para baixa */
    margin-bottom: 25px;    
    //@media(max-width: 320px){
    //    flex-direction: column;
    //}
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
    > h1 {
        color: ${props => props.theme.colors.white};
        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.lineColor};
        }
    }
`;

export const Controllers = styled.div`
    display: flex;
    @media(max-width: 320px){
        width: 100%;
        justify-content: space-around;
        
        margin-top: 20px;       
    }
`;