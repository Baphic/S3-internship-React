import { Select } from 'antd';
import axios from "axios";
import {useState, useEffect} from 'react';
  
const onSearch = (value) => {
    console.log('search:', value);
};

const SelectSolicitudes = ({setSolicitud}) => {

  let token = JSON.parse(localStorage.getItem("token"));

  const [values, setValues]=useState([]);

  const obtenerSolicitudes=async()=>{
    const {data}= await axios.get('/api/solicitudes', {
      headers:{
        Authorization: token
      }});
      console.log(data)
    setValues(data.historialRequester);
  }

  const onChange = (value) => {
    setSolicitud(value);
    console.log(value)
  };

  useEffect(()=>{
    obtenerSolicitudes();
  },[])

  return (
    <>
      <Select 
        size="large"
        showSearch
        placeholder="Seleecciona una solicitud"
        optionFilterProp="children"
        style={{
            width: '100%'
          }}
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(inputValue, option) => option.children.join('').toLowerCase().includes(inputValue.toLowerCase())}>
        {values.map((solicitud)=><Select.Option value={solicitud.UUID} key={solicitud.UUID}> {solicitud.nombre} | {solicitud.descripcion} </Select.Option>)}
      </Select>
    </>
  )
}

export default SelectSolicitudes;
