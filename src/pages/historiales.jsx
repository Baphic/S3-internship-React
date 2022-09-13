import "./styles/inicio-requester.css";
import ListFilesAprobados from "../components/list-files-aprobados";
import ListFilesDenegados from "../components/list-files-denegados";
import { Navigate } from "react-router-dom";
import { ArrowLeftOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
const { Text } = Typography;

const Historiales = () => {
  let identidad = JSON.parse(localStorage.getItem("identity"));
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
            <h1 className="page-title">Historiales</h1>
          </div>
        </div>
        <div className="page-body cyan">
          <Button className="btn-volver" href="/inicio-admin" size="large" shape="round" style={{color:"#BEBEBE"}} type="primary">
          <ArrowLeftOutlined style={{ color: "white", fontSize: "15px" }}/><Text style={{color:"white"}}>Volver</Text>
          </Button>
          <div className="contenedor con-select blue">
            <div className="contenido">
              <h2>Historial de Aprobados</h2>
              <p>
                Mira el historial de los datos que han sido aprobados mediante la
                solicitud de algún requester.
              </p>
              <ListFilesAprobados />
            </div>
          </div>
          <div className="contenedor con-download red">
            <div className="contenido">
              <h2>Historial de Denegados</h2>
              <p>
                Mira el historial de los datos que han sido denegados mediante la
                solicitud de algún requester.
              </p>
              <ListFilesDenegados />
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return <Navigate to={"/404"} />;
  }
};

export default Historiales;
