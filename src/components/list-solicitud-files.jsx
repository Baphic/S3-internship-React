import {Button} from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import '../../src/App.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const ListSolicitudFiles = ({solicitud}) => {

  let token = JSON.parse(localStorage.getItem('token'));
  let parametros = {
    idSo:solicitud
  }
  console.log(solicitud)

  const aprobar = ()=>{
    axios.put('/api/approveRequest',parametros,{
      headers:{
        Authorization: token
    }}).then((res)=>{
      Swal.fire({
        icon: "success",
        title: "Success",
        text: 'Solicitud Aceptada',
      });
    }).catch((error)=>{
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.mensaje,
      });
    })
  }

  const denegar = ()=>{
    axios.put('/api/denyRequest', parametros,{
      headers:{
        Authorization: token
    }}).then((res)=>{
      Swal.fire({
        icon: "success",
        title: "Success",
        text: 'Solicitud Denegada',
      });
    }).catch((error)=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.mensaje,
      });
    })
  }

  return (
    <>
        <Button default className="boton-lista-solicitud verde" onClick={aprobar} size="large" type="primary">
            <CheckCircleOutlined /> Aprobar
        </Button>
        <Button danger className="boton-lista-solicitud" size="large"  onClick={denegar} type="primary">
            <CloseCircleOutlined /> Denegar
        </Button>
    </>
  )
}

export default ListSolicitudFiles;
