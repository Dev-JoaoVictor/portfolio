import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Contact } from "../../components/Contact"
import { Project } from "../../components/Project"

import { Container, Content } from "./styles"

export function Portfolio() {
  return (
    <Container>
      <Header />
      <Content>
        <Project />
      </Content>
      <Contact />
      <Footer />
    </Container>
  )
}