import { Container } from "./styles";

import logo from '../../assets/icons/logo.svg'

import { Menu } from "../Menu";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <Menu />
    </Container>
  )
}