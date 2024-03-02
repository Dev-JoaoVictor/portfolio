import { Header } from "../../components/Header";

import { Container, Content, Presetation } from "./styles";

import banner from '../../assets/banner-home.svg'

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Presetation>
          <img src={banner} alt="" />
          <h1>Olá, Seja bem-vindo(a)!</h1>
          <p>
            Sou João, estou pronto para transformar
            suas ideias em projetos digitais que impulsionam seu negócio.
          </p>
        </Presetation>
      </Content>
    </Container>
  )
}