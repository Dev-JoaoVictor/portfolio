import { Button } from "../Button";
import { Container } from "./style";

export function Contact() {
  return (
    <Container>
      <p>Ficou interessado em construir um projeto juntos ?</p>
      <Button require="/contact" text="contate-me" />
    </Container >
  )
}