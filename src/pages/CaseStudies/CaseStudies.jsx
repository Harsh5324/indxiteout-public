import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Api from "../../API/Api";
import { useRef } from "react";
import useSearchCaseStudies from "../../Hooks/useSearchCaseStudies";

export default function CaseStudies() {
    const PF = process.env.REACT_APP_IMAGE_URL;
    const [postsdata, setPostsData] = useState(null);
    const [postss, setPosts] = useState(null);
    const [solutions, setSolutions] = useState(null);
    const [selectedSolution, SetSol] = useState(null);
    const [posts, _setPosts] = useState(null);
    const [page, setPage] = useState(1);
    const [_isLoading, setIsLoading] = useState(false);
    // LAZY LOADING
    const [pageNum, setPageNum] = useState(1);

    const limit = 6;

    const contRef = useRef(null);

    const observer = useRef();
    const { isLoading, error, hasMore } = useSearchCaseStudies(
        selectedSolution,
        pageNum,
        postss
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
        // getPosts()
        // API CALL ENDED
        const fetchPosts = async () => {
            const res = await axios.get(
                process.env.REACT_APP_BASE_URL + "/solutions"
            );
            setSolutions(res.data);
            // console.clear();
            // console.log(
            //     "🚀 ~ file: CaseStudies.jsx:54 ~ fetchPosts ~ res.data:",
            //     res.data
            // );
        };
        fetchPosts();
    }, []);
    const getPosts = () => {
        // API CALL START
        Api.getCaseStudies().then((res) => {
            if (res && res.data) {
                const response = res.data;
                response.sort(function (a, b) {
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setPosts(response);
                setPostsData(response);
            }
        });
        // API CALL ENDED
    };
    const handleSolutionChange = (e) => {
        // console.log(e.target.value);
        setIsLoading(false);
        if (e.target.value === "All") {
            // let filteredRes = postsdata.filter((item, i) => {
            //     return item.expertise.includes(e.target.value)
            // })
            // console.log('fileter',filteredRes)
            SetSol(null);
        } else {
            SetSol(e.target.value);
        }
    };

    const _scroll = () => {
        const cont = contRef.current;
        const offset = cont.offsetTop + cont.offsetHeight - 200;
        var scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop >= offset) {
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            let path = `/caseStudies?page=${1}&limit=${limit}`;
            if (selectedSolution != "null") {
                path += `&cat=${selectedSolution}`;
            }
            const res = await axios.get(process.env.REACT_APP_BASE_URL + path);
            let response = res.data;
            response.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            response = response.slice(0, 10);
            console.log(
                "🚀 ~ file: CaseStudies.jsx:109 ~ fetchPosts ~ response:",
                response
            );
            _setPosts(response);
            if (response.length > 0) {
                setTimeout(() => {
                    setIsLoading(true);
                }, 1000);
            }
        };
        fetchPosts();

        window.addEventListener("scroll", _scroll);

        return () => window.removeEventListener("scroll", _scroll);
    }, [selectedSolution]);

    const loadMore = async () => {
        let path = `/caseStudies?page=${page}&limit=${limit}`;
        if (selectedSolution != "null") {
            path += `&cat=${selectedSolution}`;
        }
        const res = await axios.get(process.env.REACT_APP_BASE_URL + path);
        let response = res.data;
        response.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        response = response.slice(0, 10);
        if (response.length === 0) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
        _setPosts((prev) => [...prev, ...response]);
    };

    useEffect(() => {
        if (page > 1) {
            loadMore();
        }
    }, [page]);

    return (
        <div id="main">
            <div className="page_title">
                <div className="container">
                    <div className="breadcrumbs">
                        {/* Breadcrumb NavXT 7.1.0 */}
                        <span typeof="v:Breadcrumb">
                            <a
                                rel="v:url"
                                property="v:title"
                                title="Go to Inxite Out Pvt. Ltd.."
                                href="../index.html"
                                className="home"
                            >
                                Home
                            </a>
                        </span>
                        <span>
                            <i className="fa fa-angle-right" />
                        </span>
                        <span property="itemListElement" typeof="ListItem">
                            <span property="name">Case Studies</span>
                            <meta property="position" content={2} />
                        </span>{" "}
                    </div>
                    <h1 className="h2">Case Studies</h1>
                </div>
            </div>
            <div className="">
                <div className="content-area">
                    <div className="container row mx-auto">
                        <div className="col-lg-12 d-flex align-items-center justify-content-end">
                            <label htmlFor="staticEmail2" className="">
                                FILTER BY
                            </label>
                            <select
                                id="mySelect"
                                onChange={handleSolutionChange}
                                className="form-control w-50 ml-3"
                                style={{ maxWidth: "225px" }}
                            >
                                <option value="All">All Case Studies</option>
                                {solutions
                                    ? solutions.map((item, index) => {
                                          return (
                                              <option
                                                  key={index}
                                                  value={item.title.replace(
                                                      /\s/g,
                                                      "-"
                                                  )}
                                              >
                                                  {item.title}
                                              </option>
                                          );
                                      })
                                    : ""}
                            </select>
                        </div>
                    </div>
                    <article
                        id="post-7384"
                        className="consulting_elementor_wrapper post-7384 page type-page status-publish hentry"
                    >
                        <div className="entry-content">
                            <div className="text_block consulting_elementor_wrapper clearfix">
                                <div
                                    data-elementor-type="wp-page"
                                    data-elementor-id={7384}
                                    className="elementor elementor-7384"
                                >
                                    <div className="elementor-inner">
                                        <div className="elementor-section-wrap">
                                            <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-3ae86a6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                data-id="3ae86a6"
                                                data-element_type="section"
                                            >
                                                <div className="elementor-container elementor-column-gap-default">
                                                    <div className="elementor-row">
                                                        <div
                                                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c8f1a29"
                                                            data-id="c8f1a29"
                                                            data-element_type="column"
                                                        >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                <div className="elementor-widget-wrap">
                                                                    <div
                                                                        className="elementor-element elementor-element-0a5af1f elementor-widget elementor-widget-ajax-load-more"
                                                                        data-id="0a5af1f"
                                                                        data-element_type="widget"
                                                                        data-widget_type="ajax-load-more.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div className="elementor-alm-shortcode">
                                                                                <style type="text/css" />
                                                                                <div
                                                                                    id="ajax-load-more"
                                                                                    className="ajax-load-more-wrap infinite fading-circles alm-0"
                                                                                    data-alm-id={
                                                                                        0
                                                                                    }
                                                                                    data-canonical-url="https://inxiteout.ai/case-studies/"
                                                                                    data-slug="case-studies"
                                                                                    data-post-id={
                                                                                        7384
                                                                                    }
                                                                                    data-localized="ajax_load_more_vars"
                                                                                    data-total-posts={
                                                                                        27
                                                                                    }
                                                                                >
                                                                                    <ul
                                                                                        aria-live="polite"
                                                                                        aria-atomic="true"
                                                                                        className="alm-listing alm-ajax postlist"
                                                                                        data-container-type="ul"
                                                                                        data-loading-style="infinite fading-circles"
                                                                                        data-repeater="default"
                                                                                        data-post-type="stm_service"
                                                                                        data-order="DESC"
                                                                                        data-orderby="date"
                                                                                        data-offset={
                                                                                            0
                                                                                        }
                                                                                        data-posts-per-page={
                                                                                            6
                                                                                        }
                                                                                        data-scroll="true"
                                                                                        data-scroll-distance={
                                                                                            100
                                                                                        }
                                                                                        data-max-pages={
                                                                                            0
                                                                                        }
                                                                                        data-pause-override="false"
                                                                                        data-pause="false"
                                                                                        data-button-label=""
                                                                                        style={{
                                                                                            display:
                                                                                                "contents",
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            className="row alm-reveal d-flex justify-content-center"
                                                                                            style={{
                                                                                                opacity: 1,
                                                                                                height: "auto",
                                                                                                outline:
                                                                                                    "none",
                                                                                                flexDirection:
                                                                                                    "row",
                                                                                            }}
                                                                                            ref={
                                                                                                contRef
                                                                                            }
                                                                                        >
                                                                                            {posts ? (
                                                                                                <>
                                                                                                    {posts.length !==
                                                                                                    0 ? (
                                                                                                        posts.map(
                                                                                                            (
                                                                                                                item,
                                                                                                                i
                                                                                                            ) => {
                                                                                                                return (
                                                                                                                    <li
                                                                                                                        className="alm-item col-lg-4 col-md-4 col-xs-12 col-sm-6"
                                                                                                                        id={
                                                                                                                            12686
                                                                                                                        }
                                                                                                                    >
                                                                                                                        <img
                                                                                                                            width={
                                                                                                                                500
                                                                                                                            }
                                                                                                                            height={
                                                                                                                                334
                                                                                                                            }
                                                                                                                            src={
                                                                                                                                PF +
                                                                                                                                item.photo
                                                                                                                            }
                                                                                                                            className="attachment-full size-full wp-post-image"
                                                                                                                            alt={
                                                                                                                                item.title
                                                                                                                            }
                                                                                                                            decoding="async"
                                                                                                                        />
                                                                                                                        <h3>
                                                                                                                            <Link
                                                                                                                                to={
                                                                                                                                    "/case-studies/" +
                                                                                                                                    item.title.replace(
                                                                                                                                        /\s/g,
                                                                                                                                        "-"
                                                                                                                                    )
                                                                                                                                }
                                                                                                                                title="E-commerce campaign spend optimization for improved Return on Advertising Spend (RoAS) and Sales Conversion"
                                                                                                                            >
                                                                                                                                {
                                                                                                                                    item.title
                                                                                                                                }
                                                                                                                            </Link>
                                                                                                                        </h3>
                                                                                                                        <p
                                                                                                                            dangerouslySetInnerHTML={{
                                                                                                                                __html:
                                                                                                                                    item.desc.substr(
                                                                                                                                        0,
                                                                                                                                        245
                                                                                                                                    ) +
                                                                                                                                    "...",
                                                                                                                            }}
                                                                                                                            className="karla"
                                                                                                                        ></p>
                                                                                                                        <Link
                                                                                                                            to={
                                                                                                                                "/case-studies/" +
                                                                                                                                item.title.replace(
                                                                                                                                    /\s/g,
                                                                                                                                    "-"
                                                                                                                                )
                                                                                                                            }
                                                                                                                            className="alm-more"
                                                                                                                        >
                                                                                                                            Read
                                                                                                                            More
                                                                                                                        </Link>
                                                                                                                    </li>
                                                                                                                );
                                                                                                            }
                                                                                                        )
                                                                                                    ) : (
                                                                                                        <h2>
                                                                                                            No
                                                                                                            Case
                                                                                                            Studies
                                                                                                            To
                                                                                                            Show
                                                                                                        </h2>
                                                                                                    )}
                                                                                                </>
                                                                                            ) : (
                                                                                                <div className="lds-spinner p-5 col-lg-4 col-md-4 col-sm-6 col-xs-6">
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
                                                                                            {_isLoading && (
                                                                                                <div className="lds-spinner p-5 col-lg-4 col-md-4 col-sm-6 col-xs-6">
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
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
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
            {/*.container*/}
        </div>
    );
}
