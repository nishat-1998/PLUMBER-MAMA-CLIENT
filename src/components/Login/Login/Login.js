import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import LoginBg from '../../../images/log.png';


const Login = () => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
const history= useHistory();
const location =useLocation();
const { from } = location.state || { from: { pathname: "/" } };

    !firebase.apps.length && firebase.initializeApp(firebaseConfig);
    const handleSignIn=() =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName,email} = result.user;
    const signedInUser={name:displayName,email}
    setLoggedInUser(signedInUser);
    history.replace(from);
    // ...
   
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode,errorMessage,email,credential)

    // ...
  });


    }
    return (
        <div className="login-page container">
      <div className="row align-items-center" style={{ height: "60vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-info" onClick={handleSignIn}>Google Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
    );
};

export default Login;