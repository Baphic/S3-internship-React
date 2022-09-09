import {Button} from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import '../../src/App.css'

const ListSolicitudFiles = () => {
  return (
    <>
        <Button default className="boton-lista-solicitud verde" size="large" type="primary">
            <CheckCircleOutlined /> Aprobar
        </Button>
        <Button danger className="boton-lista-solicitud" size="large" type="primary">
            <CloseCircleOutlined /> Denegar
        </Button>
    </>
  )
}

export default ListSolicitudFiles;
