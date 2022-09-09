import "./styles/inicio-requester.css";
import SelectSolicitud from "../components/select-solicitudes";
import DownloadFiles from "../components/download-files";
import ListFilesSolicitud from "../components/list-solicitud-files";
import BotonHistoriales from "../components/button-historiales";
import { useNavigate, Navigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
const { Text } = Typography;

const InicioAdministrador = () => {
  let identidad = JSON.parse(localStorage.getItem("identity"));
  let navigate = useNavigate();
  if (identidad.rol !== "Admin") {
    return <Navigate to={"/"} />;
  }
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
        <div className="contenedor con-select red">
          <div className="contenido">
            <h2>Solicitud</h2>
            <p>
              Mira el listado y selecciona una solicitud para poder ver los
              datos que contiene y decide aprobarla o denegarla.
            </p>
            <SelectSolicitud />
          </div>
        </div>
        <div className="contenedor con-download orange">
          <div className="contenido">
            <h2>Datos</h2>
            <p>
              Mira el listado de los datos que se encuentran en la solicitud
              seleccionada.
            </p>
            <ListFilesSolicitud />
          </div>
        </div>
        <div className="contenedor con-download cyan">
          <div className="contenido">
            <h2>Historial</h2>
            <p>
              Mira los historiales de los datos que has aprobado y denegado.
            </p>
            <BotonHistoriales />
          </div>
        </div>
        <div className="contenedor con-upload blue">
          <div className="contenido">
            <h2>Descarga de Archivos</h2>
            <p>Selecciona y descarga el archivo que desees de la solicitud.</p>
            <DownloadFiles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioAdministrador;
