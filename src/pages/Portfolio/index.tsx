import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { NavContact } from "../../components/NavContact"
import { Project } from "../../components/Project"

import { Content } from "./styles"

export function Portfolio() {
  return (
    <main>
      <Header />
      <Content>
        <Project />
      </Content>
      <NavContact />
      <Footer />
    </main>
  )
}