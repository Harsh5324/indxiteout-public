import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Api from "../../../API/Api";
import CardShow from "../CardShow/CardShow";

export default function Expertise() {
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
        Api.getExpertise().then((res) => {
            res && res.data && setPosts(res.data);
        });
        // API CALL ENDED
    };
    const handleDelete = async (id) => {
        // console.log('id',id)
        try {
            await Api.deleteExpertise(id, { data: { username: username } })
                .then((res) => {
                    // console.log('res',res)
                    toast.success(res || "Post deleted.");
                    // this.toast.success(resp || 'Post deleted.')
                    getPosts();
                })
                .catch((error) => {
                    // console.log(error);
                    toast.error("Something went wrong.");
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
                                        Expertise
                                    </li>
                                </ol>
                                <div className="d-flex justify-content-end align-items-center w-25">
                                    <Link
                                        to="/admin/add-expertise"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Add expertise
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
                                                "/admin/edit-expertise/" +
                                                post._id
                                            }
                                            dlt={() => {
                                                handleDelete(post._id);
                                            }}
                                        />
                                    );
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
