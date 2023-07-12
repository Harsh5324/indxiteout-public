import { useEffect } from "react";
import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ReactQuill, { Quill, editor } from "react-quill";
import CustomToolbar from "../../../components/CustomToolbar/CustomToolbar";
import { useLocation } from "react-router";
import Api from "../../../API/Api";
// specify the fonts you would
var fontslist = [
    "initial",
    "sans-serif",
    "serif",
    "monospace",
    "Arial",
    "Courier",
    "Garamond",
    "Tahoma",
    "Times New Roman",
    "Verdana",
];
let fonts = Quill.import("attributors/style/font");
fonts.whitelist = fontslist;
Quill.register(fonts, true);
export default function AddCaseStudies() {
    let username =
        localStorage.getItem("user") && localStorage.getItem("user") != null
            ? JSON.parse(localStorage.getItem("user")).username
            : "";
    const location = useLocation();
    const isEdit = location.pathname.split("/")[2];
    const path = location.pathname.split("/")[3];
    const [expertise, setExpPosts] = useState([]);
    const [isEditing, setEditing] = useState(false);
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    const api_token = user && user.token ? user.token : null;
    useEffect(() => {
        getExpertise();
        if (isEdit && isEdit === "case-study-edit") {
            getDataByID();
            setEditing(true);
        }
    }, []);

    // FIELDS
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [expertiseSelection, setExpSelection] = useState([]);
    const [subtitle, setSubtitle] = useState("THE PROBLEM");
    const [desc, setDesc] = useState("");
    const [result, setResult] = useState("");
    const [file, setFile] = useState(undefined);
    const [approach, setApproach] = useState([{ title: "", subtitle: "" }]);
    const [editCat, setEditCat] = useState();
    const [categories, setCategories] = useState([]);
    const [exp, setExp] = useState([]);
    const [expSe, setExpSe] = useState([]);
    const [isHomePage, setIsHomePage] = useState("false");

    const PF = process.env.REACT_APP_IMAGE_URL;

    const getDataByID = async () => {
        const res = await axios.get(
            process.env.REACT_APP_BASE_URL + "/caseStudies/" + path
        );
        console.clear();
        console.log(
            "🚀 ~ file: AddCaseStudies.jsx:67 ~ getDataByID ~ res:",
            res.data
        );
        // console.log('res',res)
        setPost(res.data);
        setTitle(res.data.title);
        setSubtitle(res.data.subtitle);
        setDesc(res.data.desc);
        setResult(res.data.result);
        setFile(res.data.photo);
        setExpSelection(res.data.solution);
        setExpSe(res.data.expertises);
        setApproach(res.data.approach);
        setIsHomePage(res.data.isHomePage);
        // console.clear();
        console.log(
            "🚀 ~ file: AddCaseStudies.jsx:85 ~ getDataByID ~ res.data.approach:",
            res.data.approach[0]
        );
    };
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
    const saveEditing = async () => {
        let body = {
            title: title,
            subtitle: subtitle,
            desc: desc,
            solution: expertiseSelection,
            username: username,
            approach: approach,
            result: result,
            expertises: expSe,
            isHomePage,
        };
        console.log(
            "🚀 ~ file: AddCaseStudies.jsx:119 ~ saveEditing ~ body:",
            body
        );

        if (file && file !== post.photo) {
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
        } else {
            body.photo = post.photo;
        }

        if (body && body.photo) {
            // API CALL START
            Api.fetchApiCall("/caseStudies/" + path, "PUT", body)
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
                            toast.success("Case Study Updated successfully.");
                            setTimeout(() => {
                                window.location.replace("/admin/case-study");
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
    const handleSubmit = async () => {
        if (!title) {
            toast.error("Title is required.");
            return;
        }
        if (!subtitle) {
            toast.error("Subtitle is required.");
            return;
        }
        if (!expertiseSelection) {
            toast.error("Please select expertise.");
            return;
        }
        if (!desc) {
            toast.error("Description is required.");
            return;
        }
        if (!file) {
            toast.error("Please upload Banner image.");
            return;
        }
        if (!result) {
            toast.error("Please enter results.");
            return;
        }
        if (isEditing) {
            saveEditing();
            return;
        }
        // console.log('API calling....');
        let body = {
            title: title,
            subtitle: subtitle,
            desc: desc,
            solution: expertiseSelection,
            username: username,
            approach: approach,
            result: result,
            expertises: expSe,
            isHomePage,
        };
        // console.log(body)
        if (file) {
            const data = new FormData();
            const filename = file.name;
            data.append("name", filename);
            data.append("file", file);
            //  body.photo = filename;
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
        // console.log('--->>',body & body.photo)

        if (body && body.photo) {
            // API CALL START
            // console.log('calling......')
            Api.fetchApiCall("/caseStudies", "POST", body)
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
                            toast.success("Case Study added successfully.");
                            setTimeout(() => {
                                window.location.replace("/admin/case-study");
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
    const handleTitleChange = (e, index) => {
        const values = [...approach];
        values[index].title = e.target.value;
        setApproach(values);
    };
    const handleSubTitleChange = (html, index) => {
        const values = [...approach];
        values[index].subtitle = html;
        setApproach(values);
    };

    const handleAddField = (e) => {
        e.preventDefault();
        const values = [...approach];
        values.push({
            title: "",
            subtitle: "",
        });
        setApproach(values);
        // setToggle(false);
    };
    const handlermField = (e) => {
        e.preventDefault();
        const values = [...approach];
        values.pop({
            title: "",
            subtitle: "",
        });
        setApproach(values);
        // setToggle(false);
    };

    const getExpertise = () => {
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
                } else {
                    // console.log('json setExpPosts',json)
                    if (json) {
                        setExpPosts(json);
                    }
                }
            });

        Api.fetchApiCall("/expertise", "GET")
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
                } else {
                    // console.log('json setExpPosts',json)
                    if (json) {
                        setExp(json);
                    }
                }
            });

        // API CALL ENDED
    };

    // useEffect(() => {
    //     // API CALL START
    //     // getPosts()
    //     // API CALL ENDED
    //     const fetchPosts = async () => {
    //         const res = await axios.get(
    //             process.env.REACT_APP_BASE_URL + "/solutions"
    //         );
    //         setCategories(res.data);
    //         console.clear();
    //         console.log(
    //             "🚀 ~ file: AddCaseStudies.jsx:323 ~ fetchPosts ~ res.data:",
    //             res.data
    //         );
    //     };
    //     fetchPosts();
    // }, []);

    return (
        <>
            <AdminSidebar />
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3">
                        <div className="w-100 mt-5 d-flex justify-content-center align-items-center ">
                            <form className="">
                                <div className=" ">
                                    <div className="">
                                        <h1 className="">
                                            {isEditing ? "Edit" : "Add"} Case
                                            Study
                                        </h1>
                                        <div className=" ">
                                            <label className="floatingLabel mt-2">
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

                                        <div className=" ">
                                            <label className="floatingLabel mt-2">
                                                For Home Page
                                            </label>
                                            <select
                                                className="form-control"
                                                onChange={(e) => {
                                                    setIsHomePage(
                                                        e.target.value
                                                    );
                                                }}
                                                value={isHomePage}
                                            >
                                                <option value="" selected>
                                                    Select option
                                                </option>
                                                <option value="true">
                                                    Yes
                                                </option>
                                                <option value="false">
                                                    No
                                                </option>
                                            </select>
                                        </div>

                                        <div className=" ">
                                            <label className="floatingLabel mt-2">
                                                Expertise
                                            </label>
                                            <select
                                                className="form-control"
                                                onChange={(e) => {
                                                    setExpSe(e.target.value);
                                                }}
                                                value={expSe}
                                            >
                                                <option value="" selected>
                                                    Select option
                                                </option>
                                                {exp && exp.length > 0 ? (
                                                    exp.map((item, index) => {
                                                        return (
                                                            <option
                                                                key={index}
                                                                value={
                                                                    item.title
                                                                }
                                                            >
                                                                {item.title}
                                                            </option>
                                                        );
                                                    })
                                                ) : (
                                                    <option value="">
                                                        No Data
                                                    </option>
                                                )}
                                            </select>
                                        </div>

                                        <div className=" ">
                                            <label className="floatingLabel mt-2">
                                                Solution
                                            </label>
                                            <select
                                                className="form-control"
                                                onChange={(e) => {
                                                    setExpSelection(
                                                        e.target.value
                                                    );
                                                }}
                                                value={expertiseSelection}
                                            >
                                                <option value="" selected>
                                                    Select option
                                                </option>
                                                {expertise &&
                                                expertise.length > 0 ? (
                                                    expertise.map(
                                                        (item, index) => {
                                                            return (
                                                                <option
                                                                    key={index}
                                                                    value={
                                                                        item.title
                                                                    }
                                                                >
                                                                    {item.title}
                                                                </option>
                                                            );
                                                        }
                                                    )
                                                ) : (
                                                    <option value="">
                                                        No Data
                                                    </option>
                                                )}
                                            </select>
                                        </div>
                                        <div className=" ">
                                            <label className="floatingLabel mt-2">
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
                                        <div className=" ">
                                            <label className="floatingLabel mt-2">
                                                Description
                                            </label>
                                            <CustomToolbar id="1" />
                                            <ReactQuill
                                                style={{
                                                    maxWidth: "100%",
                                                    maxHeight: "600px",
                                                    padding: "0px",
                                                }}
                                                theme="snow"
                                                value={desc}
                                                onChange={(html) => {
                                                    setDesc(html);
                                                }}
                                                modules={modules(1)}
                                                formats={formats}
                                            />
                                            {/* <textarea className='form-control' value={desc}   required type="text" name="" id="" ></textarea> */}
                                        </div>
                                        <div className=" ">
                                            <label className="floatingLabel mt-2">
                                                Results
                                            </label>
                                            <CustomToolbar id="2" />
                                            <ReactQuill
                                                style={{
                                                    maxWidth: "100%",
                                                    maxHeight: "600px",
                                                    padding: "0px",
                                                }}
                                                theme="snow"
                                                value={result}
                                                onChange={(html) => {
                                                    setResult(html);
                                                }}
                                                modules={modules(2)}
                                                formats={formats}
                                            />
                                            {/* <textarea className='form-control' value={result} onChange={(e) => {setResult(e.target.value)}}  required type="text" name="" id="" ></textarea> */}
                                        </div>
                                        <div className=" ">
                                            <label className="floatingLabel mt-2">
                                                --Choose Image--
                                            </label>
                                            <input
                                                className="form-control"
                                                onChange={(e) =>
                                                    setFile(e.target.files[0])
                                                }
                                                required
                                                type="file"
                                                name=""
                                                id=""
                                            />
                                            {isEditing ? (
                                                <img
                                                    src={PF + post.photo}
                                                    className="img-fluid"
                                                    width="250"
                                                />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <hr />
                                        <h4>
                                            {isEditing ? "Edit" : "Add"}{" "}
                                            APPROACH
                                        </h4>
                                        {approach.map((item, i) => {
                                            console.log(i, item);
                                            return (
                                                <div
                                                    key={i}
                                                    className="card p-2 shadow-sm"
                                                >
                                                    <div className="">
                                                        <label className="floatingLabel mt-2">
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
                                                            value={item.title}
                                                            required
                                                            type="text"
                                                            name=""
                                                            id=""
                                                        />
                                                    </div>
                                                    <div className=" ">
                                                        <label className="floatingLabel mt-2">
                                                            Description
                                                        </label>
                                                        <CustomToolbar
                                                            id={i + 10}
                                                        />
                                                        <ReactQuill
                                                            style={{
                                                                maxWidth:
                                                                    "100%",
                                                                maxHeight:
                                                                    "600px",
                                                                padding: "0px",
                                                            }}
                                                            theme="snow"
                                                            value={
                                                                item.subtitle
                                                            }
                                                            onChange={(
                                                                html
                                                            ) => {
                                                                handleSubTitleChange(
                                                                    html,
                                                                    i
                                                                );
                                                            }}
                                                            modules={modules(
                                                                i + 10
                                                            )}
                                                            formats={formats}
                                                        />

                                                        {/* <input className='form-control' onChange={(e) => (handleSubTitleChange(e,i))}  value={item.subtitle}  required type="text" name="" id="" /> */}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        <div className="w-100 d-flex justify-content-end">
                                            <button
                                                className="btn mx-2 btn-sm btn-secondary mt-4 float-right"
                                                onClick={handlermField}
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
                                        <div className="my-5 ">
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
