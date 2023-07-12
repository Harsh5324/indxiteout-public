import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import $ from "jquery";
import { useLocation } from "react-router-dom";
import Api from "../../API/Api";
import { toast } from "react-toastify";

export default function TopBar({ type }) {
    const { user, dispatch } = useContext(Context);
    const [expertise, setExpPosts] = useState([]);
    const [solutions, setSolPosts] = useState([]);

    useEffect(() => {
        // console.log('type',type)
        getExpertise();
        getSolutions();
        $(".menu-item:not(.menu-item-has-children)").on("click", function () {
            // $(this).toggleClass('open');
            let mainMenu = document.getElementsByClassName("top_nav_mobile")[0];
            let menuIcon = document.getElementById("menu_toggle");
            menuIcon.classList.toggle("open");
            // console.log('mainen',mainMenu)
            mainMenu && mainMenu.classList.toggle("show");
        });
        $(".sub-menu").on("click", function () {
            // $(this).toggleClass('open');
            let mainMenu = document.getElementsByClassName("top_nav_mobile")[0];
            let menuIcon = document.getElementById("menu_toggle");
            menuIcon.classList.toggle("open");
            // console.log('mainen',mainMenu)
            mainMenu && mainMenu.classList.toggle("show");
        });
    }, []);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    // console.log('splitLocation',splitLocation)
    const PF = process.env.REACT_APP_IMAGE_URL;
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    const getExpertise = () => {
        // API CALL START
        Api.getExpertise().then((res) => {
            res && res.data && setExpPosts(res.data);
        });
        // API CALL ENDED
    };

    const getSolutions = () => {
        // API CALL START
        Api.getSolutions().then((res) => {
            res && res.data && setSolPosts(res.data);
        });
        // API CALL ENDED
    };

    return (
        <>
            <header className="bg-white shadow navbar-sticky" id="header">
                <div
                    className="header_top clearfix affix-top container"
                    style={{ height: "80px" }}
                >
                    <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ height: "80px" }}
                    >
                        <div className="logo media-left media-middle">
                            <Link to="/" style={{ margin: "5px 0px 5px 0px" }}>
                                <img
                                    width="500"
                                    height="207"
                                    alt="Inxite Out Pvt. Ltd."
                                    className=""
                                    src="https://inxiteout.ai/wp-content/uploads/2021/08/logo-14.png"
                                />
                                <noscript>
                                    <img
                                        width="500"
                                        height="207"
                                        src="https://inxiteout.ai/wp-content/uploads/2021/08/logo-14.png"
                                        style={{ width: "170px" }}
                                        alt="Inxite Out Pvt. Ltd."
                                    />
                                </noscript>
                            </Link>
                        </div>
                        <div className="top_nav  media-middle affix-top h-100">
                            <div className="top_nav_wrapper d-block h-100">
                                <ul
                                    id="menu-main-menu"
                                    className="main_menu_nav d-flex align-items-center h-100"
                                >
                                    <li
                                        id="menu-item-7261"
                                        className={
                                            splitLocation[1] === ""
                                                ? "current_page_item menu-item menu-item-type-custom menu-item-object-custom menu-item-12239"
                                                : "menu-item menu-item-type-custom menu-item-object-custom menu-item-12239"
                                        }
                                    >
                                        <Link
                                            to="/"
                                            aria-current="page"
                                            className="text-black"
                                        >
                                            HOME
                                        </Link>
                                    </li>
                                    <li
                                        id="menu-item-6904"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6904"
                                    >
                                        <a href="#">EXPERTISE</a>
                                        <ul className="sub-menu">
                                            {expertise &&
                                                expertise.map((exp, i) => {
                                                    const path =
                                                        exp.title.replace(
                                                            /\s/g,
                                                            "-"
                                                        );
                                                    return (
                                                        <li
                                                            key={i}
                                                            id="menu-item-7343"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7343"
                                                        >
                                                            <a className="p-0">
                                                                <Link
                                                                    className="m-0 py-2 px-4"
                                                                    to={
                                                                        "/expertise/" +
                                                                        (path.charAt(
                                                                            0
                                                                        ) ===
                                                                        "-"
                                                                            ? path.slice(
                                                                                  1
                                                                              )
                                                                            : path)
                                                                    }
                                                                >
                                                                    {" "}
                                                                    {
                                                                        exp.title
                                                                    }{" "}
                                                                </Link>
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </li>
                                    <li
                                        id="menu-item-6905"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6905"
                                    >
                                        <a href="#">SOLUTIONS</a>
                                        <ul className="sub-menu">
                                            {solutions &&
                                                solutions.map((sol, i) => {
                                                    const path =
                                                        sol.title.replace(
                                                            /\s/g,
                                                            "-"
                                                        );
                                                    return (
                                                        <li
                                                            key={i}
                                                            id="menu-item-7343"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7343"
                                                        >
                                                            <a className="p-0">
                                                                <Link
                                                                    className="m-0 py-2 px-4"
                                                                    to={
                                                                        "/solutions/" +
                                                                        (path.charAt(
                                                                            0
                                                                        ) ===
                                                                        "-"
                                                                            ? path.slice(
                                                                                  1
                                                                              )
                                                                            : path)
                                                                    }
                                                                >
                                                                    {" "}
                                                                    {
                                                                        sol.title
                                                                    }{" "}
                                                                </Link>
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </li>
                                    <li
                                        id="menu-item-7393"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7393"
                                    >
                                        <Link to="/case-studies">
                                            CASE STUDIES
                                        </Link>
                                    </li>
                                    <li
                                        id="menu-item-7260"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7260"
                                    >
                                        <Link to="/about-us">ABOUT US</Link>
                                    </li>
                                    <li
                                        id="menu-item-12239"
                                        className={
                                            splitLocation[1] === "blog"
                                                ? "current_page_item menu-item menu-item-type-custom menu-item-object-custom menu-item-12239"
                                                : "menu-item menu-item-type-custom menu-item-object-custom menu-item-12239"
                                        }
                                    >
                                        <NavLink to="/blog">BLOG</NavLink>
                                    </li>
                                    <li
                                        id="menu-item-7446"
                                        className="btn-header btn btn-primary btn-sm  menu-item menu-item-type-post_type menu-item-object-page menu-item-7446"
                                    >
                                        <a className="">
                                            <Link
                                                to="/get-in-touch"
                                                style={{
                                                    textDecoration: "none",
                                                    color: "white",
                                                }}
                                            >
                                                {" "}
                                                GET IN TOUCH{" "}
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                                <div className="header_socials d-flex align-items-center h-100">
                                    <a
                                        target="_blank"
                                        href="https://in.linkedin.com/company/inxiteout"
                                    >
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com/Inxite-Out-110414368216100/?ref=pages_you_manage"
                                    >
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://twitter.com/InxiteOut"
                                    >
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/inxiteout/"
                                    >
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile_header">
                    <div className="px-3 logo_wrapper h-100px p-0 d-flex align-items-center justify-content-between">
                        <div className="logo d-flex align-items-center">
                            <a href="" style={{ margin: "5px 0px 5px 0px" }}>
                                <img
                                    width="500"
                                    height="207"
                                    style={{ width: "170px" }}
                                    alt="Inxite Out Pvt. Ltd."
                                    className=" lazyloaded"
                                    src="https://inxiteout.ai/wp-content/uploads/2021/08/logo-14.png"
                                />
                                <noscript>
                                    <img
                                        width="500"
                                        height="207"
                                        src="https://inxiteout.ai/wp-content/uploads/2021/08/logo-14.png"
                                        style={{ width: "170px" }}
                                        alt="Inxite Out Pvt. Ltd."
                                    />
                                </noscript>
                            </a>
                        </div>

                        <div id="menu_toggle" className="">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            ></button>
                        </div>
                    </div>
                    <div className="header_info">
                        <div
                            className="collapse navbar-collapse top_nav_mobile"
                            id="navbarSupportedContent"
                        >
                            <ul id="menu-main-menu-1" className="main_menu_nav">
                                <li
                                    id="menu-item-7261"
                                    className={
                                        splitLocation[1] === ""
                                            ? "current_page_item menu-item menu-item-type-custom menu-item-object-custom menu-item-12239"
                                            : "menu-item menu-item-type-custom menu-item-object-custom menu-item-12239"
                                    }
                                >
                                    <Link
                                        to="/"
                                        aria-current="page"
                                        className="   text-black"
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6904">
                                    <a href="#">EXPERTISE</a>
                                    <span className="">
                                        <i></i>
                                    </span>
                                    <ul
                                        className="sub-menu"
                                        style={{ display: "none" }}
                                    >
                                        {expertise &&
                                            expertise.map((exp, i) => {
                                                return (
                                                    <li
                                                        key={i}
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8109"
                                                    >
                                                        <Link
                                                            className="p-0 m-0"
                                                            to={
                                                                "/expertise/" +
                                                                exp.title.replace(
                                                                    /\s/g,
                                                                    "-"
                                                                )
                                                            }
                                                        >
                                                            {" "}
                                                            {exp.title}{" "}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6905">
                                    <a href="#">SOLUTIONS</a>
                                    <span className="">
                                        <i></i>
                                    </span>
                                    <ul className="sub-menu">
                                        {solutions &&
                                            solutions.map((sol, i) => {
                                                return (
                                                    <li
                                                        key={i}
                                                        id="menu-item-7343"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7343"
                                                    >
                                                        <Link
                                                            className="m-0 p-0"
                                                            to={
                                                                "/solutions/" +
                                                                sol.title.replace(
                                                                    /\s/g,
                                                                    "-"
                                                                )
                                                            }
                                                        >
                                                            {" "}
                                                            {sol.title}{" "}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </li>
                                <li
                                    id="menu-item-7393"
                                    className="menu-item menu-item-type-post_type   menu-item-object-page menu-item-7393"
                                >
                                    <Link to="/case-studies">CASE STUDIES</Link>
                                </li>
                                <li
                                    id="menu-item-7260"
                                    className="menu-item menu-item-type-post_type   menu-item-object-page menu-item-7260"
                                >
                                    <Link to="/about-us">ABOUT US</Link>
                                </li>
                                <li
                                    id="menu-item-12239"
                                    className={
                                        splitLocation[1] === "blog"
                                            ? "current_page_item menu-item menu-item-type-custom menu-item-object-custom menu-item-12239"
                                            : "menu-item menu-item-type-custom menu-item-object-custom menu-item-12239"
                                    }
                                >
                                    <NavLink to="/blog">BLOG</NavLink>
                                </li>
                                <li className="btn-header main_cta menu-item menu-item-type-post_type menu-item-object-page menu-item-7446">
                                    <NavLink to="/get-in-touch">
                                        GET IN TOUCH
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
