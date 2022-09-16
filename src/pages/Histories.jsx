import "./styles/inicio-requester.css";
import ApprovedFiles from "../components/ApprovedFiles";
import DennyFiles from "../components/DeniedFiles";
import LogoutButton from "../components/LogoutButton";
import { Navigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
const { Text } = Typography;

const Histories = () => {
  let identity = JSON.parse(localStorage.getItem("identity"));
  if (identity.rol === "Admin") {
    return (
      <div className="general">
        <div className="page-header">
          <LogoutButton />
          <div className="page-caption">
            <h1 className="page-title">Historiales</h1>
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
          <div className="container con-select blue">
            <div className="contents">
              <h2>Historial de Aprobados</h2>
              <p>
                Mira el historial de los datos que han sido aprobados mediante
                la solicitud de algún requester.
              </p>
              <ApprovedFiles />
            </div>
          </div>
          <div className="container con-download red">
            <div className="contents">
              <h2>Historial de Denegados</h2>
              <p>
                Mira el historial de los datos que han sido denegados mediante
                la solicitud de algún requester.
              </p>
              <DennyFiles />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/404"} />;
  }
};

export default Histories;
