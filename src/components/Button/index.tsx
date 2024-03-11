import { Container } from "./styles";

interface ButtonProps {
  text: string,
  require: string;
  onClick?: () => void;
}

export function Button({ text, require, onClick }: ButtonProps) {
  return (
    <Container to={require} onClick={onClick}>
      {text}
    </Container>
  )
}