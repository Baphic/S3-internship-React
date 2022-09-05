import {List} from 'antd';
import '../../src/App.css'

const data = [
  'archivo_1',
  'archivo_2',
  'archivo_3',
];

const listFilesAprobados = () => {
  return (
    <>
        <List className="encabezado-lista-aprobados"
        header={<div>Datos Aprobados:</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item className="listado">{item}</List.Item>}
        />
    </>
  )
}

export default listFilesAprobados;
