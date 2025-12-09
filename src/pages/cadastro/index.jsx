import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Column, Title, Subtitle, Wrapper, Row } from "./styles";
import { useForm } from "react-hook-form";

const Cadastro = () => {

  const { control, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log("Dados enviados:", formData);
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <h2>Comece agora grátis</h2>
            <Subtitle>Crie sua conta e make the change._</Subtitle>

            <Input 
              placeholder="Nome completo" 
              leftIcon="user" 
              name="nome"
              control={control}
            />

            <Input 
              placeholder="E-mail" 
              leftIcon="email" 
              name="email"
              control={control}
            />

            <Input 
              placeholder="Password" 
              type="password" 
              leftIcon="lock" 
              name="password"
              control={control}
            />

            <Button title="Criar minha conta" variant="secondary" onClick={handleSubmit(onSubmit)} />

            <Row>
              <p>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </p>
            </Row>

            <Row>
              <p>Já tenho conta. <a href="/login">Fazer login</a></p>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
