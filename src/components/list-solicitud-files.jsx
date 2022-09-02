import {List, Button} from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import '../../src/App.css'

const data = [
  'archivo_1',
  'archivo_2',
  'archivo_3',
];

const listSolicitudFiles = () => {
  return (
    <>
        <List className="encabezado-lista"
        header={<div>Datos de la solicitud:</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item className="listado">{item}</List.Item>}
        />
        <Button default className="boton-lista-solicitud verde" size="large" type="primary">
            <CheckCircleOutlined /> Aprobar
        </Button>
        <Button danger className="boton-lista-solicitud" size="large" type="primary">
            <CloseCircleOutlined /> Denegar
        </Button>
    </>
  )
}

export default listSolicitudFiles;
