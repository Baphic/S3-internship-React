import { List} from 'antd';
import {useState, useEffect} from 'react';
import axios from "axios";
import '../../src/App.css'

const ListFiles = ({directorio}) => {

  let token = JSON.parse(localStorage.getItem("token"));

  const [datos, setDatos]=useState([]);

  const obtenerDatos=async()=>{
    const {data}= await axios.get(`/api/listDataDirectorioBucket/${directorio}`, {
      headers:{
        Authorization: token
      }});
    setDatos(data.Data);
  }

  useEffect(()=>{
    obtenerDatos();
  },[directorio])


  return (
    <>
        <List className="encabezado-lista"
          header={<div>Archivos del directorio:</div>}
          bordered
          dataSource={datos}
          renderItem={(item) => <List.Item className="listado">{item.Key}</List.Item>}
        />
    </>
  )
}

export default ListFiles;
