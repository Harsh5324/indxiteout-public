import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import {toast} from 'react-toastify';

export default function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
        fetch(process.env.REACT_APP_BASE_URL+"/auth/register",{
          method:'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,email,password,role:'Admin'
            })
        })
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
              // // console.log('json error',json)
              toast.error("Something went wrong.");
            }
            else{
              // // console.log('json resp',json)
              if(json){
                    toast.success("User Created successfully.");
                    setTimeout(() => {
                      window.location.replace('/login')
                    }, 3000);
              }
            }
          }
        )
        .catch((error) => {
          toast.error(error.response || "Something went wrong.");
        });
    };


  return(
    <main className="form-signin h-vh m-auto container d-flex align-items-center justify-content-center py-5" style={{width:"50%"}}>
        <form className="col-lg-8" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <div className="form-floating mt-2">
            <input type="text"className="form-control" id="floatingInput" onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="floatingInput">Username</label>
            <div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></div>
            <div className="form-floating mt-2">
            <input type="email" className="form-control" id="floatingInput" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="floatingInput">Email Address</label>
            <div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></div>
          <div className="form-floating mb-3 mt-2">
            <input type="password" minLength={8} className="form-control" id="floatingPassword" onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
            <div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></div>
            <button className="btn btn-lg btn-primary" type="submit">Register</button>
            <p className="mt-3 mb-3 text-muted">
          <Link className="link" to="/login">
            Already Have an Account ?
          </Link>
          </p>
          
        </form>
      </main>
  );
}

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(false);
//     try {
//       const res = await axios.post("/auth/register", {
//         username,
//         email,
//         password,
//       });
//       res.data && window.location.replace("/login");
//     } catch (err) {
//       setError(true);
//     }
//   };
//   return (
//     <div className="register">
//       <span className="registerTitle">Register</span>
//       <form className="registerForm" onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your username..."
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label>Email</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your email..."
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           className="registerInput"
//           placeholder="Enter your password..."
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="registerButton" type="submit">
//           Register
//         </button>

//       </form>
//       <button className="registerLoginButton">
//         <Link className="link" to="/login">
//           Login
//         </Link>
//       </button>
//       {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
//     </div>
//   );
// }
