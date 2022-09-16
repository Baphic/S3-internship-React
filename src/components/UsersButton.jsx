import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../../src/App.css";

const UsersButton = () => {
  return (
    <>
      <Button
        className="button-register"
        size="large"
        type="primary"
        href="/registro"
      >
        <UserOutlined /> Usuarios
      </Button>
    </>
  );
};

export default UsersButton;
