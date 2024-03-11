import { Content, Text, Form } from "./styles"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button";

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "o campo nome é necessário"),
  email: z.string().min(1, "o campo  e-mail é necessário").email('insira um e-mail válido'),
  text: z.string().min(10, "escreva sua mensagem")
})

type FormData = z.infer<typeof schema>;

export function Contact() {


  const { register, handleSubmit, formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  });

  function onSubmit() {
    console.log("enviou")
  }

  return (
    <main>
      <Header />
      <Content onSubmit={handleSubmit(onSubmit)}>
        <Text>
          <h2>Entre em contato</h2>
          <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/dev-joaovictor">
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/Dev-JoaoVictor">
              <FaGithub />
            </a>
          </div>
        </Text>
        <Form>
          <div>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              {...register('email')}
              type="text"
              id="email"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" {...register('text')} ></textarea>
            {errors.text && <span>{errors.text.message}</span>}
          </div>
          <Button require="#" text="enviar mensagem" onClick={() => onSubmit()} />
        </Form>
      </Content>
      <Footer />
    </main>
  )
}