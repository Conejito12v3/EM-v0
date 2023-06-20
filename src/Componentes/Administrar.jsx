import React from 'react'

const Administrar = () => {
  return (
    <div className='AdminContainer'>
      <div className='Admin1'>
        <div className='AdminElement'>
          <a href="/productor"><h3>Administrar Productores</h3></a>
        </div>
        <div className='AdminElement'>
          <a href="/producto"><h3>Administrar Productos</h3></a>
        </div>
        <div className='AdminElement'>
          <a href="/alimento"><h3>Administrar Alimentos</h3></a>
        </div>
      </div>
      <div className='Admin1'>
        <div className='AdminElement2'>
          <a href=""><h3>Administrar Usuarios</h3></a>
        </div>
        <div className='AdminElement'>
          <a href="/eventos/admin"><h3>Administrar Eventos</h3></a>
        </div>
      </div>
    </div>
  )
}

export default Administrar