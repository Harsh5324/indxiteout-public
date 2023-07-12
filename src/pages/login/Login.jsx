import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import {toast} from 'react-toastify';
import Api from "../../API/Api";
export default function Login() {
    const userRef = useRef();
    const [isLoggedIn, IsLogin] = useState(false)
    useEffect(()=>{
      let user = localStorage.getItem('user')
        user = JSON.parse(user)
        const api_token = user && user.token ? user.token : null;
      if(api_token){
        checkLoggedIn()
      }
      
    },[])
    const { user } = useContext(Context);
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(userRef.current.value && passwordRef.current.value){
        dispatch({ type: "LOGIN_START" });
        // try {
          let body = {
            username: userRef.current.value,
            password: passwordRef.current.value,
          }
          Api.fetchApiCall("/auth/login",'POST',body)
          .then((resp) => {
            let json = resp.json();
           if (resp.status >= 200 && resp.status < 300) {
              return json;
            } else {
              return json.then(Promise.reject.bind(Promise));
            }
          })
          .then(
            json => {
              console.log('json error',json)
              if (json.result && (json.result.status === 'error')) {
                
                toast.error("Something went wrong.");
                dispatch({ type: "LOGIN_FAILURE" });
              }
              else{
                // console.log('json resp',json)
                if(json){
                  IsLogin(true)
                      toast.success("Logged in successfully.");
                      setTimeout(() => {
                        window.location.replace('/admin/dashboard')
                      }, 3000);
                      dispatch({ type: "LOGIN_SUCCESS", payload: json });
                }
              }
            }
          )
          .catch((error) => {
            // console.log('catch',error)
            toast.error(error.response || "Something went wrong.");
            dispatch({ type: "LOGIN_FAILURE" });
          })    
      }else{
        toast.error('Please check login credentials.');
      }

    };
    const checkLoggedIn = async () => {
      let body = {
        "token": JSON.parse(localStorage.getItem('user')).token
      }
      Api.fetchApiCall("/auth/isLoggedIn",'POST',body)
      .then((resp) => {
        let json = resp.json();
       if (resp.status >= 200 && resp.status < 300) {
          return json;
        } else {
          return json.then(Promise.reject.bind(Promise));
        }
      })
      .then(
        json => {
          if (json.result && (json.result.status === 'error')) {
            console.log('json error',json)
            toast.error("Something went wrong.");
            
          }
          else{
            console.log('json resp',json)
            if(json.response === 'Token is valid.'){
              IsLogin(true)
            }
          }
        }
      )
      .catch((error) => {
        console.log('catch',error)
        toast.error(error.response || "Something went wrong.");
        dispatch({ type: "LOGIN_FAILURE" });
      }) 
    }
    const handleLogout = () => {
      IsLogin(false)
      dispatch({ type: "LOGOUT" });
    };
    return (
      <main className="form-signin w-50 m-auto container d-flex align-items-center justify-content-center py-5">
        {
          !isLoggedIn  ?
          <form className="col-lg-8" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating mt-2">
              <input type="text" ref={userRef} className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Username</label>
              <div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></div>
            <div className="form-floating mb-3 mt-2">
              <input type="password" ref={passwordRef} className="form-control" id="floatingPassword"  />
              <label htmlFor="floatingPassword">Password</label>
              <div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></div>
            <button className="btn btn-lg btn-primary" disabled={isFetching} type="submit">Sign in</button>

            <p className="mt-3 mb-3 text-muted">
            <Link className="link" to="/register">
              Register
            </Link>
            </p>
          </form>
          : 
          <div className="container">
            <h2>
              You are already logged in.
            </h2>
            <Link className="link" to="/admin/dashboard">
              <p>Go to Dashboard</p>
              </Link>
              <a href="#" onClick={handleLogout}>Logout</a>
          </div>
        }
      </main>
    );
  }