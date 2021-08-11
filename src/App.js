import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Log in
        console.log(userAuth);

        auth.currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {

          console.log('the token is :' + idToken);

          // Send token to your backend via HTTPS
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
            userToken: idToken
          }));

        }).catch(function (error) {
          // Handle error
          alert(error);
        });


      } else {
        //Log out
        dispatch(logout);
      }
    });

    return unsubscribe;

  }, [dispatch]);

  return (
    <div className="App">
      <Router>

        {!user ? (
          <Login />
        ) : <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>

          </Switch>}

      </Router>
    </div>
  );
}

export default App;
