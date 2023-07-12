import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import  axios  from 'axios';
import Api from "../../../API/Api";
import CardShow from "../CardShow/CardShow";


export default function CaseStudy(){
    const PF = process.env.REACT_APP_IMAGE_URL;
    const [posts, setPosts] = useState(null);
    let username = localStorage.getItem("user") && localStorage.getItem("user") != null ?  JSON.parse(localStorage.getItem("user")).username : ''
    useEffect(() => {
        // API CALL START
        getPosts()
      // API CALL ENDED
    },[])
    const getPosts = () => {
            // API CALL START
            fetch(process.env.REACT_APP_BASE_URL + "/caseStudies",{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
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
                // console.log('json error',json)
                toast.error("Something went wrong.");
                }
                else{
                // console.log('json resp',json)
                if(json){
                        setPosts(json)
                }
                }
            }
            )
            .catch((error) => {
            toast.error(error.response || "Something went wrong.");
            })
        // API CALL ENDED
    }
    const handleDelete = async (id) => {
        // console.log('id',id)
        try {
          await Api.deleteCS(id,{
            data: { username: username },
          }).then((res) => {
            toast.success('Case study deleted.')
            getPosts()
          })
        
        
        // window.location.replace("/admin/blogs");
        } catch (err) {}
    };
    return(
      <><AdminSidebar />
      <div className="container ">
        <div className="row d-flex">
          <div className="col-12" style={{ marginLeft: '' }}>
            <div>
              <nav className='m-5 d-flex' style={{ bsBreadcrumbDivider: ">", marginLeft: "100px" }} aria-label="breadcrumb">
                <ol className="breadcrumb w-75">
                <li className="breadcrumb-item active"><Link to="/admin/dashboard">Admin</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">CaseStudy</li>
                </ol>
                <div className='d-flex justify-content-end align-items-center w-25'>
                  <Link to="/admin/add-case-studies" className='btn btn-primary btn-sm'>Add CaseStudy</Link>
                </div>
              </nav>
            </div>
            <div className="row d-flex">
              {posts ?
                posts.map((post, index) => {
                  return  <CardShow photo={PF + post.photo} title={post.title}  link={'/admin/case-study-edit/' + post._id} dlt={() => { handleDelete(post._id) } } />
                
                }) : <div className="lds-spinner col-lg-4 col-md-4 col-sm-6 col-xs-6"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
            </div>
          </div>
        </div>
      </div></> 
    )
}