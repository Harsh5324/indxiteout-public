
import AdminSidebar from '../../../components/AdminSidebar/AdminSidebar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {toast} from 'react-toastify';
import axios  from 'axios';
import "./blogs.css";
import Api from './../../../API/Api';
import CardShow from '../CardShow/CardShow';
export default function Blogs(props){
  const PF = process.env.REACT_APP_IMAGE_URL;
    const [posts, setPosts] = useState([]);
    let username = localStorage.getItem("user") && localStorage.getItem("user") != null ?  JSON.parse(localStorage.getItem("user")).username : ''
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    const api_token = user && user.token ? user.token : null;
    useEffect(() => {
      getPosts();
    },[])
    const getPosts = () => {
      Api.getPosts().then((res) =>{
        res && res.data && setPosts(res.data)
      })
    }

    

    const handleDelete = async (id) => {
      try {
        Api.deletePost(id,{data: { username: username }}).then((res) => {
          toast.success(res || 'Post deleted.');
          getPosts()
        }).catch((error) => {
          toast.error('Something went wrong.')
        })
      } catch (err) {}
    };
      return (
        <><AdminSidebar />
        <div className="container ">
          <div className="row d-flex">
            <div className="col-12" style={{ marginLeft: '' }}>
              <div>
                <nav className='m-5 d-flex' style={{ bsBreadcrumbDivider: ">", marginLeft: "100px" }} aria-label="breadcrumb">
                  <ol className="breadcrumb w-75">
                  <li className="breadcrumb-item active"><Link to="/admin/dashboard">Admin</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Blogs</li>
                  </ol>
                  <div className='d-flex justify-content-end align-items-center w-25'>
                    <Link to="/admin/categories" className='btn btn-primary btn-sm mx-3'>Categories</Link>
                    <Link to="/admin/add-blog" className='btn btn-primary btn-sm'>Add Blog</Link>
                  </div>
                </nav>
              </div>
              <div className="row d-flex">
                {posts ?
                  posts.map((post, index) => {
                    return  <CardShow photo={PF + post.photo} title={post.title}  link={"/admin/blog/edit/" + post._id} dlt={() => { handleDelete(post._id); }} />
                  })
                  : ''}
              </div>

            </div>
          </div>
        </div></>
      );
    }
 