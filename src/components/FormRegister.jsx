import { Button, Form, Input, Select } from "antd";
import "../../src/App.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const { Option } = Select;

const FormRegister = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  const [form] = Form.useForm();

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  const cleanForm = () => {
    form.resetFields();
  };

  const handleChange = (value) => {
    setRol(value);
  };

  const register = () => {
    let params = {
      name: name,
      surname: lastname,
      user: user,
      email: email,
      password: password,
      rol: rol,
    };

    axios
      .post("/api/register", params, { headers: { Authorization: token } })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Usuario " + res.data.user.user + " Creado",
        });
        setName("");
        setEmail("");
        setLastName("");
        setPassword("");
        setRol("");
        setUser("");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Algo salio mal",
          text: error.response.data.message,
        });
      });
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: false }}
        onFinish={cleanForm}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          rules={[{ required: true, message: "Ingresa tu nombre" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Apellido"
          name="lastname"
          value={lastname}
          onChange={(e) => {
            setLastName(e.target.value);
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
          rules={[
            { required: true, message: "Ingresa tu correo", type: "email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Usuario"
          name="username"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
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
            className="button-confirm-register"
            disabled={
              name === "" ||
              lastname === "" ||
              email === "" ||
              user === "" ||
              password === "" ||
              rol === ""
                ? true
                : false
            }
            onClick={register}
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

export default FormRegister;
