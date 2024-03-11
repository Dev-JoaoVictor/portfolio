import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Contact } from "../../components/Contact"
import { Project } from "../../components/Project"

import { Content } from "./styles"

export function Portfolio() {
  return (
    <main>
      <Header />
      <Content>
        <Project />
      </Content>
      <Contact />
      <Footer />
    </main>
  )
}