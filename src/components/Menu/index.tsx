import { FiMenu, FiX } from "react-icons/fi";
import { Container, Button } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="#">Contato</Link></li>
        </ul>
      </nav>
    </Container>
  )
}