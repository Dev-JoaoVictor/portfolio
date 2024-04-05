import { Button } from "../Button";
import { Container } from "./style";

export function NavContact() {
  return (
    <Container>
      <p>Ficou interessado!?  <br />Vamos construir um projeto juntos!</p>
      <Button require="/contact" text="contate-me" />
    </Container >
  )
}