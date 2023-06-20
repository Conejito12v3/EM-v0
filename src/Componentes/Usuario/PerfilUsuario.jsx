import React, { useState, useEffect } from 'react'
import { obtenerUsuarioActual } from '../../Actions/usuarioAction';
import { useStateValue } from '../../Context/store';

const PerfilUsuario = () => {
    const [{sesionUsuario}, dispatch] = useStateValue();
    const [usuario, setUsuario] = useState({
        nombreCompleto: '',
        email: '',
    });

    useEffect(() => {
        obtenerUsuarioActual(dispatch).then(response => {
            console.log('Respuesta:', response.data);
        });
    }, []);

  return (
    <div>PerfilUsuario</div>
  )
}

export default PerfilUsuario