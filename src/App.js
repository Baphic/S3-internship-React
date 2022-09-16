import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import HomePageRequester from './pages/HomePageRequester';
import HomePageAdmin from './pages/HomePageAdmin';
import Register from './pages/Register';
import Histories from './pages/Histories';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/inicio-requester" element={<HomePageRequester/>}/>
        <Route exact path="/inicio-admin" element={<HomePageAdmin/>} />
        <Route exact path="/registro" element={<Register/>}/>
        <Route exact path='/404' element={<Page404/>}/>
        <Route exact path="/historiales" element={<Histories/>}/>
        <Route component={Page404}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
