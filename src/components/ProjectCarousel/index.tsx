import { Carousel } from "../Carousel";
import { Content } from "./styles";

export function ProjectCarousel() {
  return (
    <Carousel slidesPerView={1}>
      <Content>
        <a href="">
          <div></div>
        </a>
        <h3>Titulo do Projeto</h3>
        <p>Descrição breve do projeto.</p>
      </Content>
      <Content>
        <a href="">
          <div></div>
        </a>
        <h3>Titulo do Projeto</h3>
        <p>Descrição breve do projeto.</p>
      </Content>
    </Carousel>
  )
}