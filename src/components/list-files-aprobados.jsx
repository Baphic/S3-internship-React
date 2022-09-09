import {List} from 'antd';
import '../../src/App.css'
import {useState, useEffect} from 'react';
import axios from "axios";

const ListFilesAprobados = () => {

  let token = JSON.parse(localStorage.getItem("token"));

  const [datos, setDatos]=useState([]);

  const obtenerDatos=async()=>{
    const {data}= await axios.get('/api/solicitudesAprobadas', {
      headers:{
        Authorization: token
      }});
    setDatos(data.historialRequester);
  }

  useEffect(()=>{
    obtenerDatos();
  },[])

  return (
    <>
        <List className="encabezado-lista-aprobados"
        header={<div>Datos Aprobados:</div>}
        bordered
        dataSource={datos}
        renderItem={(item) => <List.Item className="listado">Requester: {item.usuario} | Nombre: {item.nombre} | UUID: {item.UUID}</List.Item>}
        />
    </>
  )
}

export default ListFilesAprobados;
