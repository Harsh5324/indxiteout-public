import { useLocation } from "react-router";
import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Moment from "moment";
import Api from "../../API/Api";

export default function BlogSingle() {
    const location = useLocation();
    const searchText = useRef();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = process.env.REACT_APP_IMAGE_URL;
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCat, setSelCat] = useState("All");
    const history = useHistory();
    useEffect(() => {
        const getPost = async () => {
            Api.getSingleBlog(path).then((res) => {
                res && res.data && setPost(res.data);
                setTitle(res.data.title);
                setDesc(res.data.desc);
            });
        };
        getPost();
        getCategories();
    }, [path]);
    const getCategories = () => {
        // API CALL START
        Api.getCategories().then((res) => {
            res && res.data && setCategories(res.data);
        });
        // API CALL ENDED
    };
    const setPostsByCategories = (cat) => {
        history.push("/blog?category=" + cat.name);
    };
    const setPostsBySearch = (cat) => {
        history.push("/blog?search=" + searchText.current.value);
    };
    return (
        <div id="main">
            <div className="page_title">
                <div className="container">
                    <div className="breadcrumbs">
                        {/* Breadcrumb NavXT 7.1.0 */}
                        <span typeof="v:Breadcrumb">
                            <Link
                                title="Go to Inxite Out Pvt. Ltd.."
                                to="/"
                                className="home"
                            >
                                Home
                            </Link>
                        </span>
                        <span>
                            <i className="fa fa-angle-right" />
                        </span>
                        <span property="itemListElement" typeof="ListItem">
                            <span property="name">
                                <Link to="/blog">Blogs</Link>
                            </span>
                            <meta property="position" content={2} />
                        </span>
                    </div>
                    <h1 className="h2">{title}</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="col_in __padd-right">
                            <div className="posts_list with_sidebar">
                                <ul className="post_list_ul">
                                    <li
                                        id="post-12897"
                                        className="stm_post_info post-12897 product type-product status-publish has-post-thumbnail hentry product_category-amazingaiatixo"
                                    >
                                        <div className="stm_post_details clearfix">
                                            <ul className="clearfix">
                                                <li className="post_date">
                                                    <i className="fa fa fa-clock-o" />
                                                    {Moment(
                                                        post.createdAt
                                                    ).format(
                                                        "YYYY/MM/DD h:mm a"
                                                    )}
                                                </li>
                                                <li className="post_by">
                                                    Posted by:{" "}
                                                    <span>{post.username}</span>
                                                </li>
                                                <li className="post_cat">
                                                    Categories:{" "}
                                                    {post.categories}
                                                    <span />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="post_thumbnail">
                                            <img
                                                width={515}
                                                height={330}
                                                alt=""
                                                decoding="async"
                                                className="attachment-consulting-image-1110x550-croped size-consulting-image-1110x550-croped wp-post-image "
                                                src={PF + post.photo}
                                            />
                                        </div>
                                        <div
                                            className="post_excerpt"
                                            dangerouslySetInnerHTML={{
                                                __html: post.desc,
                                            }}
                                        ></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12 mt-5">
                        <div className="input-group mb-0 w-100">
                            <div className="mb-1 d-flex w-100">
                                <input
                                    type="text"
                                    ref={searchText}
                                    className="form-control border"
                                    placeholder="Enter Text to search"
                                />
                                <button
                                    type="button"
                                    onClick={setPostsBySearch}
                                    className="btn btn-primary shadow-sm"
                                >
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <h5>Categories</h5>
                        <ul className="list-group">
                            {categories
                                ? categories.map((cat) => {
                                      return (
                                          <li
                                              style={
                                                  selectedCat === cat.name
                                                      ? {
                                                            fontWeight: "bold",
                                                            backgroundColor:
                                                                "#275d91",
                                                            color: "#fff",
                                                        }
                                                      : {}
                                              }
                                              onClick={() => {
                                                  setPostsByCategories(cat);
                                              }}
                                              className="list-group-item"
                                          >
                                              {cat.name}
                                          </li>
                                      );
                                  })
                                : ""}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
