import AdminSidebar from '../../../components/AdminSidebar/AdminSidebar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {toast} from 'react-toastify';
import axios  from 'axios';
import "./blogs.css";
import Api from './../../../API/Api';

export default function Categories(){
    const PF = process.env.REACT_APP_IMAGE_URL;
    const [name, setName] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [selectCat, setSelectCat] = useState ([]);
    const [posts, setPosts] = useState([]);
    let username = localStorage.getItem("user") && localStorage.getItem("user") != null ?  JSON.parse(localStorage.getItem("user")).username : ''
   
    useEffect(() => {
      getCategories();
    },[])
    const getCategories = () => {
      Api.getCategories().then((res) =>{
        res && res.data && setCategories(res.data)
      })
    }
    const handleEdit = (cat) => {
        setIsEditing(true);
        setSelectCat(cat);
        setName(cat.name);
    }

    const handleSubmit = () => {
        if(!isEditing){
            if(!name){
                toast.error("Please enter Category name")
                return;
            }
            let body = {name:name}
            Api.setCategories(body).then((res) => {
                res && toast.success('Category Added.')
                setTimeout(() => {
                    window.location.replace('/admin/categories')
                  }, 2000);
            });
        }else{
            if(!name){
                toast.error("Please enter Category name")
                return;
            }
            let body = {name:name}
            Api.putCategories(body,selectCat._id).then((res) => {
                res && toast.success('Category Updated.')
                setIsEditing(false)
                setSelectCat([]);
                setName("");
                setTimeout(() => {
                    window.location.replace('/admin/categories')
                  }, 2000);
            });
            
        }
        
      };

      const reset = () => {
        setIsEditing(false)
        setSelectCat([]);
        setName("");
      }
    const handleDelete = async (id) => {
        let res = window.confirm("Are you sure you wants to delete ?")
        if(res){
            let body = {
                username : username
              }
              Api.deleteCategories(body,id).then((res) => {
                res && toast.success('Category Deleted.')
                setIsEditing(false)
                setSelectCat([]);
                setName("");
                getCategories();
            });
        }     
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
                    <li className="breadcrumb-item active" aria-current="page">Blogs</li>
                  </ol>
                  <div className='d-flex justify-content-end align-items-center w-25'>
                    <button type='button' className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Category</button>
                  </div>
                  
                </nav>
              </div>
              <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{isEditing ? "Edit" : "Add"} Category</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={reset}></button>
                        </div>
                        <div class="modal-body">
                            <label className='form-label' htmlFor="">Category Name</label>
                            <input className='form-control' type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={reset}>Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row d-flex">
                    <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category Name</th>
                                </tr>
                            </thead>
                            <tbody>{  categories && categories.map((cat, index) => {
                                   return <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{cat.name}</td>
                                    <td className='d-flex justify-content-end'>
                                        <button className='btn btn-primary btn-sm mx-3' onClick={() => {handleEdit(cat)}} data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit</button>
                                        <button className='btn btn-danger btn-sm' onClick={() => {handleDelete(cat._id)}}>Delete</button>
                                        </td>
                                    </tr>
                                    })
                                }
                            </tbody>
                    </table>
                    </div>
                </div>
            </div>
          </div>
        </div></>
    )
}