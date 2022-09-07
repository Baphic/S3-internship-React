import axios from "axios";
import React, { useState } from "react";
import "./styles/registro.css";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.min.css";
import { LockOutlined, UserOutlined,MailOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registro = () => {

  let navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registro = ()=>{
    let parametrosRegistro = {
      nombre: nombre,
      apellido: apellido,
      usuario: usuario,
      email: email,
      password: password
    }

    axios.post('/api/registro',parametrosRegistro).then((res)=>{
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Usuario registrado correctamente',
      })
      navigate("/")
    }).catch((error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Algo salio mal',
        text: error.error.mensaje,
      })
    })

  }

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
                  value={nombre}
                  onChange={(e)=>{
                    setNombre(e.target.value)
                  }}
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
                  value = {apellido}
                  onChange={(e)=>{
                    setApellido(e.target.value)
                  }}
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
                  value = {email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: "Ingrese su correo electronico",
                    },
                  ]}
                >
                  <Input prefix={<MailOutlined style={{color:'#BEBEBE'}}/>} placeholder="Correo Electronico" size="large"/>
                </Form.Item>
                <Form.Item
                  name="username"
                  value = {usuario}
                  onChange={(e)=>{
                    setUsuario(e.target.value)
                  }}
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
                  value = {password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
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
                  <Button type="primary" htmlType="submit" onClick={registro} block size="large" className="btn-sub">
                    Registrarse
                  </Button>
                </Form.Item>
                <Form.Item>
                  <p>
                   <h3><a href="/">Ya tienes una cuenta?</a></h3>
                  </p>
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
