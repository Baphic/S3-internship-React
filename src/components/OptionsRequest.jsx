import { Button } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "../../src/App.css";
import axios from "axios";
import Swal from "sweetalert2";

const OptionsRequest = ({ request, setRequest }) => {
  let data = request.split("/");
  let folder = data[0];
  let file = data[1];

  const approve = () => {
    axios
      .put(`/api/approveRequest/${folder}/${file}`)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Solicitud Aceptada",
        });
        setRequest("");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      });
  };

  const deny = () => {
    axios
      .put(`/api/denyRequest/${folder}/${file}`)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Solicitud Denegada",
        });
        setRequest("");
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
        disabled={!request ? true : false}
        default
        className="button-list-request verde"
        onClick={approve}
        size="large"
        type="primary"
      >
        <CheckCircleOutlined /> Aprobar
      </Button>
      <Button
        disabled={!request ? true : false}
        danger
        className="button-list-request"
        size="large"
        onClick={deny}
        type="primary"
      >
        <CloseCircleOutlined /> Denegar
      </Button>
    </>
  );
};

export default OptionsRequest;
