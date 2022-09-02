import './styles/login.css';
import { Form, Input, Button, Checkbox} from 'antd';
import 'antd/dist/antd.css'; 
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const {Item}  = Form;
const {Password} = Input;

const Login = () => {
  return (
    <div className="contenedor-principal">
      <div className="contenedor-secundario">
      <Form name="formulario" initialValues={{recordar:true}}
      >
        <img className="imagen-principal" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="imagen-login"/>
        <Item 
          name="username" 
          rules={[{
            required: true,
            message: "Debe ingresar el nombre de usuario"
          }]}
        >
          <Input prefix={<UserOutlined style={{color:'#BEBEBE'}}/>} placeholder="Usuario" size="large"/>

        </Item>


        <Item 
          name="password" 
          rules={[{
            required: true,
            message: "Debe ingresar la contraseña"
          }]}
        >
          <Password prefix={<LockOutlined  style={{color:'#BEBEBE'}}/>} placeholder="Contraseña" size="large"/>
          
        </Item>


        <Item name="recordar" valuePropName="checked">
          <Checkbox danger>
            Recordar Ususario
          </Checkbox>
        </Item>


        <Item>
          <Button type="primary" htmlType="submit" block size="large">
            Iniciar Sesión
          </Button>
        </Item>


        <Item>
          <p>O <a href="/registro">registrate ahora!</a></p>
        </Item>

      </Form>
      </div>
    </div>
  );
}

export default Login;
