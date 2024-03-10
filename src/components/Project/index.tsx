import { Container } from './styles'

import { Button } from '../Button'
import projectImg from '../../assets/images/project1.jpg'

export function Project() {
  return (
    <Container>
      <section>
        <img src={projectImg} alt="" />
        <div>
          <h2>Manage</h2>
          <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
          <Button text='view project' />
        </div>
      </section>
      <section>
        <img src={projectImg} alt="" />
        <div>
          <h2>Manage</h2>
          <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
          <Button text='view project' />
        </div>
      </section>
      <section>
        <img src={projectImg} alt="" />
        <div>
          <h2>Manage</h2>
          <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
          <Button text='view project' />
        </div>
      </section>
    </Container>
  )
}