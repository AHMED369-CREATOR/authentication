import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Switch  } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/' exact component={Register}/>
         <Route path='/login' exact component={Login}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
