import "./styles/inicio-requester.css";
import SelectSolicitudes from "../components/select-solicitudes";
import DownloadFiles from "../components/download-files";
import ListFilesSolicitud from "../components/list-solicitud-files";
import ButtonHistorial from "../components/button-historiales";
import { useNavigate, Navigate } from "react-router-dom";
import { Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useState } from "react";
import ButtonUsuarios from "../components/button-usuarios";
import ButtonCarpetas from "../components/button-carpetas";
const { Text } = Typography;

const InicioAdministrador = () => {
  const [solicitud, setSolicitud] = useState("");

  let identidad = JSON.parse(localStorage.getItem("identity"));
  let navigate = useNavigate();
  if (identidad.rol === "Admin") {
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
        <div className="page-body cyan-general">
          <div className="contenedor green">
            <div className="contenido">
              <h2>Crear Carpeta</h2>
              <p>
                Crea nuevas carpetas para poder guardar datos en ellas.
              </p>
              <ButtonCarpetas />
            </div>
          </div>
          <div className="contenedor con-select orange">
            <div className="contenido">
              <h2>Solicitud</h2>
              <p>
                Mira el listado y selecciona una solicitud para poder aprobarla
                o denegarla.
              </p>
              <SelectSolicitudes setSolicitud={setSolicitud} />
            </div>
          </div>
          <div className="contenedor con-upload blue">
            <div className="contenido">
              <h2>Descarga de Archivos</h2>
              <p>Descarga el archivo de la solicitud para poder verlo.</p>
              <DownloadFiles solicitud={solicitud} />
            </div>
          </div>
          <div className="contenedor con-download red">
            <div className="contenido">
              <h2>Aprobar o Denegar</h2>
              <p>
                Decide si aprobar o denegar la solicitud para subir los
                archivos.
              </p>
              <ListFilesSolicitud solicitud={solicitud} />
            </div>
          </div>
          <div className="contenedor con-download cyan">
            <div className="contenido">
              <h2>Historial</h2>
              <p>
                Mira los historiales de los datos que has aprobado y denegado.
              </p>
              <ButtonHistorial />
            </div>
          </div>
          <div className="contenedor violet">
            <div className="contenido">
              <h2>Usuarios</h2>
              <p>Gestiona los usuarios.</p>
              <ButtonUsuarios />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/404"} />;
  }
};

export default InicioAdministrador;
