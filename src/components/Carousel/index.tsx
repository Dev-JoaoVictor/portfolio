
import { Pagination } from "swiper/modules";

import { Link } from "react-router-dom";
import banner from '../../assets/images/project1.jpg'

import { Container, Content } from "./styles";
import { useEffect, useState } from "react";


export function Carousel() {

  const [slidesPerView, setSlidesPerView] = useState<number>(3);

  const updateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
   
    let slidesToShow = 3;
    if (screenWidth <= 478) {
      slidesToShow = 1;
    } else if (screenWidth <= 768) {
      slidesToShow = 2;
    } else {
      slidesToShow = 3;
    }
    setSlidesPerView(slidesToShow);
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

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