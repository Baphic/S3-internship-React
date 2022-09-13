import {Button} from 'antd';
import { EyeOutlined, UserOutlined } from '@ant-design/icons';
import '../../src/App.css'

const ButtonUsuarios = () => {
  return (
    <>
        <Button className="button-registro" size="large" type="primary" href="/registro">
            <UserOutlined /> Usuarios
        </Button>
    </>
  )
}

export default ButtonUsuarios;