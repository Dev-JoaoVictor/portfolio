import { Carousel } from "../Carousel";
import { Content } from "./styles";

import banner from '../../assets/images/project1.jpg'

import { Link } from "react-router-dom";

export function ProjectCarousel() {
  return (
    <Carousel slidesPerView={1}>
      <Content>
        <Link to="/details">
          <img src={banner} alt="" />
        </Link>
        <h3>Titulo do Projeto</h3>
        <p>Descrição breve do projeto.</p>
      </Content>
      <Content>
        <Link to="/details">
          <img src={banner} alt="" />
        </Link>
        <h3>Titulo do Projeto</h3>
        <p>Descrição breve do projeto.</p>
      </Content>
    </Carousel>
  )
}