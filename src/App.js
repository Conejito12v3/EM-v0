import React, { useEffect, useState } from 'react';
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
import LoginComponent from './Componentes/Usuario/loginComponent';
import { useStateValue } from './Context/store';
import { obtenerUsuarioActual } from './Actions/usuarioAction';
import PerfilUsuario from './Componentes/Usuario/PerfilUsuario';
import RegistrarUsuario from './Componentes/Usuario/RegistrarseComponent';
import ProductoresComponent from './Componentes/Productor/ProductoresComponent';
import FormularioComponent from './Componentes/Productor/Agregar/FormularioComponent';
import EditarProductor from './Componentes/Productor/Editar/EditarProductor';
import AlimentosComponent from './Componentes/Alimento/AlimentosComponent';
import FormularioAComponent from './Componentes/Alimento/Agregar/FormularioAComponent';
import EditarAComponent from './Componentes/Alimento/Editar/EditarAComponent';
import EventoListComponent from './Componentes/Evento/EventoComponent';
import AgregarEComponent from './Componentes/Evento/Agregar/AgregarEComponent';
import EditarEComponent from './Componentes/Evento/Editar/EditarEComponent';
import Administrar from './Componentes/Administrar';
import ProductosComponents from './Componentes/Productos/ProductosComponents';
import FormularioPP from './Componentes/Productos/Agregar/FormularioPP';

function App() {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [iniciaApp, setIniciaApp] = useState(false);

  useEffect(() => {
    if(!iniciaApp) {
      console.log('usuario sesion: ', sesionUsuario)
      obtenerUsuarioActual(dispatch).then(response => {
        setIniciaApp(true);
      }).catch(error => {
        setIniciaApp(true);
      });
    }

  }, [iniciaApp]);

  return (
    <div className="App">
      <RSComponent />
      <BrowserRouter>
        <div className='margenNav' >
          <AppNavbar />
        </div>
        <Routes>
          <Route path='/' exact element={<InicioComponent />} />
          <Route path='/eventos' exact element={<EventoComponent />} />
          <Route path='/tienda' exact element={<TiendaComponent />} />
          <Route path='/tienda/articulos' exact element={<TCComponent />} />
          <Route path='/galeria' exact element={<ExpoComponent />} />
          <Route path='/menu' exact element={<MenuComponent />} />
          <Route path='/itemInfo' exact element={<ItemInfo />} />
          <Route path='/login' exact element={<LoginComponent />} />
          <Route path='/registrarse' exact element={<RegistrarUsuario />} />
          <Route path='/perfil' exact element={sesionUsuario ? <PerfilUsuario /> : <LoginComponent />} />
          <Route path='/admin' exact element={sesionUsuario ? <Administrar /> : <LoginComponent />} />

          <Route path='/productor' exact element={sesionUsuario ? <ProductoresComponent /> : <LoginComponent />} />
          <Route path='/productor/crear' exact element={sesionUsuario ? <FormularioComponent /> : <LoginComponent />} />
          <Route path='/productor/:id' exact element={sesionUsuario ? <EditarProductor /> : <LoginComponent />} />

          <Route path='/alimento' exact element={sesionUsuario ? <AlimentosComponent /> : <LoginComponent />} />
          <Route path='/alimento/crear' exact element={sesionUsuario ? <FormularioAComponent /> : <LoginComponent />} />
          <Route path='/alimento/:id' exact element={sesionUsuario ? <EditarAComponent /> : <LoginComponent />} />
          
          <Route path='/eventos/admin' exact element={sesionUsuario ? <EventoListComponent /> : <LoginComponent />} />
          <Route path='/eventos/admin/crear' exact element={sesionUsuario ? <AgregarEComponent /> : <LoginComponent />} />
          <Route path='/eventos/admin/:id' exact element={sesionUsuario ? <EditarEComponent /> : <LoginComponent />} />
          
          <Route path='/producto' exact element={sesionUsuario ? <ProductosComponents /> : <LoginComponent />} />
          <Route path='/producto/crear' exact element={sesionUsuario ? <FormularioPP /> : <LoginComponent />} />
          <Route path='/producto/:id' exact element={sesionUsuario ? <EditarEComponent /> : <LoginComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
