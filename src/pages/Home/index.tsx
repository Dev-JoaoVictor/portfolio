import { Container, Content, Link, Presentation } from "./styles";

import bannerHome from '../../assets/banner-home.svg'
import bannerServices from '../../assets/banner-services.svg'

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";


export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Presentation id="init">
          <img src={bannerHome} alt="" />
          <h1>Olá, Seja bem-vindo(a)!</h1>
          <p> Me chamo João e fique a vontade para explorar todo conteúdo do site!</p>
        </Presentation>
        <section id="project">
          <Carousel />
        </section>
        <Section>
          <img src={bannerServices} alt="" />
          <h2>Serviços Personlizados</h2>
          <ul>
            <li>Website</li>
            <li>Portfolio</li>
            <li>Landing Page</li>
          </ul>
          <p>
            Com minha experiência posso transformar suas ideias em realidade digital, seja para projetos pessoais ou comerciais.
          </p>
        </Section>
      </Content>
      <Footer />
    </Container>
  )
}