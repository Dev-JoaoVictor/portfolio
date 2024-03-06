import { Container, Content } from "./styles"

export function Carousel() {
  return (
    <Container
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
    >
      <Content>
        <a href="">
          <div></div>
        </a>
        <h2>Titulo do Projeto</h2>
        <p>Breve descrição do projeto.</p>
      </Content>
      <Content>
        <a href="">
          <div></div>
        </a>
        <h2>Titulo do Projeto</h2>
        <p>Breve descrição do projeto.</p>
      </Content>
      <Content>
        <a href="">
          <div></div>
        </a>
        <h2>Titulo do Projeto</h2>
        <p>Breve descrição do projeto.</p>
      </Content>
    </Container>

  )
}