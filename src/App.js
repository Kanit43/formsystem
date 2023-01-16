import React from 'react';
import{BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from './components/home'
import dashboard from './components/dashboard'
import login from './components/login'
import signup from './components/signup'
import { AuthProvider } from './components/Auth';





function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={dashboard}/>
          <Route exact path="/login" component={login}/>
          <Route exact path="/signuo" component={signup}/>

        </Switch>
      </Router>


    </AuthProvider>
  )
}

export default App;
