import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import HomePageRequester from './pages/HomePageRequester';
import InicioAdministrador from './pages/inicio-administrador';
import Registro from './pages/registro';
import Historiales from './pages/historiales';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/inicio-requester" element={<HomePageRequester/>}/>
        <Route exact path="/inicio-admin" element={<InicioAdministrador/>} />
        <Route exact path="/registro" element={<Registro/>}/>
        <Route exact path='/404' element={<Page404/>}/>
        <Route exact path="/historiales" element={<Historiales/>}/>
        <Route component={Page404}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
