import "./styles/inicio-requester.css";
import SelectDirectory from "../components/SelectDirectory";
import UploadData from "../components/UploadData";
import ListFiles from "../components/ListFiles";
import LogoutButton from "../components/LogoutButton";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const HomePageRequester = () => {
  let identity = JSON.parse(localStorage.getItem("identity"));
  const [directory, setDirectory] = useState("");

  if (identity.rol === "Requester") {
    return (
      <div className="general">
        <div className="page-header">
          <LogoutButton />
          <div className="page-caption">
            <h1 className="page-title">Bucket internship-project-21</h1>
          </div>
        </div>
        <div className="page-body cyan">
          <div className="container con-select blue">
            <div className="contents">
              <h2>Directorio</h2>
              <p>
                Mira el listado y selecciona el directorio al que deseas entrar
                para subir o ver archivos.
              </p>
              <SelectDirectory captureDirectory={setDirectory} />
            </div>
          </div>
          <div className="container con-download orange">
            <div className="contents">
              <h2>Archivos</h2>
              <p>
                Mira el listado de los archivos que se encuentran en el
                directorio seleccionado.
              </p>
              <ListFiles directory={directory} />
            </div>
          </div>
          <div className="container con-upload red">
            <div className="contents">
              <h2>Solicitar Subir Archivos</h2>
              <p>
                Selecciona los archivos que deseas subir al directorio
                seleccionado y solicita permisos para poder subirlos.
              </p>
              <UploadData directory={directory} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/404"} />;
  }
};

export default HomePageRequester;
