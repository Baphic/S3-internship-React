import React from "react";
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "./styles/page404.css";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  let identity = JSON.parse(localStorage.getItem("identity"));
  let navigate = useNavigate();

  const redirect = () => {
    if (identity.rol === "Admin") {
      navigate("/inicio-admin");
    } else if (identity.rol === "Requester") {
      navigate("/inicio-requester");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="container-1">
        <p>404</p>
      </div>
      <div className="container-2">
        <p className="title">Página no encontrada</p>
        <p className="paragraph">
          No se pudo encontrar la página que solicitaste
        </p>
        <Button
          onClick={redirect}
          className="button-return"
          type="primary"
          shape="round"
          icon={<HomeOutlined />}
          size="large"
        >
          Regresar
        </Button>
      </div>
    </>
  );
};

export default Page404;
