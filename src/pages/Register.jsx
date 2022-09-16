import { Button, Typography } from "antd";
import "antd/dist/antd.min.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";
import FormRegister from "../components/FormRegister";
import LogoutButton from "../components/LogoutButton";
const { Text } = Typography;

const Register = () => {
  let identity = JSON.parse(localStorage.getItem("identity"));

  if (identity.rol === "Admin") {
    return (
      <>
        <div className="page-header">
          <LogoutButton />
          <div className="page-caption">
            <h1 className="page-title">Usuarios</h1>
          </div>
        </div>
        <div className="page-body cyan">
          <Button
            className="btn-return"
            href="/inicio-admin"
            size="large"
            shape="round"
            style={{ color: "#BEBEBE" }}
            type="primary"
          >
            <ArrowLeftOutlined style={{ color: "white", fontSize: "15px" }} />
            <Text style={{ color: "white" }}>Volver</Text>
          </Button>
          <div className="container green">
            <div className="contents">
              <h2>Registrar Usuario</h2>
              <FormRegister />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to={"/404"} />;
  }
};

export default Register;
