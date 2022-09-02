import { Select } from 'antd';
const { Option } = Select;

const onChange = (value) => {
    console.log(`selected ${value}`);
};
  
const onSearch = (value) => {
    console.log('search:', value);
};

const selectSolicitudes = () => {
  return (
    <Select 
        size="large"
        showSearch
        placeholder="Seleecciona una solicitud"
        optionFilterProp="children"
        style={{
            width: '100%'
          }}
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
        <Option value="solicitud1">Solicitud 1</Option>
        <Option value="solicitud2">Solicitud 2</Option>
        <Option value="solicitud3">Solicitud 3</Option>
    </Select>
  )
}

export default selectSolicitudes;
