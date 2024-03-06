import { ScrollToTopButton } from "../ScrollToTopButton";
import { Container } from "./styles";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <Container>
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/dev-joaovictor">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/Dev-JoaoVictor">
          <FaGithub />
        </a>
      </div>
      <ScrollToTopButton />
    </Container>
  )
}