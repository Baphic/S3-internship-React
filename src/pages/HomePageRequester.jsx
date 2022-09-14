
import "./styles/inicio-requester.css";
import SelectDirectory from "../components/SelectDirectory";
import UploadData from "../components/UploadData";
import ListFiles from "../components/ListFiles";
import {useState} from 'react';
import { Navigate } from "react-router-dom";
import { Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
const { Text } = Typography;

const HomePageRequester = () => {
  let identity = JSON.parse(localStorage.getItem("identity"));
  const [directory, setDirectory] = useState("");

  if (identity.rol === "Requester") {
    return (
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
                <Text style={{ color: "#BEBEBE" }}>Cerrar Sesión</Text>
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
              <SelectDirectory captureDirectory={setDirectory}/>
            </div>
          </div>
          <div className="contenedor con-download orange">
            <div className="contenido">
              <h2>Archivos</h2>
              <p>
                Mira el listado de los archivos que se encuentran en el directorio
                seleccionado.
              </p>
              <ListFiles directory={directory}/>
            </div>
          </div>
          <div className="contenedor con-upload red">
            <div className="contenido">
              <h2>Solicitar Subir Archivos</h2>
              <p>
                Selecciona los archivos que deseas subir al directorio
                seleccionado y solicita permisos para poder subirlos.
              </p>
              <UploadData directory={directory}/>
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return <Navigate to={"/404"} />;
  }
};

export default HomePageRequester;
