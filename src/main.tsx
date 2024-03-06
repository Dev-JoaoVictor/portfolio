import React from 'react'
import ReactDOM from 'react-dom/client'

import { router } from './routes/app.routes'
import { RouterProvider } from 'react-router-dom'

import theme from './styles/theme.ts'
import GlobalStyles from './styles/global.ts'
import { ThemeProvider } from 'styled-components'

import { register } from 'swiper/element';

register();

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
