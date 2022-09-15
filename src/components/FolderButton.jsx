import { Button, Input } from "antd";
import { EyeOutlined, FolderAddOutlined } from "@ant-design/icons";
import "../../src/App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FolderButton = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  const [folder, setFolder] = useState("");

  useEffect(()=>{
    
  },[])


  const addFolder = () => {

    let folder2 = folder.trim();
    folder2 = folder2.replace(/\s+/g, '_');
    console.log(folder2)
    let params = {
      name: folder2,
    };

    if(folder.match("/")){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Simbolo / no valido',
      });
    }else{
      axios
      .post("/api/folder", params, { headers: { Authorization: token } })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Carpeta " + folder + " Creada",
        });
        setFolder("");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      });
    }
  };

  return (
    <>
      <Input
        placeholder="Ingresa el nombre de la nueva carpeta"
        value={folder}
        onChange={(e) => {
          setFolder(e.target.value);
        }}
        size="large"
      />
      <br></br>
      <br></br>
      <Button disabled={folder===''?true:false} className="button-carpeta" onClick={addFolder} size="large" type="primary">
        <FolderAddOutlined />
        Crear Carpeta
      </Button>
    </>
  );
};

export default FolderButton;
