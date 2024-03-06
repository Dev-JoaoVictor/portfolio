import React from "react";
import { Container } from "./styles";

interface SectionProps {
  id?: string
  children: React.ReactNode
}

export function Section({ children,id, }: SectionProps) {
  return (
    <Container id={id}>
      {children}
    </Container>
  )
}