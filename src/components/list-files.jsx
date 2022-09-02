import { List} from 'antd';
import '../../src/App.css'

const data = [
  'archivo_1',
  'archivo_2',
  'archivo_3',
  'archivo_4',
  'archivo_5',
];

const listFiles = () => {
  return (
    <List className="encabezado-lista"
      header={<div>Archivos del directorio:</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item className="listado">{item}</List.Item>}
    />
  )
}

export default listFiles;
