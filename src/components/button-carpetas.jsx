import { Button, Input } from "antd";
import { EyeOutlined, FolderAddOutlined } from "@ant-design/icons";
import "../../src/App.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ButtonCarpetas = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  const [carpeta, setCarpeta] = useState("");

  let parametros = {
    name: carpeta,
  };

  const crearCarpeta = () => {
    axios
      .post("/api/addFolder", parametros, { headers: { Authorization: token } })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Carpeta " + carpeta + " Creada",
        });
        setCarpeta("");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.mensaje,
        });
      });
  };

  return (
    <>
      <Input
        placeholder="Ingresa el nombre de la nueva carpeta"
        value={carpeta}
        onChange={(e) => {
          setCarpeta(e.target.value);
        }}
        size="large"
      />
      <br></br>
      <br></br>
      <Button disabled={carpeta===''?true:false} className="button-carpeta" onClick={crearCarpeta} size="large" type="primary">
        <FolderAddOutlined />
        Crear Carpeta
      </Button>
    </>
  );
};

export default ButtonCarpetas;
