import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import axios from "axios";
import Swal from "sweetalert2";

const DownloadFiles = ({ solicitud }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  console.log(token)

  let data = solicitud.split("/");

  let folder = data[0];
  let file = data[1];

  let parametros = {
    folder: folder,
    file: file,
  };

  console.log(parametros);

  console.log(solicitud);

  const eliminarFiles = () => {
    axios
      .delete(`/api/eliminar/${file}`)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const downloadFiles = () => {
    console.log(solicitud);
    axios
      .get(`/api/downloadData/${folder}/${file}`, {
        responseType: "blob",
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        Swal.fire({
          imageUrl: require("../assets/img/peepo.gif"),
          imageWidth: "200px",
          imageAlt: "peepo",
          title: "Success",
          text: "Peticion Exitosa",
        });
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", file);
        document.body.appendChild(link);
        link.click();
        eliminarFiles();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.mensaje,
        });
      });
  };

  return (
    <>
      <Button
        size="large"
        type="primary"
        onClick={downloadFiles}
        icon={<DownloadOutlined />}
        disabled={!solicitud ? true : false}
      >
        Download
      </Button>
    </>
  );
};

export default DownloadFiles;
