import { List} from 'antd';
import {useState, useEffect} from 'react';
import axios from "axios";
import '../../src/App.css'

const ListFiles = ({directorio}) => {

  const [datos, setDatos]=useState([]);

  const obtenerDatos=async()=>{
    const {data}= await axios.get(`/api/listDataDirectorioBucket/${directorio}`);
    setDatos(data.Data);
  }

  useEffect(()=>{
    obtenerDatos();
  },[])


  return (
    <>
      {datos.length > 0 ?

        <List className="encabezado-lista"
          header={<div>Archivos del directorio:</div>}
          bordered
          dataSource={datos}
          renderItem={(item) => <List.Item className="listado">{item.Key}</List.Item>}
        />
      : <p>Cargando...</p>
      }
    </>
  )
}

export default ListFiles;
