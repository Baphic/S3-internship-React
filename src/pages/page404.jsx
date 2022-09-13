import React from 'react'
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import './styles/page404.css'
import { useNavigate } from 'react-router-dom';

const Page404 = () => {

  let identidad = JSON.parse(localStorage.getItem('identity'));
  let navigate = useNavigate();

  const redirect = ()=>{
    if(identidad.rol==='Admin'){
      navigate("/inicio-admin");
    }else if(identidad.rol === 'Requester'){
      navigate("/inicio-requester");
    }else{
      navigate("/");
    }
  }

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
        <Button onClick={redirect} className="boton-regresar" type="primary" shape="round" icon={<HomeOutlined />} size="large">
          Regresar
        </Button>
      </div>
    </>
   
  )
}

export default Page404;