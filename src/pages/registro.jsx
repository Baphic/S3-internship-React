import React from "react";
import "./styles/registro.css";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { LockOutlined, UserOutlined,MailOutlined } from "@ant-design/icons";
import Password from "antd/lib/input/Password";

const Registro = () => {
  return (
    <>
      <div className="contenedorBase">
        <div className="contenedor1"></div>
        <div className="contenedor2">
          <div className="contenedorRegistro">
            <div className="contenedor-formulario">
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
              >
                <h1 className="texto-principal">Registrate Gratis!!!</h1>
                <img
                  className="imgRegistro"
                  src={require("../assets/img/Startup_Monochromatic.png")}
                  alt="registro"
                />
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese su nombre",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined style={{color:'#BEBEBE'}}/>} placeholder="Nombre" size="large"/>
                </Form.Item>
                <Form.Item
                  name="last"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese su apellido",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined style={{color:'#BEBEBE'}}/>} placeholder="Apellido" size="large"/>
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: "Ingrese su correo electronico",
                    },
                  ]}
                >
                  <Password prefix={<MailOutlined style={{color:'#BEBEBE'}}/>} placeholder="Correo Electronico" size="large"/>
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese su Usuario",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined style={{color:'#BEBEBE'}}/>} placeholder="Usuario" size="large"/>
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese su contraseña",
                    },
                  ]}
                >
                  <Input.Password prefix={<LockOutlined  style={{color:'#BEBEBE'}}/>} placeholder="Contraseña" size="large"/>
                </Form.Item>
                <br></br>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block size="large" className="btn-sub">
                    Registrarse
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
