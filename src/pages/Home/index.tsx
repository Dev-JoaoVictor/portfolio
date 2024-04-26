import { Content, Presentation, Service } from "./styles";

import bannerHome from '../../assets/images/banner-home.svg';

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { NavContact } from "../../components/NavContact";

export function Home() {
  return (
    <main>
      <Header />
      <Content>
        <Presentation >
          <img src={bannerHome} alt="" />
          <div>
            <h1>Seja bem vindo(a)!</h1>
            <p>Abaixo você pode acompanhar alguns exemplos daquilo que eu venho construindo! Fique a vontade para explorar o conteúdo do site.</p>
          </div>
        </Presentation>
        <Carousel/>
        <Service>
          <h2>Serviços Personalizados</h2>
          <ul>
            <li>Website</li>
            <li>Portfolio</li>
            <li>Landing Page</li>
          </ul>
          <p>Com minha experiência posso transformar suas ideias em realidade digital, seja para projetos pessoais ou comerciais, soluções personalizadas que atendam às suas necessidades e impulsionem o seu projeto.</p>
        </Service>
      </Content>
      <NavContact />
      <Footer />
    </main>
  )
}

function useState<T>(arg0: number): [any, any] {
  throw new Error("Function not implemented.");
}


function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
