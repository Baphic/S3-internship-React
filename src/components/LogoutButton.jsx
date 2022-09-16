import "../pages/styles/inicio-requester.css";
import React from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button } from "antd";

const LogoutButton = () => {
  let identity = JSON.parse(localStorage.getItem("identity"));

  return (
    <div className="page-log">
      <h2 className="user-log">{identity.user}</h2>

      <Button
        href="/"
        className="btn-logout"
        type="primary"
        shape="round"
        style={{ color: "#E8E8E8" }}
        size="large"
      >
        <PoweroffOutlined style={{ fontSize: "13px" }} />
        Cerrar Sesión
      </Button>
    </div>
  );
};

export default LogoutButton;
