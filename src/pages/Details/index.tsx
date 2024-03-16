import { Container, Content, Section } from "./styles";

import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { NavContact } from "../../components/NavContact";

import bannerExempleOne from '../../assets/images/project1.jpg'
import bannerDetails from '../../assets/images/banner-details.jpg'
import bannerExempleTwo from '../../assets/images/banner-example.jpg'

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <img src={bannerDetails} alt="" />
        <Section>
          <h2>Manage</h2>
          <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
          <span>HTML / CSS / JS</span>
          <Button require="" text="visitar site" />
        </Section>
        <Section>
          <h2>Project Background</h2>
          <p>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
        </Section>
        <Section>
          <h2>Static Previews</h2>
          <img src={bannerExempleOne} alt="" />
          <img src={bannerExempleTwo} alt="" />
        </Section>
      </Content>
      <NavContact />
      <Footer />
    </Container>
  )
}