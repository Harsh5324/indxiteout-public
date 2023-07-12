import { useEffect, useState } from "react";
import Api from "../../API/Api";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import CaseStudiesSlider from "./../../components/Case-Studies-Slider/Case-Studies-Slider";
import { Link, NavLink } from "react-router-dom";
import { EffectCreative } from "swiper";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const PF = process.env.REACT_APP_IMAGE_URL;

    const [solposts, setSolPosts] = useState([]);
    const { search } = useLocation();
    SwiperCore.use([Autoplay]);
    const [activeSlide, SetAS] = useState(0);
    useEffect(() => {
        getSolutions();
    }, [search]);

    const getSolutions = () => {
        // API CALL START
        Api.getSolutions().then((res) => {
            res && res.data && setSolPosts(res.data);
        });
        // API CALL ENDED
    };
    return (
        <div>
            <div className=" home page-template-default page page-id-7163 ehf-footer ehf-template-consulting ehf-stylesheet-consulting-child site_layout_melbourne show-mobile-switcher  header_style_2 sticky_menu mobile_grid_landscape elementor-default elementor-kit-6895 elementor-page elementor-page-7163">
                <div id="main">
                    <div className="page_title">
                        <div className="container">
                            <div className="breadcrumbs">
                                <span typeof="v:Breadcrumb">
                                    <span property="v:title">Home</span>
                                </span>
                            </div>
                            <h1 className="h2">AI &amp; ML Solutions</h1>
                        </div>
                    </div>
                    <div className="content-area">
                        <article
                            id="post-7163"
                            className="consulting_elementor_wrapper post-7163 page type-page status-publish hentry"
                        >
                            <div className="entry-content">
                                <div
                                    data-elementor-type="wp-page"
                                    data-elementor-id={7163}
                                    className="elementor elementor-7163"
                                >
                                    <div className="elementor-inner">
                                        <div className="elementor-section-wrap">
                                            <section className="pt-0 _home">
                                                <Swiper
                                                    spaceBetween={0}
                                                    centeredSlides={false}
                                                    slidesPerView={1}
                                                    loop={true}
                                                    onSlideChange={(swiper) => {
                                                        const total =
                                                            activeSlide + 1;
                                                        SetAS(swiper.realIndex);
                                                    }}
                                                    onReachEnd={(swiper) => {
                                                        console.log("end");
                                                        SetAS(0);
                                                    }}
                                                    onSwiper={(swiper) =>
                                                        console.log(
                                                            "swiper",
                                                            swiper
                                                        )
                                                    }
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    navigation={true}
                                                    modules={[
                                                        Autoplay,
                                                        Pagination,
                                                        Navigation,
                                                        EffectCreative,
                                                    ]}
                                                    autoplay={{
                                                        delay: 8000,
                                                        disableOnInteraction: false,
                                                    }}
                                                    className="mySwiper"
                                                    style={{ height: "550px" }}
                                                    grabCursor={true}
                                                    effect={"creative"}
                                                    creativeEffect={{
                                                        prev: {
                                                            shadow: true,
                                                            translate: [
                                                                0, 0, -400,
                                                            ],
                                                        },
                                                        next: {
                                                            translate: [
                                                                "100%",
                                                                0,
                                                                0,
                                                            ],
                                                        },
                                                    }}
                                                >
                                                    <SwiperSlide>
                                                        <div
                                                            key={1}
                                                            className="h-100"
                                                            style={{
                                                                backgroundImage:
                                                                    "url('/assets/images/slides/slide1.jpg')",
                                                                backgroundPosition:
                                                                    "center",
                                                                backgroundSize:
                                                                    "cover",
                                                            }}
                                                        >
                                                            <div className="bg-overlay h-100 mx-auto row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
                                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12"></div>
                                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 p-3 p-lg-5 pt-lg-3 ">
                                                                    <p className="text-white d-flex sliderText px-sm-3 pl-0">
                                                                        <Fade
                                                                            key={
                                                                                "1A"
                                                                            }
                                                                            right
                                                                        >
                                                                            Over
                                                                            75%
                                                                            of
                                                                            POCs
                                                                            We
                                                                            executed
                                                                            were
                                                                            Operationalized
                                                                        </Fade>
                                                                    </p>
                                                                    <div className="d-grid w-75 gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 d-flex ">
                                                                        <Slide
                                                                            key={
                                                                                "1B"
                                                                            }
                                                                            right
                                                                        >
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-primary btn-lg  me-md-2 btn-anime sliderBtn"
                                                                            >
                                                                                <Link
                                                                                    to="/case-studies"
                                                                                    style={{
                                                                                        textDecoration:
                                                                                            "none",
                                                                                    }}
                                                                                >
                                                                                    Explore
                                                                                    our
                                                                                    work{" "}
                                                                                    <i className="i fa fa-arrow-right text-white"></i>
                                                                                </Link>
                                                                            </button>
                                                                        </Slide>
                                                                    </div>
                                                                    {/* <div className="col-lg-2"></div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div
                                                            key={2}
                                                            className="h-100"
                                                            style={{
                                                                backgroundImage:
                                                                    "url('/assets/images/slides/slide2.jpg')",
                                                                backgroundPosition:
                                                                    "center",
                                                                backgroundSize:
                                                                    "cover",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    backgroundColor:
                                                                        "  ",
                                                                }}
                                                                className="bg-overlay h-100 mx-auto row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 "
                                                            >
                                                                {/* <div className="col-lg-2"></div> */}
                                                                <div className="col-lg-8 col-md-8 col-xs-12 col-sm-6 mx-lg-5 px-lg-5 p-lg-5 pt-lg-3">
                                                                    <p className="display-5 mx-4 text-white sliderText">
                                                                        {" "}
                                                                        <Fade
                                                                            key={
                                                                                "2A"
                                                                            }
                                                                            left
                                                                            collapse
                                                                            when={
                                                                                activeSlide ==
                                                                                1
                                                                            }
                                                                        >
                                                                            {" "}
                                                                            Our
                                                                            cash
                                                                            flow
                                                                            Planning
                                                                            Solution
                                                                            was
                                                                            Awarded
                                                                            as
                                                                            The
                                                                            Best
                                                                            in
                                                                            its
                                                                            Category{" "}
                                                                        </Fade>{" "}
                                                                    </p>
                                                                    <div className="d-grid w-75 gap-2 d-md-flex justify-content-md-start m-3 mb-lg-3 d-flex">
                                                                        <Slide
                                                                            key={
                                                                                "2B"
                                                                            }
                                                                            left
                                                                            collapse
                                                                            when={
                                                                                activeSlide ==
                                                                                1
                                                                            }
                                                                        >
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-primary btn-lg me-md-2 btn-anime sliderBtn"
                                                                                to="/case-studies/6436899cfe78850035aa95d7"
                                                                            >
                                                                                <Link
                                                                                    to="/case-studies/6436899cfe78850035aa95d7"
                                                                                    style={{
                                                                                        textDecoration:
                                                                                            "none",
                                                                                    }}
                                                                                >
                                                                                    Know
                                                                                    More{" "}
                                                                                    <i className="i fa fa-arrow-right text-white"></i>
                                                                                </Link>
                                                                            </button>
                                                                        </Slide>
                                                                    </div>
                                                                    <div className="col-lg-2"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div
                                                            key={3}
                                                            className="h-100"
                                                            style={{
                                                                backgroundImage:
                                                                    "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/assets/images/slides/slide3.jpg')",
                                                                backgroundPosition:
                                                                    "center",
                                                                backgroundSize:
                                                                    "cover",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    backgroundColor:
                                                                        "",
                                                                }}
                                                                className="bg-overlay h-100 mx-auto row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 "
                                                            >
                                                                <div className="col-lg-6"></div>
                                                                <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12 p-md-5 p-lg-5 pt-lg-3">
                                                                    <p className="display-5  sliderText text-white px-sm-3">
                                                                        <Fade
                                                                            key={
                                                                                "3A"
                                                                            }
                                                                            right
                                                                            collapse
                                                                            when={
                                                                                activeSlide ==
                                                                                2
                                                                            }
                                                                        >
                                                                            Our
                                                                            Digital
                                                                            Campaign
                                                                            optimization
                                                                            solution
                                                                            improved
                                                                            Email
                                                                            Sales
                                                                            Conversion
                                                                            Rate
                                                                            by
                                                                            50%{" "}
                                                                        </Fade>
                                                                    </p>
                                                                    <div className="d-grid gap-2 d-flex justify-content-start mb-4 mb-lg-3">
                                                                        <Slide
                                                                            key={
                                                                                "3B"
                                                                            }
                                                                            right
                                                                            collapse
                                                                            when={
                                                                                activeSlide ==
                                                                                2
                                                                            }
                                                                        >
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-primary btn-lg me-md-2 btn-anime mx-2 sliderBtn"
                                                                                to="/case-studies/6436899cfe78850035aa95d7"
                                                                            >
                                                                                <Link
                                                                                    to="/case-studies/64413a4aa87b380034a93cf7"
                                                                                    style={{
                                                                                        textDecoration:
                                                                                            "none",
                                                                                    }}
                                                                                >
                                                                                    Learn
                                                                                    more{" "}
                                                                                    <i className="i fa fa-arrow-right text-white"></i>
                                                                                </Link>
                                                                            </button>
                                                                        </Slide>
                                                                    </div>
                                                                    {/* <div className="col-lg-2"></div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div
                                                            key={4}
                                                            className="h-100"
                                                            style={{
                                                                backgroundImage:
                                                                    "url('/assets/images/slides/slide4.jpg')",
                                                                backgroundPosition:
                                                                    "center",
                                                                backgroundSize:
                                                                    "cover",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    backgroundColor:
                                                                        "",
                                                                }}
                                                                className="bg-overlay h-100 mx-auto row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 "
                                                            >
                                                                {/* <div className="col-lg-2"></div> */}
                                                                <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12 p-3 p-lg-5 pt-lg-3">
                                                                    <p className="display-5 mx-4 sliderText text-white">
                                                                        {" "}
                                                                        <Fade
                                                                            key={
                                                                                "4A"
                                                                            }
                                                                            left
                                                                            collapse
                                                                            when={
                                                                                activeSlide ==
                                                                                3
                                                                            }
                                                                        >
                                                                            {" "}
                                                                            Data
                                                                            Delivers
                                                                            more
                                                                            with
                                                                            The
                                                                            Right
                                                                            Team{" "}
                                                                        </Fade>
                                                                    </p>
                                                                    <div className="d-grid mx-4  gap-2 d-flex justify-content-start mb-4 mb-lg-3">
                                                                        <Slide
                                                                            key={
                                                                                "4B"
                                                                            }
                                                                            left
                                                                            collapse
                                                                            when={
                                                                                activeSlide ==
                                                                                3
                                                                            }
                                                                        >
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-primary btn-lg me-md-2 btn-anime sliderBtn"
                                                                                to="/case-studies/6436899cfe78850035aa95d7"
                                                                            >
                                                                                <Link
                                                                                    to="/about-us"
                                                                                    style={{
                                                                                        textDecoration:
                                                                                            "none",
                                                                                    }}
                                                                                >
                                                                                    Learn
                                                                                    About
                                                                                    us{" "}
                                                                                    <i className="i fa fa-arrow-right text-white"></i>
                                                                                </Link>
                                                                            </button>
                                                                        </Slide>
                                                                    </div>
                                                                    <div className="col-lg-4"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </section>
                                            <section
                                                className="pt-0  elementor-section elementor-top-section elementor-element elementor-element-121e2d3f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                data-id="121e2d3f"
                                                data-element_type="section"
                                                id="inx_solutions"
                                            >
                                                <div className="pt-5 elementor-container elementor-column-gap-default">
                                                    <div className="elementor-row">
                                                        <div
                                                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4089ccc4"
                                                            data-id="4089ccc4"
                                                            data-element_type="column"
                                                        >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                <div className="elementor-widget-wrap">
                                                                    <div
                                                                        className="elementor-element elementor-element-3693ecc elementor-widget elementor-widget-stm_spacing"
                                                                        data-id="3693ecc"
                                                                        data-element_type="widget"
                                                                        data-widget_type="stm_spacing.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div
                                                                                className="stm-spacing"
                                                                                id="stm-spacing-641936089e602"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-bdf0302 main_htext elementor-widget elementor-widget-heading"
                                                                        data-id="bdf0302"
                                                                        data-element_type="widget"
                                                                        data-widget_type="heading.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <h2 className="elementor-heading-title elementor-size-default">
                                                                                Solutions
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                    <section
                                                                        className="elementor-section elementor-inner-section elementor-element elementor-element-0a2f7f4 elementor-hidden-phone elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                        data-id="0a2f7f4"
                                                                        data-element_type="section"
                                                                    >
                                                                        <div className="elementor-container elementor-column-gap-default">
                                                                            <div className="elementor-row">
                                                                                {solposts &&
                                                                                    solposts.map(
                                                                                        (
                                                                                            item,
                                                                                            index
                                                                                        ) => {
                                                                                            return (
                                                                                                <div
                                                                                                    key={
                                                                                                        index
                                                                                                    }
                                                                                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6cf4f820"
                                                                                                    data-id="6cf4f820"
                                                                                                    data-element_type="column"
                                                                                                >
                                                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                                                        <div className="elementor-widget-wrap">
                                                                                                            <div
                                                                                                                className="elementor-element elementor-element-7c6a14e8 elementor-widget elementor-widget-stm_icon_box"
                                                                                                                data-id="7c6a14e8"
                                                                                                                data-element_type="widget"
                                                                                                                data-widget_type="stm_icon_box.default"
                                                                                                            >
                                                                                                                <div className="elementor-widget-container">
                                                                                                                    <Link
                                                                                                                        to={
                                                                                                                            "/solutions/" +
                                                                                                                            item._id
                                                                                                                        }
                                                                                                                        className="icon_box  elementor-consulting-icon-box hexagon hexanog_animation style_1 icon_left clearfix"
                                                                                                                    >
                                                                                                                        <div
                                                                                                                            className="icon  font-color_default font-color_base_bg mr-2"
                                                                                                                            style={{
                                                                                                                                width: "78px",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <img
                                                                                                                                src={
                                                                                                                                    PF +
                                                                                                                                    item.icon
                                                                                                                                }
                                                                                                                                alt={
                                                                                                                                    item.title
                                                                                                                                }
                                                                                                                            />
                                                                                                                        </div>
                                                                                                                        <div className="icon_text">
                                                                                                                            <h5
                                                                                                                                style={{
                                                                                                                                    fontSize:
                                                                                                                                        "20px",
                                                                                                                                    lineHeight:
                                                                                                                                        "24px",
                                                                                                                                }}
                                                                                                                                className="font-color_secondary no_stripe"
                                                                                                                            >
                                                                                                                                {
                                                                                                                                    item.title
                                                                                                                                }
                                                                                                                            </h5>
                                                                                                                            <p className="arial-text">
                                                                                                                                {
                                                                                                                                    item.subtitle
                                                                                                                                }
                                                                                                                            </p>
                                                                                                                            <p>
                                                                                                                                <strong>
                                                                                                                                    <Link
                                                                                                                                        to={
                                                                                                                                            "/solutions/" +
                                                                                                                                            item._id
                                                                                                                                        }
                                                                                                                                        style={{
                                                                                                                                            textDecoration:
                                                                                                                                                "none",
                                                                                                                                            color: "black",
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        Read
                                                                                                                                        More
                                                                                                                                    </Link>
                                                                                                                                </strong>
                                                                                                                            </p>
                                                                                                                        </div>
                                                                                                                    </Link>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            );
                                                                                        }
                                                                                    )}
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                    <section
                                                                        className="elementor-section elementor-inner-section elementor-element elementor-element-5f3d52a elementor-hidden-desktop elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                        data-id="5f3d52a"
                                                                        data-element_type="section"
                                                                    >
                                                                        <div className="elementor-container elementor-column-gap-default">
                                                                            <div className="elementor-row">
                                                                                {solposts ? (
                                                                                    solposts.map(
                                                                                        (
                                                                                            sol,
                                                                                            index
                                                                                        ) => {
                                                                                            return (
                                                                                                <div
                                                                                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5827695"
                                                                                                    data-id={
                                                                                                        5827695
                                                                                                    }
                                                                                                    data-element_type="column"
                                                                                                >
                                                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                                                        <div className="elementor-widget-wrap">
                                                                                                            <div
                                                                                                                className="elementor-element elementor-element-4032548 elementor-widget elementor-widget-stm_icon_box"
                                                                                                                data-id={
                                                                                                                    4032548
                                                                                                                }
                                                                                                                data-element_type="widget"
                                                                                                                data-widget_type="stm_icon_box.default"
                                                                                                            >
                                                                                                                <div className="elementor-widget-container">
                                                                                                                    <Link
                                                                                                                        Link
                                                                                                                        to={
                                                                                                                            "/solutions/" +
                                                                                                                            sol._id
                                                                                                                        }
                                                                                                                        className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 "
                                                                                                                    >
                                                                                                                        <a
                                                                                                                            target="_self"
                                                                                                                            className="icon_box  elementor-consulting-icon-box hexagon style_1 icon_left clearfix"
                                                                                                                        >
                                                                                                                            <div
                                                                                                                                className="icon  font-color_default font-color_base_bg"
                                                                                                                                style={{
                                                                                                                                    width: "78px",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <img
                                                                                                                                    src={
                                                                                                                                        PF +
                                                                                                                                        sol.icon
                                                                                                                                    }
                                                                                                                                    alt={
                                                                                                                                        sol.title
                                                                                                                                    }
                                                                                                                                />{" "}
                                                                                                                            </div>
                                                                                                                            <div className="icon_text">
                                                                                                                                <h5
                                                                                                                                    style={{
                                                                                                                                        fontSize:
                                                                                                                                            "20px",
                                                                                                                                        lineHeight:
                                                                                                                                            "50px",
                                                                                                                                    }}
                                                                                                                                    className="font-color_secondary no_stripe"
                                                                                                                                >
                                                                                                                                    {
                                                                                                                                        sol.title
                                                                                                                                    }
                                                                                                                                </h5>
                                                                                                                            </div>
                                                                                                                        </a>
                                                                                                                    </Link>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            );
                                                                                        }
                                                                                    )
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
                                                                    </section>

                                                                    <section
                                                                        className="elementor-section elementor-inner-section elementor-element elementor-element-498ca58 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                        data-id="498ca58"
                                                                        data-element_type="section"
                                                                    >
                                                                        <div className="elementor-container elementor-column-gap-default">
                                                                            <div className="elementor-row">
                                                                                <div
                                                                                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-57dba71"
                                                                                    data-id="57dba71"
                                                                                    data-element_type="column"
                                                                                >
                                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                                        <div className="elementor-widget-wrap">
                                                                                            <div
                                                                                                className="elementor-element elementor-element-82cb655 elementor-align-center elementor-widget elementor-widget-button"
                                                                                                data-id="82cb655"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="button.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-button-wrapper icon_align_  ">
                                                                                                        <a
                                                                                                            href="#"
                                                                                                            className="elementor-button-link elementor-button elementor-size-sm"
                                                                                                            role="button"
                                                                                                        >
                                                                                                            <span className="elementor-button-content-wrapper">
                                                                                                                <span className="elementor-button-text">
                                                                                                                    Read
                                                                                                                    More
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </a>
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
                                            </section>
                                            <section
                                                className="pt-5 elementor-section elementor-top-section elementor-element elementor-element-43f2c65 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                data-id="43f2c65"
                                                data-element_type="section"
                                                data-settings='{"background_background":"classic"}'
                                            >
                                                <div className="elementor-container elementor-column-gap-default">
                                                    <div className="elementor-row">
                                                        <div
                                                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-586b333"
                                                            data-id="586b333"
                                                            data-element_type="column"
                                                        >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                <div className="elementor-widget-wrap">
                                                                    <div
                                                                        className="elementor-element elementor-element-c73281b elementor-widget elementor-widget-stm_spacing"
                                                                        data-id="c73281b"
                                                                        data-element_type="widget"
                                                                        data-widget_type="stm_spacing.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div
                                                                                className="stm-spacing"
                                                                                id="stm-spacing-6419360949b25"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-e5bf42f main_htext elementor-widget elementor-widget-heading"
                                                                        data-id="e5bf42f"
                                                                        data-element_type="widget"
                                                                        data-widget_type="heading.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <h2 className="elementor-heading-title elementor-size-default pt-4">
                                                                                Industries
                                                                                Served
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-4d0dc43 elementor-widget elementor-widget-stm_spacing"
                                                                        data-id="4d0dc43"
                                                                        data-element_type="widget"
                                                                        data-widget_type="stm_spacing.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div
                                                                                className="stm-spacing"
                                                                                id="stm-spacing-6419360963299"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <section
                                                                        className="elementor-section elementor-inner-section elementor-element elementor-element-0273704 home_indus elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                        data-element_type="section"
                                                                    >
                                                                        <div className="elementor-container elementor-column-gap-default">
                                                                            <div className="elementor-row">
                                                                                <div
                                                                                    className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-1e1fd070"
                                                                                    data-id="1e1fd070"
                                                                                    data-element_type="column"
                                                                                >
                                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                                        <div className="elementor-widget-wrap">
                                                                                            <div
                                                                                                className="elementor-element elementor-element-5e8204f elementor-widget elementor-widget-image"
                                                                                                data-id="5e8204f"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="image.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-image">
                                                                                                        <img
                                                                                                            width={
                                                                                                                64
                                                                                                            }
                                                                                                            height={
                                                                                                                64
                                                                                                            }
                                                                                                            alt="CPG"
                                                                                                            src="/assets/wp-content/uploads/2021/09/goods-1.png"
                                                                                                        />
                                                                                                        <noscript>
                                                                                                            &lt;img
                                                                                                            decoding="async"
                                                                                                            width="64"
                                                                                                            height="64"
                                                                                                            src="/assets/wp-content/uploads/2021/09/goods-1.png"
                                                                                                            className="attachment-full
                                                                                                            size-full"
                                                                                                            alt="CPG"
                                                                                                            sizes="(max-width:
                                                                                                            64px)
                                                                                                            100vw,
                                                                                                            64px"
                                                                                                            /&gt;
                                                                                                        </noscript>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="elementor-element elementor-element-d4651cf elementor-widget elementor-widget-text-editor"
                                                                                                data-id="d4651cf"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="text-editor.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-text-editor elementor-clearfix">
                                                                                                        <p>
                                                                                                            CPG
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-c6005c7"
                                                                                    data-id="c6005c7"
                                                                                    data-element_type="column"
                                                                                >
                                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                                        <div className="elementor-widget-wrap">
                                                                                            <div
                                                                                                className="elementor-element elementor-element-85f311a elementor-widget elementor-widget-image"
                                                                                                data-id="85f311a"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="image.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-image">
                                                                                                        <img
                                                                                                            width={
                                                                                                                64
                                                                                                            }
                                                                                                            height={
                                                                                                                64
                                                                                                            }
                                                                                                            alt="pharmacy"
                                                                                                            src="/assets/wp-content/uploads/2021/09/pharmacy.png"
                                                                                                        />
                                                                                                        <noscript>
                                                                                                            &lt;img
                                                                                                            width="64"
                                                                                                            height="64"
                                                                                                            src="/assets/wp-content/uploads/2021/09/pharmacy.png"
                                                                                                            className="attachment-full
                                                                                                            size-full"
                                                                                                            alt="pharmacy"
                                                                                                            sizes="(max-width:
                                                                                                            64px)
                                                                                                            100vw,
                                                                                                            64px"
                                                                                                            /&gt;
                                                                                                        </noscript>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="elementor-element elementor-element-5a52723 elementor-widget elementor-widget-text-editor"
                                                                                                data-id="5a52723"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="text-editor.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-text-editor elementor-clearfix">
                                                                                                        <p>
                                                                                                            Pharma
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-3f5c39e"
                                                                                    data-id="3f5c39e"
                                                                                    data-element_type="column"
                                                                                >
                                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                                        <div className="elementor-widget-wrap">
                                                                                            <div
                                                                                                className="elementor-element elementor-element-8dcd7e4 elementor-widget elementor-widget-image"
                                                                                                data-id="8dcd7e4"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="image.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-image">
                                                                                                        <img
                                                                                                            width={
                                                                                                                64
                                                                                                            }
                                                                                                            height={
                                                                                                                64
                                                                                                            }
                                                                                                            alt="retail"
                                                                                                            className="attachment-full size-full"
                                                                                                            src="/assets/wp-content/uploads/2021/09/shopping-cart-2.png"
                                                                                                        />
                                                                                                        <noscript>
                                                                                                            &lt;img
                                                                                                            width="64"
                                                                                                            height="64"
                                                                                                            src="/assets/wp-content/uploads/2021/09/shopping-cart-2.png"
                                                                                                            className="attachment-full
                                                                                                            size-full"
                                                                                                            alt="retail"
                                                                                                            sizes="(max-width:
                                                                                                            64px)
                                                                                                            100vw,
                                                                                                            64px"
                                                                                                            /&gt;
                                                                                                        </noscript>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="elementor-element elementor-element-c31ffee elementor-widget elementor-widget-text-editor"
                                                                                                data-id="c31ffee"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="text-editor.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-text-editor elementor-clearfix">
                                                                                                        <p>
                                                                                                            eCommerce
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-7173e68"
                                                                                    data-id="7173e68"
                                                                                    data-element_type="column"
                                                                                >
                                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                                        <div className="elementor-widget-wrap">
                                                                                            <div
                                                                                                className="elementor-element elementor-element-7e7187f elementor-widget elementor-widget-image"
                                                                                                data-id="7e7187f"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="image.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-image">
                                                                                                        <img
                                                                                                            width={
                                                                                                                64
                                                                                                            }
                                                                                                            height={
                                                                                                                64
                                                                                                            }
                                                                                                            alt="finance"
                                                                                                            className="attachment-full size-full"
                                                                                                            src="/assets/wp-content/uploads/2021/09/lending-1.png"
                                                                                                        />
                                                                                                        <noscript>
                                                                                                            &lt;img
                                                                                                            width="64"
                                                                                                            height="64"
                                                                                                            src="/assets/wp-content/uploads/2021/09/lending-1.png"
                                                                                                            className="attachment-full
                                                                                                            size-full"
                                                                                                            alt="finance"
                                                                                                            sizes="(max-width:
                                                                                                            64px)
                                                                                                            100vw,
                                                                                                            64px"
                                                                                                            /&gt;
                                                                                                        </noscript>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="elementor-element elementor-element-88680f0 elementor-widget elementor-widget-text-editor"
                                                                                                data-id="88680f0"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="text-editor.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-text-editor elementor-clearfix">
                                                                                                        <p>
                                                                                                            FinTech
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-7adc18f"
                                                                                    data-id="7adc18f"
                                                                                    data-element_type="column"
                                                                                >
                                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                                        <div className="elementor-widget-wrap">
                                                                                            <div
                                                                                                className="elementor-element elementor-element-4298a16 elementor-widget elementor-widget-image"
                                                                                                data-id="4298a16"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="image.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-image">
                                                                                                        <img
                                                                                                            width={
                                                                                                                64
                                                                                                            }
                                                                                                            height={
                                                                                                                64
                                                                                                            }
                                                                                                            alt="project management"
                                                                                                            className="attachment-full size-full"
                                                                                                            src="/assets/wp-content/uploads/2021/09/project-management-1.png"
                                                                                                        />
                                                                                                        <noscript>
                                                                                                            &lt;img
                                                                                                            width="64"
                                                                                                            height="64"
                                                                                                            src="/assets/wp-content/uploads/2021/09/project-management-1.png"
                                                                                                            className="attachment-full
                                                                                                            size-full"
                                                                                                            alt="project
                                                                                                            management"
                                                                                                            sizes="(max-width:
                                                                                                            64px)
                                                                                                            100vw,
                                                                                                            64px"
                                                                                                            /&gt;
                                                                                                        </noscript>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="elementor-element elementor-element-98a88f4 elementor-widget elementor-widget-text-editor"
                                                                                                data-id="98a88f4"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="text-editor.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-text-editor elementor-clearfix">
                                                                                                        <p>
                                                                                                            Technology
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-4ef75fc"
                                                                                    data-id="4ef75fc"
                                                                                    data-element_type="column"
                                                                                >
                                                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                                                        <div className="elementor-widget-wrap">
                                                                                            <div
                                                                                                className="elementor-element elementor-element-f983430 elementor-widget elementor-widget-image"
                                                                                                data-id="f983430"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="image.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-image">
                                                                                                        <img
                                                                                                            decoding="async"
                                                                                                            width={
                                                                                                                64
                                                                                                            }
                                                                                                            height={
                                                                                                                64
                                                                                                            }
                                                                                                            alt="oil & gas"
                                                                                                            className="attachment-full size-full"
                                                                                                            src="/assets/wp-content/uploads/2021/09/oil-platform-1.png"
                                                                                                        />
                                                                                                        <noscript>
                                                                                                            &lt;img
                                                                                                            decoding="async"
                                                                                                            width="64"
                                                                                                            height="64"
                                                                                                            src="/assets/wp-content/uploads/2021/09/oil-platform-1.png"
                                                                                                            className="attachment-full
                                                                                                            size-full"
                                                                                                            alt="oil
                                                                                                            &amp;amp;
                                                                                                            gas"
                                                                                                            sizes="(max-width:
                                                                                                            64px)
                                                                                                            100vw,
                                                                                                            64px"
                                                                                                            /&gt;
                                                                                                        </noscript>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="elementor-element elementor-element-5cbc99d elementor-widget elementor-widget-text-editor"
                                                                                                data-id="5cbc99d"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="text-editor.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container">
                                                                                                    <div className="elementor-text-editor elementor-clearfix">
                                                                                                        <p>
                                                                                                            Oil
                                                                                                            &amp;
                                                                                                            Gas
                                                                                                        </p>
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
                                            </section>
                                            <CaseStudiesSlider isHomePage />
                                            <section
                                                className="mt-5 elementor-section elementor-top-section elementor-element elementor-element-b9e3663 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                data-id="b9e3663"
                                                data-element_type="section"
                                            >
                                                <div className="elementor-container elementor-column-gap-default">
                                                    <div className="elementor-row">
                                                        <div
                                                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-aa9717e"
                                                            data-id="aa9717e"
                                                            data-element_type="column"
                                                        >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                <div className="elementor-widget-wrap">
                                                                    <div
                                                                        className="elementor-element elementor-element-097aec3 elementor-align-center elementor-widget elementor-widget-button"
                                                                        data-id="097aec3"
                                                                        data-element_type="widget"
                                                                        data-widget_type="button.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div className="elementor-button-wrapper icon_align_  ">
                                                                                <Link
                                                                                    to="/case-studies"
                                                                                    className="elementor-button-link elementor-button elementor-size-sm"
                                                                                    role="button"
                                                                                >
                                                                                    <span className="elementor-button-content-wrapper">
                                                                                        <span className="elementor-button-text">
                                                                                            Explore
                                                                                            More
                                                                                        </span>
                                                                                    </span>
                                                                                </Link>
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
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
