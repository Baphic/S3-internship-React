import "./styles/login.css";
import axios from "axios";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.min.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Token } from "./Tokens";
import { Storage } from "./Identity";

const { Item } = Form;
const { Password } = Input;

const Login = () => {
  localStorage.clear();

  let navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = Token("token", "");
  const [identity, setIdentity] = Storage("identity", "");

  const login = () => {
    let loginParameters = {
      user: user,
      password: password,
      Token: "true",
    };

    axios
      .post("/api/login", loginParameters)
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
          title:
            "Bienvenido " +
            res.data.infoUser.name +
            " " +
            res.data.infoUser.surname,
        });
        setToken(res.data.token);
        setIdentity(res.data.infoUser);
        if (res.data.infoUser.rol === "Admin") {
          navigate("/inicio-admin");
        } else if (res.data.infoUser.rol === "Requester") {
          navigate("/inicio-requester");
        }
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
    <div className="main-container">
      <div className="secondary-container">
        <Form name="formulario" initialValues={{ remember: true }}>
          <img
            className="main-image"
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="loginImage"
          />
          <Item
            name="username"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
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
        </Form>
      </div>
    </div>
  );
};

export default Login;
