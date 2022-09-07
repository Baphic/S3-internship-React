import "./styles/login.css";
import axios from "axios";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.min.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Token } from "./token";
import { Storage } from "./identidad";

const { Item } = Form;
const { Password } = Input;

const Login = () => {

  localStorage.clear();

  let navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = Token("token", "");
  const [identidad, setIdentidad] = Storage("identity", "");

  const login = () => {
    let parametrosLogin = {
      usuario: usuario,
      password: password,
      Token: "true",
    };

    axios
      .post("/api/login", parametrosLogin)
      .then((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Bienvenido "+res.data.usuarioEncontrado.usuario,
        });
        setToken(res.data.token);
        setIdentidad(res.data.usuarioEncontrado);
        if (res.data.usuarioEncontrado.rol === "Admin") {
          navigate("/inicio-admin");
        } else if (res.data.usuarioEncontrado.rol === "Requester") {
          navigate("/inicio-requester");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Algo salio mal",
          text: "Ocurrio un error",
        });
      });
  };

  return (
    <div className="contenedor-principal">
      <div className="contenedor-secundario">
        <Form name="formulario" initialValues={{ recordar: true }}>
          <img
            className="imagen-principal"
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="imagen-login"
          />
          <Item
            name="username"
            value={usuario}
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
            rules={[
              {
                required: true,
                message: "Debe ingresar el nombre de usuario",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined style={{ color: "#BEBEBE" }} />}
              placeholder="Usuario"
              size="large"
            />
          </Item>

          <Item
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            rules={[
              {
                required: true,
                message: "Debe ingresar la contraseña",
              },
            ]}
          >
            <Password
              prefix={<LockOutlined style={{ color: "#BEBEBE" }} />}
              placeholder="Contraseña"
              size="large"
            />
          </Item>

          <Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              onClick={login}
            >
              Iniciar Sesión
            </Button>
          </Item>

          <Item>
            <p>
              O <a href="/registro">registrate ahora!</a>
            </p>
          </Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
