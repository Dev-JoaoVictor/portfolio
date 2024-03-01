import { FiMenu, FiX } from "react-icons/fi";
import { Container, Button } from "./styles";
import { useState } from "react";

export function Menu() {

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container $isOpen={menuOpen}>
      <nav>
        <Button onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </Button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </Container>
  )
}