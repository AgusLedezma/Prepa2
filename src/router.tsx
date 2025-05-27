import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './screens/Home/Home';
import { Planes } from './routes/TopMenuByAnima/screens/Planes';
import { QuienesSomos } from './screens/QuienesSomos/QuienesSomos';
import { Precios } from './screens/Precios/Precios';
import { Contacto } from './screens/Contacto/Contacto';
import { Servicios } from './screens/Servicios/Servicios';
import { Blog } from './screens/Blog/Blog';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/planes', element: <Planes /> },
  { path: '/quienes-somos', element: <QuienesSomos /> },
  { path: '/precios', element: <Precios /> },
  { path: '/contacto', element: <Contacto /> },
  { path: '/servicios', element: <Servicios /> },
  { path: '/blog', element: <Blog /> },
]);
