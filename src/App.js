import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login';
import Inicio from './pages/inicio-requester';
import Registro from './pages/registro';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/inicio-requester" component={Inicio}/>
        <Route exact path="/registro" component={Registro}/>
        <Route component={Login}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
