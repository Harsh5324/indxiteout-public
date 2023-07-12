import { useEffect, useRef } from "react";
import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Api from "../../../API/Api";

export default function AddExpertise() {
    const titleRef = useRef();
    const descRef = useRef();
    const imgRef = useRef();
    const location = useLocation();
    const isEdit = location.pathname.split("/")[2];
    const path = location.pathname.split("/")[3];
    const subtitleRef = useRef();
    const PF = process.env.REACT_APP_IMAGE_URL;
    const [post, setPost] = useState({});
    const offeringTitleRef = useRef();
    const offeringDescRef = useRef();
    const [file, setFile] = useState(null);
    const [isEditing, setEditing] = useState(false);
    const [offerings, setOfferings] = useState([{ title: "", subtitle: "" }]);
    let username =
        localStorage.getItem("user") && localStorage.getItem("user") != null
            ? JSON.parse(localStorage.getItem("user")).username
            : "";

    // FIELDS
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [desc, setDesc] = useState("");
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    const api_token = user && user.token ? user.token : null;
    useEffect(() => {
        if (isEdit && isEdit === "edit-expertise") {
            getExpertiseByID();
            setEditing(true);
        }
    }, [path]);
    const getExpertiseByID = async () => {
        const res = await axios.get(
            process.env.REACT_APP_BASE_URL + "/expertise/" + path
        );
        setPost(res.data);
        setTitle(res.data.title);
        setSubtitle(res.data.subtitle);
        setDesc(res.data.desc);
        setFile(res.data.photo);
        setOfferings(res.data.offerings);
    };
    const handleTitleChange = (e, index) => {
        const values = [...offerings];
        values[index].title = e.target.value;
        setOfferings(values);
    };
    const handleSubTitleChange = (e, index) => {
        const values = [...offerings];
        values[index].subtitle = e.target.value;
        setOfferings(values);
    };

    const handleAddField = (e) => {
        e.preventDefault();
        const values = [...offerings];
        values.push({
            title: "",
            subtitle: "",
        });
        setOfferings(values);
        // setToggle(false);
    };

    const handledelField = (e) => {
        e.preventDefault();
        const values = [...offerings];
        values.pop({
            title: "",
            subtitle: "",
        });
        setOfferings(values);
        // setToggle(false);
    };

    const handleSubmit = async (e) => {
        const Description = desc;
        const image = file;
        if (!title) {
            toast.error("Title is required.");
            return;
        } else if (!subtitle) {
            toast.error("Subtitle is required.");
            return;
        } else if (!Description) {
            toast.error("Enter Description.");
            return;
        } else if (!image) {
            toast.error("Please select Image");
            return;
        }
        if (isEditing) {
            saveEditing(e);
            return;
        }

        let body = {
            title: title,
            subtitle: subtitle,
            desc: Description,
            username: username,
            offerings: offerings,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
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
        }
        if (!isEditing && body && body.photo) {
            // API CALL START
            Api.fetchApiCall("/expertise/", "POST", body)
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
                        toast.error("Something went wrong.");
                    } else {
                        if (json) {
                            toast.success("Expertise added successfully.");
                            setTimeout(() => {
                                window.location.replace("/admin/expertise");
                            }, 2000);
                        }
                    }
                })
                .catch((error) => {
                    toast.error(error.response || "Something went wrong.");
                });
            // API CALL ENDED
        }
    };
    const saveEditing = async (e) => {
        let body = {
            title: title,
            subtitle: subtitle,
            desc: desc,
            username: username,
            offerings: offerings,
        };

        if (file && file !== post.photo) {
            const data = new FormData();
            const filename = Date.now() + file.name;
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
        } else {
            body.photo = post.photo;
        }
        if (body && body.photo) {
            // API CALL START
            Api.fetchApiCall("/expertise/" + post._id, "PUT", body)
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
                        toast.error("Something went wrong.");
                    } else {
                        if (json) {
                            toast.success("Expertise Updated successfully.");
                            setTimeout(() => {
                                window.location.replace("/admin/expertise");
                            }, 2000);
                        }
                    }
                })
                .catch((error) => {
                    toast.error(error.response || "Something went wrong.");
                });
            // API CALL ENDED
        }
    };
    return (
        <>
            <AdminSidebar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3">
                        <div className="">
                            <form>
                                <div className="row mx-auto d-flex justify-content-center">
                                    <div className="">
                                        <h1 className="mt-2 p-3">
                                            {isEditing ? "Edit" : "Add"}{" "}
                                            Expertise
                                        </h1>
                                        <div className="mb-2">
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
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label className="floatingLabel">
                                                Sub Title
                                            </label>
                                            <input
                                                className="form-control"
                                                value={subtitle}
                                                onChange={(e) => {
                                                    setSubtitle(e.target.value);
                                                }}
                                                required
                                                type="text"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label className="floatingLabel">
                                                Description
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                value={desc}
                                                onChange={(e) => {
                                                    setDesc(e.target.value);
                                                }}
                                                required
                                                placeholder="add description"
                                            ></textarea>
                                        </div>
                                        <div className="mb-2 ">
                                            <label className="floatingLabel">
                                                --Choose Image--
                                            </label>
                                            <input
                                                className="form-control"
                                                onChange={(e) =>
                                                    setFile(e.target.files[0])
                                                }
                                                ref={imgRef}
                                                required
                                                type="file"
                                                name=""
                                                id=""
                                            />
                                            <img
                                                src={PF + post.photo}
                                                className="img-fluid"
                                                width="250"
                                            />
                                        </div>
                                        <hr />
                                        <h4>Offering</h4>
                                        {offerings.map((offering, i) => {
                                            return (
                                                <div className="border p-2 mb-2">
                                                    <div className="mb-2">
                                                        <label className="floatingLabel">
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
                                                                offering.title
                                                            }
                                                            required
                                                            type="text"
                                                            name=""
                                                            id=""
                                                        />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label className="floatingLabel">
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
                                                                offering.subtitle
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
                                                className="btn btn-sm btn-secondary mt-4 float-right mx-2"
                                                onClick={handledelField}
                                            >
                                                <i className="fa fa-minus text-white"></i>
                                            </button>

                                            <button
                                                className="btn btn-sm btn-secondary mt-4 float-right"
                                                onClick={handleAddField}
                                            >
                                                <i className="fa fa-plus text-white"></i>
                                            </button>
                                        </div>
                                        <div className="row mx-2">
                                            <button
                                                type="button"
                                                onClick={handleSubmit}
                                                className="btn btn-primary mt-2 w-auto px-5"
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
