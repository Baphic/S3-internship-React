import { Select } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

const onSearch = (value) => {};

const SelectRequest = ({ setRequest, request }) => {
  let token = JSON.parse(localStorage.getItem("token"));

  const [values, setValues] = useState([]);

  const requests = async () => {
    const { data } = await axios.get("/api/requests", {
      headers: {
        Authorization: token,
      },
    });
    setValues(data.requests);
  };

  const onChange = (value) => {
    setRequest(value);
  };

  useEffect(() => {
    requests();
  }, [request]);

  return (
    <>
      {values.length > 0 ? (
        <Select
          size="large"
          showSearch
          defaultValue={request}
          placeholder="Seleecciona una solicitud"
          optionFilterProp="children"
          style={{
            width: "100%",
          }}
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(inputValue, option) =>
            option.children
              .join("")
              .toLowerCase()
              .includes(inputValue.toLowerCase())
          }
        >
          {values.map((request) => (
            <Select.Option value={request.UUID} key={request.UUID}>
              {" "}
              {request.description} | {request.name}{" "}
            </Select.Option>
          ))}
        </Select>
      ) : (
        <p>No hay solicitudes por el momento...</p>
      )}
    </>
  );
};

export default SelectRequest;
