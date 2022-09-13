import axios from "axios";
import React, { useState } from "react";
import "./styles/registro.css";
import { Button, Form, Input, Typography } from "antd";
import "antd/dist/antd.min.css";
import { LockOutlined, UserOutlined,MailOutlined, LogoutOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
const { Text } = Typography;


const Registro = () => {

  let identidad = JSON.parse(localStorage.getItem('identity'));

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
        text: error.response.data.mensaje,
      })
    })

  }

  if(identidad.rol === 'Admin'){
    return (
      <>
      <div className="general">
        <div className="page-header">
          <div className="page-log">
            <h2 className="usuario-log">{identidad.usuario}</h2>
            <div className="btn-logout">
              <a className="text-logout" href="/">
                {
                  <LogoutOutlined
                    style={{ color: "#BEBEBE", fontSize: "10px" }}
                  />
                }{" "}
                <Text style={{ color: "#BEBEBE" }}>Cerrar Sesion</Text>
              </a>
            </div>
          </div>
          <div className="page-caption">
            <h1 className="page-title">Usuarios</h1>
          </div>
        </div>
        <div className="page-body cyan">
        <Button className="btn-volver" href="/inicio-admin" size="large" shape="round" style={{color:"#BEBEBE"}} type="primary">
          <ArrowLeftOutlined style={{ color: "white", fontSize: "10px" }}/><Text style={{color:"white"}}>Volver</Text>
          </Button>
        </div>
      </div>
      </>
    );   
  } else{
    return <Navigate to={"/"} />;
  }
};

export default Registro;
