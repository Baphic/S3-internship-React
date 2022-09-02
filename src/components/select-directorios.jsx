import { Select } from 'antd';
const { Option } = Select;

const onChange = (value) => {
    console.log(`selected ${value}`);
};
  
const onSearch = (value) => {
    console.log('search:', value);
};

const select = () => {
  return (
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
        <Option value="carpeta1">Carpeta 1</Option>
        <Option value="carpeta2">Carpeta 2</Option>
        <Option value="carpeta3">Carpeta 3</Option>
    </Select>
  )
}

export default select;
