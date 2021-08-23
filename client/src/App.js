import './App.css';
import { Switch, Route } from 'react-router-dom';
import Students from './components/Students';
import NavBar from './components/NavBar';
import NewStudent from './components/NewStudent';
import Student from './components/Student';
import {  useEffect, useState } from 'react';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === '1') {
      setIsLoggedIn(true)
    }
  })

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false)
  }
  return (
      <div className="App">
        <NavBar isLoggedIn = {isLoggedIn} logoutHandler = {logoutHandler}/>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Switch>
                            <Route exact path = '/' component = {Students}></Route>
                            <Route exact path = '/create' component = {NewStudent}></Route>
                            <Route exact path = '/student/:id' component = {Student}></Route>
                          </Switch>
                          }


      </div>

  );
}

export default App;
