import axios from "axios";
import React, { useState } from "react";
import "./styles/registro.css";
import { Button, Form, Input, Typography } from "antd";
import "antd/dist/antd.min.css";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  LogoutOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import FormRegister from "../components/FormRegister";
const { Text } = Typography;

const Register = () => {
  let identity = JSON.parse(localStorage.getItem("identity"));
  
  if (identity.rol === "Admin") {
    return (
      <>
        <div className="general">
          <div className="page-header">
            <div className="page-log">
              <h2 className="usuario-log">{identity.user}</h2>
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
            <Button
              className="btn-volver"
              href="/inicio-admin"
              size="large"
              shape="round"
              style={{ color: "#BEBEBE" }}
              type="primary"
            >
              <ArrowLeftOutlined style={{ color: "white", fontSize: "15px" }} />
              <Text style={{ color: "white" }}>Volver</Text>
            </Button>
            <div className="contenedor green">
              <div className="contenido">
                <h2>Registrar Usuario</h2>
                <FormRegister />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to={"/404"} />;
  }
};

export default Register;
