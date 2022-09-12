import React from 'react'
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import './styles/page404.css'

const Page404 = () => {
  return (
    <>
      <div className="contenedor-1">
        <p>
          404
        </p>
      </div>
      <div className="contenedor-2">
        <p className="titulo">
          Página no encontrada
        </p>
        <p className="parrafo">
          No se pudo encontrar la página que solicitaste
        </p>
        <Button className="boton-regresar" type="primary" shape="round" href="/" icon={<HomeOutlined />} size="large">
          Regresar al Inicio
        </Button>
      </div>
    </>
   
  )
}

export default Page404;