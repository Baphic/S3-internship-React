import { DownloadOutlined } from '@ant-design/icons';
import { Select, Button} from 'antd';
const { Option } = Select;

const onChange = (value) => {
    console.log(`selected ${value}`);
};
  
const onSearch = (value) => {
    console.log('search:', value);
};
const downloadFiles = () => {
  return (
    <>
        <Select 
            size="large"
            showSearch
            placeholder="Seleecciona un archivo"
            optionFilterProp="children"
            style={{
                width: '100%'
            }}
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
            <Option value="archivo1">archivo_1</Option>
            <Option value="archivo2">archivo_2</Option>
            <Option value="archivo3">archivo_3</Option>
        </Select>
        <br></br>
        <br></br>
        <Button size="large" type="primary" icon={<DownloadOutlined />}>
            Download
        </Button>
    </>
  )
}

export default downloadFiles;
