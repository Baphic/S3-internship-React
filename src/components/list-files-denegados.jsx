import {List} from 'antd';
import '../../src/App.css'

const data = [
  'archivo_1',
  'archivo_2',
  'archivo_3',
];

const listFilesDenegados = () => {
  return (
    <>
        <List className="encabezado-lista-denegados"
        header={<div>Datos Denegados:</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item className="listado">{item}</List.Item>}
        />
    </>
  )
}

export default listFilesDenegados;
