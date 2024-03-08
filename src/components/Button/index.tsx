import { Container } from "./styles";

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <Container to="#">
      {text}
    </Container>
  )
}