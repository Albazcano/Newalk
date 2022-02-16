import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../../../../../react/catalogo/src/Views/Home';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header'
import { Details } from '../views/Details/Details';

export const Routes = () => {
  return (
   <HashRouter>
     <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/filter' element={<Filter/>}/>
       <Route path='/details' element={<Details/>}/>
       <Route path='*' element={<Navigate replace to='/' />} />
     </Routes>
     <Footer/>
   </HashRouter>
  );
}
