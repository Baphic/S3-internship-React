import { List} from 'antd';
import {useState, useEffect} from 'react';
import axios from "axios";
import '../../src/App.css'

const ListFiles = ({directory}) => {

  let token = JSON.parse(localStorage.getItem("token"));

  const [data, setData]=useState([]);

  const getData=async()=>{
    const {data}= await axios.get(`/api/dataDirectorioBucket/${directory}`, {
      headers:{
        Authorization: token
      }});
    setData(data.Data);
  }

  useEffect(()=>{
    getData();
  },[directory])


  return (
    <>
        <List className="encabezado-lista"
          header={<div>Archivos del directorio:</div>}
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item className="listado">{item.Key}</List.Item>}
        />
    </>
  )
}

export default ListFiles;