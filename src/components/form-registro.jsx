import { Button, Form, Input, Select } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import "../../src/App.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const { Option } = Select;

const FormRegistro = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  const handleChange = (value) => {
    setRol(value);
    console.log(rol);
  };

  const registro = () => {
    let parametros = {
      nombre: nombre,
      apellido: apellido,
      usuario: usuario,
      email: email,
      password: password,
      rol: rol,
    };

    console.log(parametros);

    axios
      .post("/api/registro", parametros, { headers: { Authorization: token } })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Usuario " + res.data.Usuario.usuario + " Creado",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Algo salio mal",
          text: error.response.data.mensaje,
        });
      });
  };

  return (
    <>
      <Form name="basic" initialValues={{ remember: true }} autoComplete="off">
        <Form.Item
          label="Nombre"
          name="name"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          rules={[{ required: true, message: "Ingresa tu nombre" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Apellido"
          name="lastname"
          value={apellido}
          onChange={(e) => {
            setApellido(e.target.value);
          }}
          rules={[{ required: true, message: "Ingresa tu apellido" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Correo"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          rules={[{ required: true, message: "Ingresa tu correo" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Usuario"
          name="username"
          value={usuario}
          onChange={(e) => {
            setUsuario(e.target.value);
          }}
          rules={[{ required: true, message: "Ingresa tu usuario" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          rules={[{ required: true, message: "Ingresa tu password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="rol" label="Rol" rules={[{ required: true }]}>
          <Select
            onChange={handleChange}
            rules={[{ required: true, message: "Ingresa el rol" }]}
          >
            <Option value="Requester">Requester</Option>
            <Option value="Admin">Administrador</Option>
          </Select>
        </Form.Item>
        <br></br>

        <Form.Item>
          <Button
            className="button-confirmar-registro"
            disabled={
              nombre === "" ||
              apellido === "" ||
              email === "" ||
              usuario === "" ||
              password === "" ||
              rol === ""
                ? true
                : false
            }
            onClick={registro}
            type="primary"
            htmlType="submit"
            size="large"
          >
            Registrar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormRegistro;
