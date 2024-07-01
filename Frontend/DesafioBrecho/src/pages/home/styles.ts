import {styled} from "styled-components";

export const HomePage_Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(0,108,255);
    background: linear-gradient(180deg, rgba(0,108,255,1) 0%, rgba(0,198,255,1) 100%);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainConteinar = styled.section`
    background-color: ${props => props.theme['white']};
    width: 20rem;
    height: 30rem;
    border-radius: 45px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2{   
        color: ${props => props.theme['blueLight']}; 
        margin-top: 1.5rem;
    }

    h1{
        font-size: 3rem;
        line-height: 2rem;

        color: ${props => props.theme['blueDark']}; 
    }
`

export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;    
    gap: 1rem;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label{
        font-weight: bold;
        font-size: 1.5rem;
        color: ${props => props.theme['blueLight']};
    }
`

export const ButtonsContainer = styled.div`    
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom : 5rem;
`