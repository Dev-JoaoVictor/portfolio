import { AboutMe, Container, Content, Skills } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavContact } from "../../components/NavContact";


export function About() {
  return (
    <Container>
      <Header />
      <Content>
        <img src="https://github.com/Dev-JoaoVictor.png" alt="" />
        <AboutMe>
          <h2>Sobre mim</h2>
          <div>
            <span>👋 Olá! Como vai!?</span>
            <p>
              Eu sou João Victor, um apaixonado <strong>Desenvolvedor Frontend</strong> que está sempre em busca de soluções tecnológicas para desafios do dia a dia.
            </p>
          </div>
          <div>
            <span>💻 Paixão pela Programação:</span>
            <p>
              No ano de 2021, mergulhei de cabeça no mundo da programação e desde então, não parei mais. Minha missão? Criar sistemas web incríveis que atendam às necessidades de qualquer projeto. Estou aqui para transformar ideias em realidade!
            </p>
          </div>
          <div>
            <span>🚀 Experiência e Expertise:</span>
            <p>
              Especialista na arte de construir aplicações com interfaces responsivas, performáticas e de alta qualidade, estou sempre empenhado em entregar o melhor produto possível para o cliente final.
            </p>
          </div>
        </AboutMe>
        <Skills>
          <h2>Habilidades / Ferramentas</h2>
          <p>Atualmente utilizo as linguagens abaixo, porém, estou sempre a disposição a aprender novas.</p>
          <ul>
            <li>GIT</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>React</li>
            <li>Scrum</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Jest & React Testing Library</li>
          </ul>
        </Skills>
      </Content>
      <NavContact />
      <Footer />
    </Container>
  )
}