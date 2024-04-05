import { useState } from "react";
import { Container, Nav } from "./styles";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import logo from '../../assets/icons/logo.svg'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container>
      <img src={logo} alt="" />
      <Nav $isOpen={menuOpen}>
        <button onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </Nav>
    </Container>
  )
}