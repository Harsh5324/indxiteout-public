import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Api from "../../../API/Api";
import CardShow from "../CardShow/CardShow";
export default function Solutions() {
    const PF = process.env.REACT_APP_IMAGE_URL;
    const [posts, setPosts] = useState(null);
    let username =
        localStorage.getItem("user") && localStorage.getItem("user") != null
            ? JSON.parse(localStorage.getItem("user")).username
            : "";

    useEffect(() => {
        // API CALL START
        getPosts();
        // API CALL ENDED
    }, []);
    const getPosts = () => {
        // API CALL START
        Api.fetchApiCall("/solutions", "GET")
            .then((resp) => {
                let json = resp.json();
                if (resp.status >= 200 && resp.status < 300) {
                    return json;
                } else {
                    return json.then(Promise.reject.bind(Promise));
                }
            })
            .then((json) => {
                if (json.result && json.result.status === "error") {
                    // console.log('json error',json)
                    toast.error("Something went wrong.");
                } else {
                    // console.log('json resp',json)
                    if (json) {
                        setPosts(json);
                    }
                }
            })
            .catch((error) => {
                toast.error(error.response || "Something went wrong.");
            });
        // API CALL ENDED
    };
    const handleDelete = async (id) => {
        // console.log('id',id)
        try {
            await Api.deleteSolutions(id, {
                data: { username: username },
            }).then((res) => {
                toast.success("Solution deleted successfully.");
                getPosts();
            });

            // window.location.replace("/admin/blogs");
        } catch (err) {}
    };
    return (
        <>
            <AdminSidebar />
            <div className="container ">
                <div className="row d-flex">
                    <div
                        className="col-lg-12 col-md-12"
                        style={{ marginLeft: "" }}
                    >
                        <div>
                            <nav
                                className="m-5 d-flex"
                                style={{
                                    bsBreadcrumbDivider: ">",
                                    marginLeft: "100px",
                                }}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb w-75">
                                    <li className="breadcrumb-item active">
                                        <Link to="/admin/dashboard">Admin</Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        solutions
                                    </li>
                                </ol>
                                <div className="d-flex justify-content-end align-items-center w-25">
                                    <Link
                                        to="/admin/add-solutions"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Add solutions
                                    </Link>
                                </div>
                            </nav>
                        </div>
                        <div className="row d-flex">
                            {posts ? (
                                posts.map((post, index) => {
                                    return (
                                        <CardShow
                                            photo={PF + post.photo}
                                            title={post.title}
                                            subtitle={post.subtitle}
                                            link={
                                                "/admin/edit-solutions/" +
                                                post._id
                                            }
                                            dlt={() => {
                                                handleDelete(post._id);
                                            }}
                                        />
                                    );

                                    // <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                    //   <div className="card m-2">
                                    //     <div>
                                    //       <img src={PF + post.photo} className="card-img-top" alt="img" />
                                    //     </div>
                                    //     <div className="card-body">
                                    //       <h5 className='card-title'>{post.title}</h5>
                                    //       <p className=''>{post.subtitle}</p>
                                    //       {/* <p className="card-text">{post.desc}</p> */}
                                    //     </div>
                                    //     <div className='d-flex align-items-center px-3 pb-3'>
                                    //       <Link to={'/admin/edit-solutions/' + post._id} className="btn btn-primary btn-sm m-1">Edit</Link>
                                    //       <button type='button' onClick={() => { handleDelete(post._id); } } className="btn btn-danger btn-sm m-1">Delete</button>
                                    //     </div>
                                    //   </div>
                                    // </div>;
                                })
                            ) : (
                                <div className="lds-spinner col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
