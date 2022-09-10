import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2';

const DownloadFiles = ({solicitud}) => {

  let token = JSON.parse(localStorage.getItem("token"));

  let parametros = {
    fileName: solicitud
  }

  console.log(solicitud)

  const downloadFiles = ()=>{
    console.log(solicitud)
    axios.get(`/api/downloadData/${solicitud}`, ).then((res)=>{
      console.log(res)
      Swal.fire({
        icon: "success",
        title: "Success",
        text: 'Descarga Exitosa',
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


  return (
    <>
        <Button size="large" type="primary" onClick={downloadFiles} icon={<DownloadOutlined />}>
            Download
        </Button>
    </>
  )
}

export default DownloadFiles;