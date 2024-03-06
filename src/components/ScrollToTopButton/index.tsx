
import { Container } from './styles';

import { FaArrowUp } from "react-icons/fa";

export function ScrollToTopButton() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container onClick={scrollToTop} >
      <FaArrowUp />
    </Container>
  );
};

