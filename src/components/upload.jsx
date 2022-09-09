import { ConsoleSqlOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const UploadData = ({ directorio }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  const [fileList, setFileList] = useState([]);
  const [descripcion, setDescripcion] = useState("");

  const uploadData = () => {
    if (!directorio) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Elija un Directorio",
      });
    } else {
      console.log(directorio);
      console.log(fileList);
      console.log(token);
      let formData = new FormData();
      // console.log(fileList);
      console.log(formData);
      // let parametros = {
      //   file: fileList,
      //   descrip: 'si'
      // }
      for (let index = 0; index < fileList.length; index++) {
        console.log(index);
        console.log(fileList.length);
        formData.append("file", fileList[index]);

        if (index === fileList.length - 1) {
          formData.append("folder", directorio);
          formData.append('descrip', descripcion);
          axios
            .post("/api/uploadDataBucket", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                type: "formData",
                Authorization: token,
              },
            })
            .then((res) => {
              setFileList([]);
              setDescripcion("")
              // window.location.reload(true)
              Swal.fire({
                imageUrl:require('../assets/img/peepo.gif'),
                imageWidth:'200px',
                imageAlt:'peepo',
                title: "Success",
                text: "Peticion Exitosa",
              });
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.mensaje,
              });
            });
        }
      }
    }
  };

  return (
    <>
      <Upload
        action="http://localhost:3000/"
        listType="picture"
        className="upload-list-inline"
        accept=".png,.jpeg,.jpg"
        beforeUpload={(file) => {
          setFileList([...fileList, file]);
          console.log(file);
          return false;
        }}
      >
        <Button size="large" danger icon={<UploadOutlined />}>
          Upload
        </Button>
      </Upload>
      <br></br>
      <Input
        placeholder="Escribe una Descripcion"
        value={descripcion}
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
        size="large"
      />
      <br></br>
      <br></br>
      <Button size="large" onClick={uploadData} type="primary" danger>
        Solicitar
      </Button>
    </>
  );
};

export default UploadData;
