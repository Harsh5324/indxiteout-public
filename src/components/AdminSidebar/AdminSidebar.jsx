import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import "./AdminSidebar.css"
import {toast} from 'react-toastify';
import Api from "../../API/Api";
export default function AdminSidebar(){
    const { user, dispatch } = useContext(Context);
    // const userRef = useRef();
    // const { user } = useContext(Context);
	const [api_token, setAuthToken] = useState('')
    useEffect(()=>{
	let user = localStorage.getItem('user')
	user = JSON.parse(user)
	
	console.log('token',user)
	console.log('token',user.token)
	setAuthToken(user.token)
	// setTimeout(() => {
		console.log('api_token',api_token)
		if(user.token){
			checkLoggedIn()
		  }else{
			toast.error('You are not loggedin.');
			window.location.replace('/login')
		  }	
	// }, 2000);

    },[])
	const checkLoggedIn = async () => {
		let body = {
		  "token": user.token
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
			}
		  }
		)
		.catch((error) => {
		  console.log('catch',error)
		  toast.error(error.response || "Something went wrong.");
		  dispatch({ type: "LOGOUT" });
		  window.location.replace('/login')
		}) 
	  }
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        window.location.replace('/login')
      };
      return (
           
        <>
        <header className="bg-white shadow navbar-sticky" id="header">
			<div className="header_top clearfix affix-top container" style={{ height : '80px'}} >
				<div className="d-flex align-items-center justify-content-between" style={{ height : '80px'}}>
					<div className="logo media-left media-middle">
						<Link to="/admin/dashboard" style={{margin: "5px 0px 5px 0px"}}>
							<img width="500" height="207" alt="Inxite Out Pvt. Ltd." className="" src="https://inxiteout.ai/wp-content/uploads/2021/08/logo-14.png" />
							<noscript>
								<img width="500" height="207" src="https://inxiteout.ai/wp-content/uploads/2021/08/logo-14.png" style={{width: "170px"}} alt="Inxite Out Pvt. Ltd." />
							</noscript>
						</Link>
					</div>
					<div className="top_nav  media-middle affix-top h-100">
						<div className="top_nav_wrapper d-block h-100">
							<ul id="menu-main-menu" className="main_menu_nav d-flex align-items-center h-100">
								<li id="menu-item-7261" >
								<Link to="/admin/dashboard" aria-current="page" className='text-black'>Dashboard</Link>
								</li>
                                <li>
                                <Link className="link nav-link link-dark" to="/admin/blogs" style={{ textDecoration: "none", color: "black" }}> Blogs</Link>
                                  </li>
								<li id="menu-item-6904" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6904">
								<Link to="/admin/expertise" aria-current="page" className='text-black'>Expertise</Link>
								</li>
								<li id="menu-item-6904" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6904">
								<Link to="/admin/solutions" aria-current="page" className='text-black'>Solutions</Link>
								</li>
								<li id="menu-item-7393" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7393">
								<Link to="/admin/case-study">Case Studies</Link>
								</li>
								
								<li id="menu-item-12239" >
								{/* <NavLink to="/blog">BLOG</NavLink> */}
								</li>
								<li id="menu-item-7446" className="btn-header btn btn-primary btn-sm  menu-item menu-item-type-post_type menu-item-object-page menu-item-7446">
								<a className=""><Link to="/get-in-touch" style={{textDecoration: "none", color: "white"}} onClick={handleLogout}> Log Out </Link></a>
								</li>
							</ul>
							
						</div>
					</div>
				</div>
			</div>
			<div className="mobile_header">
				<div className="px-3 logo_wrapper h-100px p-0 d-flex align-items-center justify-content-between">
				<div className="logo d-flex align-items-center">
					<a href="" style={{margin: "5px 0px 5px 0px"}}>
					<img width="500" height="207" style={{width: "170px"}} alt="Inxite Out Pvt. Ltd." className=" lazyloaded" src="https://inxiteout.ai/wp-content/uploads/2021/08/logo-14.png" />
					<noscript>
						<img width="500" height="207" src="https://inxiteout.ai/wp-content/uploads/2021/08/logo-14.png" style={{width: "170px"}} alt="Inxite Out Pvt. Ltd." />
					</noscript>
					</a>
				</div>
				
				<div id="menu_toggle">
				<button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					
				</button> 
                </div>
				</div>
				<div className="header_info">
					<div  className="collapse navbar-collapse top_nav_mobile" id="navbarSupportedContent">
						<ul id="menu-main-menu-1" className="main_menu_nav">
							<li id="menu-item-7261" >
								<Link to="/admin/dashboard" aria-current="page" className='text-black'>Dashboard</Link>
							</li>
							<li>
                                <Link className="link nav-link link-dark" to="/admin/blogs" style={{ textDecoration: "none", color: "black" }}> Blogs</Link>
                            </li>
							<li id="menu-item-6904" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6904">
								<Link to="/admin/expertise" aria-current="page" className='text-black'>Expertise</Link>
							</li>
							<li id="menu-item-6904" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6904">
								<Link to="/admin/solutions" aria-current="page" className='text-black'>Solutions</Link>
							</li>
							<li id="menu-item-7393" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7393">
								<Link to="/admin/case-study">Case Studies</Link>
							</li>
							<li id="menu-item-7446" className="btn-header btn btn-primary btn-sm  menu-item menu-item-type-post_type menu-item-object-page menu-item-7446">
								<a className=""><Link to="/get-in-touch" style={{textDecoration: "none", color: "white"}} onClick={handleLogout}> Log Out </Link></a>
							</li>
						
						<li className="btn-header main_cta menu-item menu-item-type-post_type menu-item-object-page menu-item-7446">
							 {/* <NavLink to="/get-in-touch">GET IN TOUCH</NavLink> */}
						</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
        </>  
          
          

      );
    }
 
