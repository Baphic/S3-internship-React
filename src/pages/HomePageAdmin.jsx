import "./styles/inicio-requester.css";
import SelectRequest from "../components/SelectRequest";
import DownloadFiles from "../components/DownloadFIle";
import OptionsRequest from "../components/OptionsRequest";
import HistoryButton from "../components/HistoryButton";
import LogoutButton from "../components/LogoutButton";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import UsersButton from "../components/UsersButton";
import FolderButton from "../components/FolderButton";

const HomePageAdmin = () => {
  const [request, setRequest] = useState("");

  let identity = JSON.parse(localStorage.getItem("identity"));
  if (identity.rol === "Admin") {
    return (
      <div className="general">
        <div className="page-header">
          <LogoutButton />
          <div className="page-caption">
            <h1 className="page-title">Bucket internship-project-21</h1>
          </div>
        </div>
        <div className="page-body cyan-general">
          <div className="container green">
            <div className="contents">
              <h2>Crear Carpeta</h2>
              <p>Crea nuevas carpetas para poder guardar datos en ellas.</p>
              <FolderButton />
            </div>
          </div>
          <div className="container con-select orange">
            <div className="contents">
              <h2>Solicitud</h2>
              <p>
                Mira el listado y selecciona una solicitud para poder aprobarla
                o denegarla.
              </p>
              <SelectRequest setRequest={setRequest} request={request} />
            </div>
          </div>
          <div className="container con-upload blue">
            <div className="contents">
              <h2>Descarga de Archivos</h2>
              <p>Descarga el archivo de la solicitud para poder verlo.</p>
              <DownloadFiles request={request} />
            </div>
          </div>
          <div className="container con-download red">
            <div className="contents">
              <h2>Aprobar o Denegar</h2>
              <p>
                Decide si aprobar o denegar la solicitud para subir los
                archivos.
              </p>
              <OptionsRequest request={request} setRequest={setRequest} />
            </div>
          </div>
          <div className="container con-download cyan">
            <div className="contents">
              <h2>Historial</h2>
              <p>
                Mira los historiales de los datos que has aprobado y denegado.
              </p>
              <HistoryButton />
            </div>
          </div>
          <div className="container violet">
            <div className="contents">
              <h2>Usuarios</h2>
              <p>Gestiona los usuarios.</p>
              <UsersButton />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/404"} />;
  }
};

export default HomePageAdmin;
