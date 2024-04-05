
import { Pagination } from "swiper/modules";

import { Link } from "react-router-dom";
import banner from '../../assets/images/project1.jpg'

import { Container, Content } from "./styles";

interface CoruselProps {
  slidesPerView: number
}

export function Carousel({ slidesPerView }: CoruselProps) {
  return (
    <Container
      modules={[Pagination]}
      slidesPerView={slidesPerView}
      spaceBetween={10}
      pagination
    >
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
      <Content>
        <Link to="/details">
          <img src={banner} alt="" />
        </Link>
        <h3>Titulo do Projeto</h3>
        <p>Descrição breve do projeto.</p>
      </Content>
    </Container >
  )
}