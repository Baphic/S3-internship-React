import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UploadData = ({ directory }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  const [fileList, setFileList] = useState([]);
  const [array, setArray] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {}, [fileList]);

  const uploadData = () => {
    if (!directory) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Elija un Directorio",
      });
    } else {
      setArray([]);

      let formData = new FormData();

      for (let index = 0; index < fileList.length; index++) {
        formData.append("file", fileList[index]);

        if (index === fileList.length - 1) {
          formData.append("folder", directory);
          formData.append("descrip", description);
          axios
            .post("/api/dataBucket", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                type: "formData",
                Authorization: token,
              },
            })
            .then((res) => {
              setFileList([]);
              setDescription("");
              Swal.fire({
                imageUrl: require("../assets/img/peepo.gif"),
                imageWidth: "200px",
                imageAlt: "peepo",
                title: "Success",
                text: "Peticion Exitosa",
              });
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
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
        defaultFileList={array}
        className="upload-list-inline"
        accept=".png,.jpeg,.jpg"
        maxCount={2}
        beforeUpload={(file) => {
          setFileList([...fileList, file]);
          setArray([...array, file]);
          return false;
        }}
        onRemove={(file) => {
          for (let index = 0; index < fileList.length; index++) {
            if (file.uid === fileList[index].uid) {
              const filter = fileList.filter(
                (file) => file.uid !== fileList[index].uid
              );
              setFileList(filter);
              setArray(filter);
            }
          }
        }}
      >
        <Button
          disabled={fileList.length >= 20 ? true : false}
          size="large"
          danger
          icon={<UploadOutlined />}
        >
          Upload
        </Button>
      </Upload>
      <br></br>
      <Input
        placeholder="Escribe una Descripción"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        size="large"
      />
      <br></br>
      <br></br>
      <Button
        disabled={array.length === 0 ? true : false}
        size="large"
        onClick={uploadData}
        type="primary"
        danger
      >
        Solicitar
      </Button>
    </>
  );
};

export default UploadData;
