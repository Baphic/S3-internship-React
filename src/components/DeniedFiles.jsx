import {List} from 'antd';
import '../../src/App.css'
import {useState, useEffect} from 'react';
import axios from "axios";

const DennyFiles = () => {

  let token = JSON.parse(localStorage.getItem("token"));

  const [value, setValues]=useState([]);

  const requests=async()=>{
    const {data}= await axios.get('/api/deniedRequests', {
      headers:{
        Authorization: token
      }});
    setValues(data.requests);
  }

  useEffect(()=>{
    requests();
  },[])

  return (
    <>
        <List className="deny-list-header"
        header={<div>Datos Denegados:</div>}
        bordered
        dataSource={value}
        renderItem={(item) => <List.Item className="list">Requester: {item.user} | Nombre: {item.name} | Descripción: {item.description}</List.Item>}
        />
    </>
  )
}

export default DennyFiles;
