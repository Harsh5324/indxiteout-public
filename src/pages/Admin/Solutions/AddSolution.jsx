import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Api from "../../../API/Api";
export default function AddSolution() {
    const location = useLocation();
    const PF = process.env.REACT_APP_IMAGE_URL;
    const isEdit = location.pathname.split("/")[2];
    const path = location.pathname.split("/")[3];
    const [post, setPost] = useState("");
    const [icon, setIcon] = useState(null);
    const [title, setTitle] = useState("");
    const [isEditing, setEditing] = useState(false);
    const [subTitle, setSubTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [use_cases, setUse_cases] = useState([{ title: "", subtitle: "" }]);
    useEffect(() => {
        // console.log('location here---',location.pathname.split("/"))
        if (isEdit && isEdit === "edit-solutions") {
            setEditing(true);
            getSolutionData();
        }
    }, [path]);
    const getSolutionData = async () => {
        // console.log('api calling')
        const res = await axios.get(
            process.env.REACT_APP_BASE_URL + "/solutions/" + path
        );
        setPost(res.data);
        setTitle(res.data.title);
        setSubTitle(res.data.subtitle);
        setDesc(res.data.desc);
        setIcon(res.data.icon);
        setFile(res.data.photo);
        setUse_cases(res.data.use_cases);
    };
    const handleTitleChange = (e, index) => {
        const values = [...use_cases];
        values[index].title = e.target.value;
        setUse_cases(values);
    };
    const handleSubTitleChange = (e, index) => {
        const values = [...use_cases];
        values[index].subtitle = e.target.value;
        setUse_cases(values);
    };

    const handleAddField = (e) => {
        e.preventDefault();
        const values = [...use_cases];
        values.push({
            title: "",
            subtitle: "",
        });
        setUse_cases(values);
        // setToggle(false);
    };

    const handleDeleteField = (e) => {
        e.preventDefault();
        const values = [...use_cases];
        values.pop({
            title: "",
            subtitle: "",
        });
        setUse_cases(values);
        // setToggle(false);
    };

    const handleSubmit = async (e) => {
        // console.log('use_cases',use_cases)
        if (!title) {
            toast.error("Title is required.");
            return;
        } else if (!subTitle) {
            toast.error("Subtitle is required.");
            return;
        } else if (!Desc) {
            toast.error("Enter Description.");
            return;
        } else if (!icon) {
            toast.error("Enter icon.");
            return;
        } else if (!file) {
            toast.error("Please select Image");
            return;
        }
        if (isEditing) {
            handleUpdate(e);
            return;
        }

        let username =
            localStorage.getItem("user") && localStorage.getItem("user") != null
                ? JSON.parse(localStorage.getItem("user")).username
                : "";
        let body = {
            title: title,
            subtitle: subTitle,
            desc: Desc,
            icon: icon,
            username: username,
            use_cases: use_cases,
        };
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
        if (icon) {
            const data = new FormData();
            const iconname = icon.name;
            data.append("name", iconname);
            data.append("file", icon);
            // body.photo = filename;
            try {
                const resp = await axios.post(
                    process.env.REACT_APP_BASE_URL + "/upload",
                    data
                );
                body.icon = resp.data.filename;
            } catch (err) {}
        }
        //API START
        if (body && body.photo && body.icon) {
            await Api.addSolution(body).then((res) => {
                toast.success("response was added successfully");
                setTimeout(() => {
                    window.location.replace("/admin/solutions");
                }, 2000);
            });
        }
        // API CALL ENDED
    };
    const handleUpdate = async (e) => {
        let username =
            localStorage.getItem("user") && localStorage.getItem("user") != null
                ? JSON.parse(localStorage.getItem("user")).username
                : "";
        let body = {
            title: title,
            subtitle: subTitle,
            desc: Desc,
            icon: icon,
            username: username,
            use_cases: use_cases,
        };
        if (file && post.photo !== file) {
            const data = new FormData();
            const filename = file.name;
            data.append("name", filename);
            data.append("file", file);
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
        if (icon && post.icon !== icon) {
            const data = new FormData();
            const iconname = icon.name;
            data.append("name", iconname);
            data.append("file", icon);
            try {
                const resp = await axios.post(
                    process.env.REACT_APP_BASE_URL + "/upload",
                    data
                );
                body.icon = resp.data.filename;
            } catch (err) {}
        } else {
            body.icon = post.icon;
        }
        //API START
        if (body && body.photo && body.icon) {
            await Api.updateSolution(path, body).then(
                (res) => {
                    toast.success("response was added successfully");
                    setTimeout(() => {
                        window.location.replace("/admin/solutions");
                    }, 2000);
                },
                (error) => {
                    toast.error("something went wrong");
                }
            );
        }
    };
    return (
        <>
            <AdminSidebar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3">
                        <div className="w-100 d-flex justify-content-center align-items-center ">
                            <form className="w-100">
                                <div className="row ">
                                    <div className="col ">
                                        <h1 className="mt-2 p-3">
                                            {isEditing ? "Edit" : "Add"}{" "}
                                            Solution
                                        </h1>
                                        <div className=" mb-2">
                                            <label className="floatingLabel">
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
                                            />
                                        </div>
                                        <div className=" mb-2">
                                            <label className="floatingLabel">
                                                Sub Title
                                            </label>
                                            <input
                                                className="form-control"
                                                value={subTitle}
                                                onChange={(e) => {
                                                    setSubTitle(e.target.value);
                                                }}
                                                required
                                                type="text"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className=" mb-2">
                                            <label className="floatingLabel">
                                                Description
                                            </label>
                                            <textarea
                                                className="form-control"
                                                value={Desc}
                                                onChange={(e) => {
                                                    setDesc(e.target.value);
                                                }}
                                                required
                                                placeholder="add description"
                                            ></textarea>
                                        </div>
                                        <div className=" mb-2">
                                            <label className="floatingLabel">
                                                --Set Icon--
                                            </label>
                                            {/* <img src="" alt="" onChange={(e)=>{ setIcon(e.target.files[0]) }} value={icon} required type="file" /> */}
                                            <input
                                                type="file"
                                                className="form-control"
                                                onChange={(e) => {
                                                    setIcon(e.target.files[0]);
                                                }}
                                                required
                                            ></input>
                                            {isEditing && post.icon ? (
                                                <img
                                                    src={PF + post.icon}
                                                    className="img-fluid"
                                                    width={250}
                                                />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div className=" mb-2">
                                            <label className="floatingLabel">
                                                --Choose Image--
                                            </label>
                                            <input
                                                className="form-control"
                                                onChange={(e) => {
                                                    setFile(e.target.files[0]);
                                                }}
                                                required
                                                type="file"
                                                name=""
                                                id=""
                                            />
                                            {isEditing && post.photo ? (
                                                <img
                                                    src={PF + post.photo}
                                                    className="img-fluid"
                                                    width={250}
                                                />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <hr />
                                        <h4>Use Cases </h4>
                                        {use_cases.map((use_cases, i) => {
                                            return (
                                                <div className="card mb-2 p-2">
                                                    <div className=" ">
                                                        <label className="floatingLabel m-2">
                                                            Title
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            onChange={(e) =>
                                                                handleTitleChange(
                                                                    e,
                                                                    i
                                                                )
                                                            }
                                                            value={
                                                                use_cases.title
                                                            }
                                                            required
                                                            type="text"
                                                            name=""
                                                            id=""
                                                        />
                                                    </div>
                                                    <div className=" ">
                                                        <label className="floatingLabel m-2">
                                                            Description
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            onChange={(e) =>
                                                                handleSubTitleChange(
                                                                    e,
                                                                    i
                                                                )
                                                            }
                                                            value={
                                                                use_cases.subtitle
                                                            }
                                                            name=""
                                                            id=""
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        <div className="w-100 d-flex justify-content-end">
                                            <button
                                                className="btn btn-sm btn-secondary m-2 mt-4 float-right"
                                                onClick={handleDeleteField}
                                            >
                                                <i className="fa fa-minus text-white"></i>
                                            </button>
                                            <button
                                                className="btn btn-sm btn-secondary m-2 mt-4 float-right"
                                                onClick={handleAddField}
                                            >
                                                <i className="fa fa-plus text-white"></i>
                                            </button>
                                        </div>
                                        <div className=" mt-3 mb-5">
                                            <button
                                                type="button"
                                                onClick={handleSubmit}
                                                className="btn btn-primary px-5"
                                            >
                                                {" "}
                                                {isEditing
                                                    ? "Save"
                                                    : "Add"}{" "}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
