import { Container, Content, Presentation, Section } from "./styles";

import bannerHome from '../../assets/images/banner-home.svg';
import bannerServices from '../../assets/images/banner-services.svg'

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Projects } from "../../components/Projects";
import { Contact } from "../../components/Contact";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Presentation >
          <img src={bannerHome} alt="" />
          <h1>Olá, Seja bem vindo</h1>
          <p>Eu sou o João, fique a vontade para explorar o conteúdo do site.</p>
        </Presentation>
        <Section>
          <div>
            <Projects />
          </div>
        </Section>
        <Section>
          <img src={bannerServices} alt="" />
          <ul>
            <li>Website</li>
            <li>Portfolio</li>
            <li>Landing Page</li>
          </ul>
          <p>Com minha experiência posso transformar sua ideias em realidade digital, seja para projetos pessoais ou comerciais, soluções personalizadas que atendam às suas necessidades e impulsionem projeto. </p>
        </Section>
        <Contact />
      </Content>
      <Footer />
    </Container>
  )
}