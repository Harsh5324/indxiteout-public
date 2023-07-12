import { useRef } from "react";
import React, { useState } from "react";
import AdminSidebar from "../../../../components/AdminSidebar/AdminSidebar";
import ReactQuill, { Quill, editor } from "react-quill";
// import katex from "katex";
import CustomToolbar from "../../../../components/CustomToolbar/CustomToolbar";
// window.katex = katex;
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Api from "../../../../API/Api";
export default function AddBlog() {
    let username =
        localStorage.getItem("user") && localStorage.getItem("user") != null
            ? JSON.parse(localStorage.getItem("user")).username
            : "";
    const [editorValue, setValue] = useState("");
    const [categories, setCategories] = useState([]);
    const [post, setPost] = useState({});
    const [file, setFile] = useState(null);
    const location = useLocation();
    const isEdit = location.pathname.split("/")[3];
    const path = location.pathname.split("/")[4];
    const [isEditing, setEditing] = useState(false);
    const PF = process.env.REACT_APP_IMAGE_URL;
    const modules = (shortId) => {
        return {
            toolbar: {
                container: "#toolbar_" + shortId,
            },
            imageResize: {
                parchment: Quill.import("parchment"),
                modules: ["Resize", "DisplaySize"],
            },
        };
    };
    const formats = [
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "color",
        "background",
        "script",
        "header",
        "blockquote",
        "code-block",
        "indent",
        "list",
        "direction",
        "align",
        "link",
        "image",
        "video",
        "formula",
    ];
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    const api_token = user && user.token ? user.token : null;
    useEffect(() => {
        if (isEdit && isEdit === "edit") {
            getExpertiseByID();
            setEditing(true);
        }
        // TO GET ALL CATEGORIES.
        axios
            .get(process.env.REACT_APP_BASE_URL + "/categories", {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
            .then((response) => {
                // console.log(response.data);
                setCategories(response.data);
            });
    }, []);
    const getExpertiseByID = async () => {
        const res = await axios.get(
            process.env.REACT_APP_BASE_URL + "/posts/" + path
        );
        // console.log('res',res)
        setPost(res.data);
        setTitle(res.data.title);
        setEditCat(res.data.categories);
        setValue(res.data.desc);
        setFile(res.data.photo);
    };
    const handleChange = (html) => {
        // // console.log('html',html)
        setValue(html);
        // // console.log('editorValue',editorValue)
    };
    const titleRef = useRef();
    const catRef = useRef();
    const descRef = useRef();
    const imgRef = useRef();
    const [title, setTitle] = useState("");
    const [editCat, setEditCat] = useState();

    const handleSubmit = async (e) => {
        if (!title) {
            toast.error("Title is required.");
            return;
        } else if (!editCat) {
            toast.error("Please select category.");
            return;
        } else if (!editorValue) {
            toast.error("Enter Description.");
            return;
        } else if (!file) {
            toast.error("Please select Image");
            return;
        }
        if (isEditing) {
            saveEdit(e);
            return;
        }

        // console.log('API calling....');
        let body = {
            title: title,
            categories: editCat,
            desc: editorValue,
            username: username,
        };
        console.log("🚀 ~ file: AddBlog.jsx:113 ~ handleSubmit ~ body:", body);
        // console.log(body)
        if (file) {
            const data = new FormData();
            const filename = file.name;
            data.append("name", filename);
            data.append("file", file);
            // body.photo = filename;
            try {
                const resp = await axios.post(
                    process.env.REACT_APP_BASE_URL + "/upload",
                    data
                );
                body.photo = resp.data.filename;
            } catch (err) {}
        }
        // API CALL START
        Api.fetchApiCall("/posts", "POST", body)
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
                        toast.success("Blog added successfully.");
                        setTimeout(() => {
                            // window.location.replace("/admin/blogs");
                        }, 2000);
                    }
                }
            })
            .catch((error) => {
                toast.error(error.response || "Something went wrong.");
            });
        // API CALL ENDED
    };
    const saveEdit = async (e) => {
        let body = {
            title: title,
            categories: editCat,
            desc: editorValue,
            username: username,
            photo: post.photo,
        };
        console.log("🚀 ~ file: AddBlog.jsx:182 ~ saveEdit ~ body:", body);
        // console.log(body)
        if (file && file !== post.photo) {
            const data = new FormData();
            const filename = file.name;
            data.append("name", filename);
            data.append("file", file);
            body.photo = filename;
            try {
                const resp = await axios.post(
                    process.env.REACT_APP_BASE_URL + "/upload",
                    data
                );
                body.photo = resp.data.filename;
            } catch (err) {}
        } else {
            body.photo = post.photo;
        }
        if (body && body.photo) {
            Api.fetchApiCall("/posts/" + path, "PUT", body)
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
                            toast.success("Blog Updated successfully.");
                            setTimeout(() => {
                                window.location.replace("/admin/blogs");
                            }, 2000);
                        }
                    }
                })
                .catch((error) => {
                    toast.error(error.response || "Something went wrong.");
                });
        }
    };
    return (
        <>
            <AdminSidebar />
            <div className="container-fluid row">
                <div className="  mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12 p-3">
                    <div className="mt-5 d-flex justify-content-center align-items-center ">
                        <form>
                            <div className="row ">
                                <div className="col ">
                                    <h1 className="mt-2 p-3">
                                        {isEditing ? "Edit" : "Add"} Blogs
                                    </h1>
                                    <div className="row ">
                                        <label className="floatingLabel m-2 p-2">
                                            Title
                                        </label>
                                        <input
                                            className="form-control"
                                            value={title}
                                            onChange={(e) => {
                                                setTitle(e.target.value);
                                            }}
                                            required
                                            type="text"
                                            name=""
                                            id=""
                                        />
                                    </div>

                                    <div className="row ">
                                        <label className="floatingLabel m-2 p-2">
                                            Categories
                                        </label>
                                        <select
                                            value={editCat}
                                            onChange={(e) => {
                                                setEditCat(e.target.value);
                                            }}
                                            className="form-select"
                                            aria-label="Default select example"
                                            required
                                        >
                                            <option value="" selected>
                                                Uncategoriezed
                                            </option>
                                            {categories && categories.length > 0
                                                ? categories.map(
                                                      (item, index) => {
                                                          return (
                                                              <option
                                                                  key={index}
                                                                  value={
                                                                      item.name
                                                                  }
                                                              >
                                                                  {item.name}
                                                              </option>
                                                          );
                                                      }
                                                  )
                                                : '<option value="" selected>No Data</option>'}
                                        </select>
                                    </div>
                                    <div className="row ">
                                        <label className="floatingLabel m-2 p-2">
                                            --Choose Image--
                                        </label>
                                        <input
                                            className="form-control"
                                            ref={imgRef}
                                            required
                                            type="file"
                                            name=""
                                            id=""
                                            onChange={(e) =>
                                                setFile(e.target.files[0])
                                            }
                                        />
                                        {isEditing ? (
                                            <div className="col-6">
                                                <img
                                                    src={PF + post.photo}
                                                    className="img-fluid "
                                                />
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="row">
                                        <label className="floatingLabel m-2 p-2">
                                            Description
                                        </label>
                                        {/* <textarea className='form-control' ref={descRef} required placeholder="add description"></textarea> */}
                                        <CustomToolbar id="1" />
                                        <ReactQuill
                                            style={{
                                                maxWidth: "100%",
                                                maxHeight: "600px",
                                                padding: "0px",
                                            }}
                                            theme="snow"
                                            value={editorValue}
                                            onChange={handleChange}
                                            modules={modules(1)}
                                            formats={formats}
                                        />
                                    </div>
                                    <div className="row my-5 pt-3">
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            className="btn btn-primary w-auto"
                                        >
                                            {" "}
                                            {isEditing
                                                ? "Save"
                                                : "Add"} Blog{" "}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <div dangerouslySetInnerHTML={{__html: editorValue}}></div> */}
        </>
    );
}
