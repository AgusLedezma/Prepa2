import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './screens/Home/Home';
import { Precios } from './routes/TopMenuByAnima/screens/Precios';
import { QuienesSomos } from './screens/QuienesSomos/QuienesSomos';
import { Contacto } from './screens/Contacto/Contacto';
import { Servicios } from './screens/Servicios/Servicios';
import { Blog } from './screens/Blog/Blog';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/precios', element: <Precios /> },
  { path: '/quienes-somos', element: <QuienesSomos /> },
  { path: '/contacto', element: <Contacto /> },
  { path: '/servicios', element: <Servicios /> },
  { path: '/blog', element: <Blog /> },
]);
