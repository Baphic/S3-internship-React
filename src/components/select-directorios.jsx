import { Select } from 'antd';
import axios from "axios";
import {useState, useEffect} from 'react';
  
const onSearch = (value) => {
    console.log('search:', value);
};

const Selector = ({setDirectorio}) => {
  let token = JSON.parse(localStorage.getItem("token"));

  const [values, setValues]=useState([]);

  const obtenerDirectorios=async()=>{
    const {data}= await axios.get('/api/listDataBucket', {
      headers:{
        Authorization: token
      }      
    });
    setValues(data.Data);
  }

  const onChange = (value) => {
    setDirectorio(value);
  };

  useEffect(()=>{
    obtenerDirectorios();
  },[])

  return (
    <>
      {values.length > 0 ?

        <Select
          size="large"
          showSearch
          placeholder="Seleecciona un directorio"
          optionFilterProp="children"
          style={{
              width: '100%'
            }}
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>  
          {values.map((directorio)=><Select.Option value={directorio.Prefix} key={directorio.Prefix}>{directorio.Prefix}</Select.Option>)}
        </Select>

      : <p>Cargando...</p>
      }
    </>
  
  )
}

export default Selector;
