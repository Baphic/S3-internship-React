import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import axios from "axios";
import Swal from "sweetalert2";

const DownloadFiles = ({ request }) => {

  let token = JSON.parse(localStorage.getItem("token"));
  let data = request.split("/");
  let folder = data[0];
  let file = data[1];


  const downloadFiles = () => {
    axios
      .get(`/api/data/${folder}/${file}`, {
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
        const link = document.createElement("a");
        link.href = res.data.download;
        link.setAttribute("download", file);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
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
        disabled={!request ? true : false}
      >
        Download
      </Button>
    </>
  );
};

export default DownloadFiles;
