import { Select } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

const SelectDirectory = ({ captureDirectory }) => {
  let token = JSON.parse(localStorage.getItem("token"));

  const [values, setValues] = useState([]);

  const getDirectories = async () => {
    const { data } = await axios.get("/api/dataBucket", {
      headers: {
        Authorization: token,
      },
    });
    setValues(data.Data);
  };

  const onChange = (value) => {
    captureDirectory(value);
  };

  useEffect(() => {
    getDirectories();
  }, []);

  return (
    <>
      {values.length > 0 ? (
        <Select
          size="large"
          showSearch
          placeholder="Seleecciona un directorio"
          optionFilterProp="children"
          style={{
            width: "100%",
          }}
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {values.map((directory) => (
            <Select.Option value={directory.Prefix} key={directory.Prefix}>
              {directory.Prefix}
            </Select.Option>
          ))}
        </Select>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default SelectDirectory;
