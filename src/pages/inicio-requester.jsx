
import "./styles/inicio-requester.css";
import Selector from "../components/select-directorios";
import UploadData from "../components/upload";
import ListFiles from "../components/list-files";
import {useState} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import SelectDirectorio from "../components/select-directorios";
const { Text } = Typography;

const Inicio = () => {
  let identidad = JSON.parse(localStorage.getItem("identity"));
  let navigate = useNavigate();
  const [directorio, setDirectorio] = useState("");

  if (identidad.rol === "Requester") {
    return (
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
            <h1 className="page-title">Bucket internship-project-21</h1>
          </div>
        </div>
        <div className="page-body cyan">
          <div className="contenedor con-select blue">
            <div className="contenido">
              <h2>Directorio</h2>
              <p>
                Mira el listado y selecciona el directorio al que deseas entrar
                para subir o ver archivos.
              </p>
              <Selector setDirectorio={setDirectorio}/>
            </div>
          </div>
          <div className="contenedor con-download orange">
            <div className="contenido">
              <h2>Archivos</h2>
              <p>
                Mira el listado de los archivos que se encuentran en el directorio
                seleccionado.
              </p>
              <ListFiles directorio={directorio}/>
            </div>
          </div>
          <div className="contenedor con-upload red">
            <div className="contenido">
              <h2>Solicitar Subir Archivos</h2>
              <p>
                Selecciona los archivos que deseas subir al directorio
                seleccionado y solicita permisos para poder subirlos.
              </p>
              <UploadData directorio={directorio}/>
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return <Navigate to={"/404"} />;
  }
};

export default Inicio;
