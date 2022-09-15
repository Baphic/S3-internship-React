import {List} from 'antd';
import '../../src/App.css'
import {useState, useEffect} from 'react';
import axios from "axios";

const ApprovedFiles = () => {

  let token = JSON.parse(localStorage.getItem("token"));

  const [value, setValue]=useState([]);

  const requests=async()=>{
    const {data}= await axios.get('/api/approvedRequests', {
      headers:{
        Authorization: token
      }});
    setValue(data.requests);
  }

  useEffect(()=>{
    requests();
  },[])

  return (
    <>
        <List className="encabezado-lista-aprobados"
        header={<div>Datos Aprobados:</div>}
        bordered
        dataSource={value}
        renderItem={(item) => <List.Item className="listado">Requester: {item.user} | Nombre: {item.name} | UUID: {item.UUID}</List.Item>}
        />
    </>
  )
}

export default ApprovedFiles;
