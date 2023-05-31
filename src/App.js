import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './Componentes/Navegacion/AppNavbar';
import ExpoComponent from './Componentes/Mosaicos/Expo/ExpoComponent';
import EventoComponent from './Componentes/Mosaicos/Evento/EventosComponent';
import InicioComponent from './Componentes/inicio/InicioComponent';
import TiendaComponent from './Componentes/Mosaicos/Tienda/TiendaComponent.jsx';
import TCComponent from './Componentes/Mosaicos/Tienda/TCComponent';
import MenuComponent from './Componentes/Menu/MenuComponent';
import RSComponent from './Componentes/inicio/RSComponent';
import FooterComponent from './Componentes/FooterComponent';
import ItemInfo from './Componentes/Mosaicos/Tienda/ItemInfo';
import './Componentes/styles/styles.css';

function App() {
  return (
    <div className="App">
      <div className='margenNav' >
        <AppNavbar />
      </div>
      <RSComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<InicioComponent />} />
          <Route path='/eventos' exact element={<EventoComponent />} />
          <Route path='/tienda' exact element={<TiendaComponent />} />
          <Route path='/tienda/articulos' exact element={<TCComponent />} />
          <Route path='/galeria' exact element={<ExpoComponent />} />
          <Route path='/menu' exact element={<MenuComponent />} />
          <Route path='/itemInfo' exact element={<ItemInfo />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

export default App;
