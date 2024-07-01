import {ButtonsContainer, FormLogin, HomePage_Container, InputsContainer, MainConteinar} from "./styles";

export function HomePage(){
    return(
        <HomePage_Container>
            <MainConteinar>                
                <h2>Bem vindo ao</h2>
                <h1>Meu Brechó</h1>

                <FormLogin>
                    <InputsContainer>
                        <label>Login</label>
                        <input name="login" type="text"/>
                        <label>Senha</label>
                        <input name="senha" type="text"/>
                    </InputsContainer>

                    <ButtonsContainer>
                        <button type="submit">Login</button>
                        <button>Cadastre-se</button>
                    </ButtonsContainer>
                </FormLogin>
            </MainConteinar>
        </HomePage_Container>
    );
}