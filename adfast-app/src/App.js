import React from 'react';
import Home from './components/Home'
import { BrowserRouter as Router , Switch, Route}  from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/Main';
function App() {
  return (<> 
    <Router>
      <div >
      <Home>
        <Switch>
          <Route path='/' exact component={Home} ></Route>
          <Route path="/log-in" component={Main} />
        </Switch>
      </Home>
      </div>
    
      </Router>
      </> 
  )
  ;
}

export default App;
