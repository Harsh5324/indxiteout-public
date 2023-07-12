import { Link, useLocation, useHistory } from "react-router-dom";
import React from "react";
import { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Moment from "moment";
import InfiniteScroll from "react-infinite-scroller";
import "./BlogView.css";
import Api from "../../API/Api";
import useSearchPosts from "../../Hooks/useSearchPosts";

export default function BlogView(props) {
    const searchText = useRef();
    const PF = process.env.REACT_APP_IMAGE_URL;

    function useQuery() {
        const { search } = useLocation();
        // console.log('search',search)
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();
    let searchTerm = query.get("search");
    const [search, setSearch] = useState("");
    let categoryTerm = query.get("category");
    // console.log('searchTerm',searchTerm)
    // console.log('categoryTerm',categoryTerm)
    const [postsa, setPosts] = useState(undefined);
    const [categories, setCategories] = useState([]);
    const [selectedCat, setSelCat] = useState(categoryTerm || "All");

    // LAZY LOADING
    const [pageNum, setPageNum] = useState(1);
    const observer = useRef();
    const history = useHistory();
    const { isLoading, error, posts, hasMore } = useSearchPosts(
        categoryTerm,
        searchTerm,
        pageNum,
        postsa
    );
    const lastBookElementRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNum((prev) => prev + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore]
    );

    useEffect(() => {
        // API CALL START

        if (categoryTerm && categoryTerm !== "") {
            // console.log('calling by  category')
            setPostsByCategories({ name: categoryTerm });
        } else if (searchTerm && searchTerm !== "") {
            // console.log('calling by search')
            // searchText.current.value = searchTerm
            // getPosts()
        } else {
            // getPosts()
        }
        getCategories();
        // API CALL ENDED
    }, []);
    const getPosts = () => {
        // API CALL START
        let searchValue = searchText.current.value;
        let tempUrl = "/posts";
        if (searchValue) {
            tempUrl = "/posts?search=" + searchValue;
        }
        Api.fetchApiCall(tempUrl, "GET")
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
                        const response = json;
                        response.sort(function (a, b) {
                            // Turn your strings into dates, and then subtract them
                            // to get a value that is either negative, positive, or zero.
                            return (
                                new Date(b.createdAt) - new Date(a.createdAt)
                            );
                        });
                        // setPosts(response)
                        generateExcerpt(response);
                    }
                }
            })
            .catch((error) => {
                toast.error(error.response || "Something went wrong.");
            });
        // API CALL ENDED
    };
    const generateExcerpt = (data) => {
        let updatedData = data.map((item, index) => {
            let div = document.createElement("div");
            div.style.display = "none";
            div.innerHTML = item.desc;
            let text = div.textContent || div.innerText || "";
            item.excerpt = text;
            return item;
        });
        setPosts(updatedData);
    };
    const getCategories = () => {
        // API CALL START
        Api.fetchApiCall("/categories/", "GET")
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
                        json.unshift({ name: "All" });
                        setCategories(json);
                    }
                }
            })
            .catch((error) => {
                toast.error(error.response || "Something went wrong.");
            });
        // API CALL ENDED
    };
    // const setPostsByCategories = (cat) => {
    //   let url = process.env.REACT_APP_BASE_URL+'/posts';
    //   // console.log()
    //   if(cat && cat.name && cat.name !== 'All'){
    //     url = url + "?cat="+ cat.name
    //     setSelCat(cat.name);
    //   }else{
    //     setSelCat("All");
    //   }
    //   fetch(url ,{
    //     method:'GET',
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //   .then((resp) => {
    //     let json = resp.json();
    //    if (resp.status >= 200 && resp.status < 300) {
    //       return json;
    //     } else {
    //       return json.then(Promise.reject.bind(Promise));
    //     }
    //   })
    //   .then(
    //     json => {
    //       if (json.result && (json.result.status === 'error')) {
    //         // console.log('json error',json)
    //         toast.error("Something went wrong.");
    //       }
    //       else{
    //         // console.log('json resp',json)
    //         if(json){
    //               setPosts(json)
    //         }
    //       }
    //     }
    //   )
    //   .catch((error) => {
    //     toast.error(error.response || "Something went wrong.");
    //   })
    // }
    const setPostsByCategories = (cat) => {
        setPageNum(1);
        setPosts([]);
        if (searchTerm) {
            history.push(
                "/blog?search=" + searchTerm + "&" + "category=" + cat.name
            );
        } else {
            history.push("/blog?category=" + cat.name);
        }
    };
    const setPostsBySearch = () => {
        setPageNum(1);
        setPosts([]);
        if (categoryTerm) {
            history.push(
                "/blog?search=" + search + "&" + "category=" + categoryTerm
            );
        } else {
            history.push("/blog?search=" + search);
        }
    };
    return (
        <div id="main">
            <div className="page_title">
                <div className="container">
                    <div className="breadcrumbs">
                        <span typeof="v:Breadcrumb">
                            <a
                                rel="v:url"
                                property="v:title"
                                title="Go to Inxite Out Pvt. Ltd.."
                                href="/"
                                className="home"
                            >
                                Home
                            </a>
                        </span>
                        <span>
                            <i className="fa fa-angle-right" />
                        </span>
                        <span property="itemListElement" typeof="ListItem">
                            <span property="name">Blog</span>
                            <meta property="position" content={2} />
                        </span>
                    </div>
                    <h1 className="h2">Blog</h1>
                </div>
            </div>
            <div>
                <div className="content-area">
                    <article
                        id="post-11234"
                        className="consulting_elementor_wrapper post-11234 page type-page status-publish hentry"
                    >
                        <div className="entry-content">
                            <div className="text_block consulting_elementor_wrapper clearfix">
                                <div
                                    data-elementor-type="wp-page"
                                    data-elementor-id={11234}
                                    className="elementor elementor-11234"
                                >
                                    <div className="elementor-inner">
                                        <div className="elementor-section-wrap">
                                            <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-5cb8941 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                data-id="5cb8941"
                                                data-element_type="section"
                                            >
                                                <div className="elementor-container elementor-column-gap-default">
                                                    <div className="elementor-row">
                                                        <div
                                                            className="elementor-column col-lg-8 col-md-8 col-xs-12 col-sm-12 p-0 elementor-top-column elementor-element elementor-element-6f73562 left-blog"
                                                            data-id="6f73562"
                                                            data-element_type="column"
                                                        >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                <div className="elementor-widget-wrap">
                                                                    <div className="elementor-element elementor-element-e6d177a elementor-grid-2 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-posts">
                                                                        <div className="elementor-widget-container">
                                                                            <div
                                                                                id="scrollableDiv"
                                                                                style={{
                                                                                    height: "100%",
                                                                                }}
                                                                                className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid blogs-views-main"
                                                                            >
                                                                                {posts &&
                                                                                posts.length >
                                                                                    0 ? (
                                                                                    posts.map(
                                                                                        (
                                                                                            post,
                                                                                            i
                                                                                        ) => {
                                                                                            return (
                                                                                                <article
                                                                                                    key={
                                                                                                        post._id +
                                                                                                        "_" +
                                                                                                        i
                                                                                                    }
                                                                                                    ref={
                                                                                                        lastBookElementRef
                                                                                                    }
                                                                                                    className="mb-3 elementor-post elementor-grid-item post-12897 product type-product status-publish has-post-thumbnail hentry product_category-amazingaiatixo px-2"
                                                                                                >
                                                                                                    <Link
                                                                                                        className="elementor-post__thumbnail__link"
                                                                                                        href="javascript:void(0)"
                                                                                                        to={
                                                                                                            "/blog/" +
                                                                                                            post.title.replace(
                                                                                                                /\s/g,
                                                                                                                "-"
                                                                                                            )
                                                                                                        }
                                                                                                    >
                                                                                                        <div className="elementor-post__thumbnail">
                                                                                                            <img
                                                                                                                width={
                                                                                                                    515
                                                                                                                }
                                                                                                                height={
                                                                                                                    330
                                                                                                                }
                                                                                                                alt={
                                                                                                                    post.title
                                                                                                                }
                                                                                                                style={{
                                                                                                                    maxHeight:
                                                                                                                        "230px",
                                                                                                                    minHeight:
                                                                                                                        "230px",
                                                                                                                }}
                                                                                                                className="attachment-full size-full rounded"
                                                                                                                src={
                                                                                                                    PF +
                                                                                                                    post.photo
                                                                                                                }
                                                                                                            />
                                                                                                        </div>
                                                                                                    </Link>
                                                                                                    <div className="elementor-post__text">
                                                                                                        <div className="elementor-post__title">
                                                                                                            <Link
                                                                                                                to={
                                                                                                                    "/blog/" +
                                                                                                                    post.title.replace(
                                                                                                                        /\s/g,
                                                                                                                        "-"
                                                                                                                    )
                                                                                                                }
                                                                                                                className="text-blog"
                                                                                                            >
                                                                                                                {
                                                                                                                    post.title
                                                                                                                }
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                        <div className="elementor-post__meta-data">
                                                                                                            <span className="elementor-post-date">
                                                                                                                {Moment(
                                                                                                                    post.createdAt
                                                                                                                ).format(
                                                                                                                    "YYYY/MM/DD h:mm a"
                                                                                                                )}
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <div className="elementor-post__excerpt"></div>
                                                                                                        {/* <p dangerouslySetInnerHTML={{__html: post.desc.substr(0, 200) + '...'}}>
                                                          </p> */}
                                                                                                        <p>
                                                                                                            {post.excerpt.substr(
                                                                                                                0,
                                                                                                                200
                                                                                                            ) +
                                                                                                                "..."}
                                                                                                        </p>
                                                                                                        <Link
                                                                                                            className="elementor-post__read-more text-btn"
                                                                                                            to={
                                                                                                                "/blog/" +
                                                                                                                post.title.replace(
                                                                                                                    /\s/g,
                                                                                                                    "-"
                                                                                                                )
                                                                                                            }
                                                                                                        >
                                                                                                            Read
                                                                                                            More
                                                                                                            »
                                                                                                        </Link>
                                                                                                    </div>
                                                                                                </article>
                                                                                            );
                                                                                        }
                                                                                    )
                                                                                ) : (
                                                                                    <>
                                                                                        {!isLoading && (
                                                                                            <p className="display-6 text-center">
                                                                                                No
                                                                                                posts
                                                                                                to
                                                                                                show
                                                                                            </p>
                                                                                        )}
                                                                                    </>
                                                                                )}
                                                                                <div>
                                                                                    {isLoading && (
                                                                                        <div className="lds-spinner p-5">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                                            <div className="input-group mb-0 w-100">
                                                                <div className="mb-1 d-flex w-100">
                                                                    <input
                                                                        type="text"
                                                                        value={
                                                                            search
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            setSearch(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            );
                                                                            console.log(
                                                                                "---",
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            );
                                                                        }}
                                                                        className="form-control border"
                                                                        placeholder="Enter Text to search"
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        onClick={
                                                                            setPostsBySearch
                                                                        }
                                                                        className="btn btn-primary shadow-sm"
                                                                    >
                                                                        <i className="fas fa-search"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <h5>Categories</h5>
                                                            <ul className="list-group">
                                                                {categories
                                                                    ? categories.map(
                                                                          (
                                                                              cat
                                                                          ) => {
                                                                              return (
                                                                                  <li
                                                                                      style={
                                                                                          categoryTerm ===
                                                                                              cat.name ||
                                                                                          (cat.name ===
                                                                                              "All" &&
                                                                                              !categoryTerm)
                                                                                              ? {
                                                                                                    fontWeight:
                                                                                                        "bold",
                                                                                                    backgroundColor:
                                                                                                        "#275d91",
                                                                                                    color: "#fff",
                                                                                                    cursor: "pointer",
                                                                                                }
                                                                                              : {
                                                                                                    cursor: "pointer",
                                                                                                }
                                                                                      }
                                                                                      onClick={() => {
                                                                                          setPostsByCategories(
                                                                                              cat
                                                                                          );
                                                                                      }}
                                                                                      className="list-group-item"
                                                                                  >
                                                                                      {
                                                                                          cat.name
                                                                                      }
                                                                                  </li>
                                                                              );
                                                                          }
                                                                      )
                                                                    : ""}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
