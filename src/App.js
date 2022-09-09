import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import Inicio from './pages/inicio-requester';
import InicioAdministrador from './pages/inicio-administrador';
import Registro from './pages/registro';
import Historiales from './pages/historiales';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/inicio-requester" element={<Inicio/>}/>
        <Route exact path="/inicio-admin" element={<InicioAdministrador/>} />
        <Route exact path="/registro" element={<Registro/>}/>
        <Route exact path="/historiales" element={<Historiales/>}/>
        <Route component={Login}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
