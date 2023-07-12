import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./CaseStudySingle.css";
import CaseStudiesSlider from "../../components/Case-Studies-Slider/Case-Studies-Slider";
import Api from "../../API/Api";

export default function CaseStudySingle() {
    const location = useLocation();
    const isEdit = location.pathname.split("/")[2];
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState(null);
    const [solution, setSolution] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const PF = process.env.REACT_APP_IMAGE_URL;
    useEffect(() => {
        const getPost = async () => {
            Api.getSingleCaseStudy(path).then((res) => {
                res && res.data && setPost(res.data);
                setLoaded(true);
            });
        };
        const getSolution = async () => {
            Api.getSingleSolution(post.expertise[0]).then((res) => {
                res && res.data && setSolution(res.data);
            });
        };
        getPost();
        setTimeout(() => {
            if (post && post.expertise[0]) {
                getSolution();
            }
        }, 2000);
    }, [path]);
    return (
        <>
            {post ? (
                <div id="main">
                    <div className="page_title">
                        <div className="container">
                            <div className="breadcrumbs">
                                {" "}
                                {/* Breadcrumb NavXT 7.1.0 */}{" "}
                                <span typeof="v:Breadcrumb">
                                    <a
                                        rel="v:url"
                                        property="v:title"
                                        title="Go to Inxite Out Pvt. Ltd.."
                                        href="https://inxiteout.ai"
                                        className="home"
                                    >
                                        Home
                                    </a>
                                </span>
                                <span>
                                    <i className="fa fa-angle-right" />
                                </span>
                                <span
                                    property="itemListElement"
                                    typeof="ListItem"
                                >
                                    <span property="name">Solutions</span>

                                    <meta property="position" content={2} />
                                </span>
                                <span>
                                    <i className="fa fa-angle-right" />
                                </span>
                                {solution ? (
                                    <span
                                        property="itemListElement"
                                        typeof="ListItem"
                                    >
                                        <Link
                                            to={"/solutions/" + solution._id}
                                            className="taxonomy stm_service_category"
                                        >
                                            <span property="name">
                                                {solution && solution.title}
                                            </span>
                                        </Link>
                                        <meta property="position" content={3} />
                                    </span>
                                ) : (
                                    ""
                                )}
                                <span>
                                    <i className="fa fa-angle-right" />
                                </span>
                                <span
                                    property="itemListElement"
                                    typeof="ListItem"
                                >
                                    <span property="name">{post.title}</span>
                                    <meta property="position" content={4} />
                                </span>
                            </div>
                            <h1
                                className="h2"
                                style={{
                                    fontSize: "36px",
                                    lineHeight: "45px",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    letterSpacing: "0px",
                                    wordSpacing: "0px",
                                    textTransform: "none",
                                }}
                            >
                                {post.title}
                            </h1>
                        </div>
                    </div>
                    <div className>
                        <div className="content-area ggg">
                            <article
                                id="post-8933"
                                className="post-8933 stm_service type-stm_service status-publish has-post-thumbnail hentry stm_service_category-customer-analytics stm_service_category-data-science stm_service_category-expertise stm_service_category-marketing-analytics stm_service_category-solutions"
                            >
                                <div className="entry-content consulting_elementor_wrapper">
                                    <div
                                        data-elementor-type="wp-post"
                                        data-elementor-id={8933}
                                        className="elementor elementor-8933"
                                    >
                                        <div className="elementor-inner">
                                            <div className="elementor-section-wrap">
                                                <section
                                                    className="elementor-section elementor-top-section elementor-element elementor-element-4cb63c38 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="4cb63c38"
                                                    data-element_type="section"
                                                >
                                                    <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-row d-flex align-items-center">
                                                            <div
                                                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ad2078f"
                                                                data-id="ad2078f"
                                                                data-element_type="column"
                                                            >
                                                                <div className="elementor-column-wrap elementor-element-populated">
                                                                    <div className="elementor-widget-wrap">
                                                                        <div
                                                                            className="elementor-element elementor-element-85783e2 elementor-widget elementor-widget-vc_custom_heading"
                                                                            data-id="85783e2"
                                                                            data-element_type="widget"
                                                                            data-widget_type="vc_custom_heading.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div className=" vc_custom_heading  consulting_heading_font  text_align_left">
                                                                                    <h4
                                                                                        style={{
                                                                                            fontSize:
                                                                                                "30px",
                                                                                            color: "#222222",
                                                                                            textAlign:
                                                                                                "left",
                                                                                            lineHeight:
                                                                                                "40px",
                                                                                            fontWeight: 700,
                                                                                        }}
                                                                                        className="consulting-custom-title"
                                                                                    >
                                                                                        {
                                                                                            post.subtitle
                                                                                        }
                                                                                    </h4>
                                                                                </div>{" "}
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="elementor-element elementor-element-1cd6071b elementor-widget elementor-widget-text-editor"
                                                                            data-id="1cd6071b"
                                                                            data-element_type="widget"
                                                                            data-widget_type="text-editor.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div className="elementor-text-editor elementor-clearfix font-desc">
                                                                                    <p
                                                                                        dangerouslySetInnerHTML={{
                                                                                            __html: post.desc,
                                                                                        }}
                                                                                    ></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2451b87a"
                                                                data-id="2451b87a"
                                                                data-element_type="column"
                                                            >
                                                                <div className="elementor-column-wrap elementor-element-populated">
                                                                    <div className="elementor-widget-wrap">
                                                                        <div
                                                                            className="elementor-element elementor-element-15121f8f elementor-widget elementor-widget-image"
                                                                            data-id="15121f8f"
                                                                            data-element_type="widget"
                                                                            data-widget_type="image.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div className="elementor-image">
                                                                                    <img
                                                                                        width={
                                                                                            500
                                                                                        }
                                                                                        height={
                                                                                            334
                                                                                        }
                                                                                        alt={
                                                                                            post.title
                                                                                        }
                                                                                        className="attachment-full size-full rounded shadow"
                                                                                        src={
                                                                                            PF +
                                                                                            post.photo
                                                                                        }
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                <section
                                                    style={{
                                                        backgroundColor: "#eee",
                                                    }}
                                                    className="elementor-section elementor-top-section elementor-element elementor-element-34ddead0 usecases elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="34ddead0"
                                                    data-element_type="section"
                                                    data-settings='{"background_background":"classic"}'
                                                >
                                                    <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-row">
                                                            <div
                                                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4a2c227"
                                                                data-id="4a2c227"
                                                                data-element_type="column"
                                                            >
                                                                <div className="elementor-column-wrap elementor-element-populated">
                                                                    <div className="elementor-widget-wrap">
                                                                        <div
                                                                            className="elementor-element elementor-element-5f4aeca0 elementor-widget elementor-widget-stm_spacing"
                                                                            data-id="5f4aeca0"
                                                                            data-element_type="widget"
                                                                            data-widget_type="stm_spacing.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div
                                                                                    className="stm-spacing"
                                                                                    id="stm-spacing-641944bb7d909"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="elementor-element elementor-element-fb59949 elementor-widget elementor-widget-vc_custom_heading"
                                                                            data-id="fb59949"
                                                                            data-element_type="widget"
                                                                            data-widget_type="vc_custom_heading.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div className=" vc_custom_heading  consulting_heading_font  text_align_center">
                                                                                    <h4
                                                                                        style={{
                                                                                            fontSize:
                                                                                                "30px",
                                                                                            color: "#222222",
                                                                                            textAlign:
                                                                                                "center",
                                                                                            lineHeight:
                                                                                                "40px",
                                                                                            fontWeight: 700,
                                                                                        }}
                                                                                        className="consulting-custom-title"
                                                                                    >
                                                                                        INXITE
                                                                                        OUT
                                                                                        APPROACH
                                                                                    </h4>
                                                                                </div>{" "}
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="elementor-element elementor-element-4549a7d4 elementor-widget elementor-widget-stm_spacing"
                                                                            data-id="4549a7d4"
                                                                            data-element_type="widget"
                                                                            data-widget_type="stm_spacing.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div
                                                                                    className="stm-spacing"
                                                                                    id="stm-spacing-641944bb84360"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <section
                                                                            className="elementor-section elementor-top-section elementor-element elementor-element-242d9993 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                            data-id="242d9993"
                                                                            data-element_type="section"
                                                                        >
                                                                            <div className="elementor-container elementor-column-gap-default">
                                                                                <div className="elementor-row">
                                                                                    <div
                                                                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6b15c6e8"
                                                                                        data-id="6b15c6e8"
                                                                                        data-element_type="column"
                                                                                    >
                                                                                        <div className="elementor-column-wrap elementor-element-populated">
                                                                                            <div className="elementor-widget-wrap">
                                                                                                {post.approach &&
                                                                                                    post.approach.map(
                                                                                                        (
                                                                                                            item,
                                                                                                            index
                                                                                                        ) => {
                                                                                                            return (
                                                                                                                <div
                                                                                                                    className="shadow-sm rounded elementor-element elementor-element-149c233f elementor-widget elementor-widget-stm_info_box"
                                                                                                                    data-id="149c233f"
                                                                                                                    data-element_type="widget"
                                                                                                                    data-widget_type="stm_info_box.default"
                                                                                                                >
                                                                                                                    <div
                                                                                                                        key={
                                                                                                                            index
                                                                                                                        }
                                                                                                                        className="elementor-widget-container "
                                                                                                                    >
                                                                                                                        <div className="infobox  elementor-consulting-info-box style_7 ">
                                                                                                                            {item.title ? (
                                                                                                                                <h4 className="infobox_title">
                                                                                                                                    {
                                                                                                                                        item.title
                                                                                                                                    }
                                                                                                                                </h4>
                                                                                                                            ) : (
                                                                                                                                ""
                                                                                                                            )}
                                                                                                                            <div className="infobox_content font-appr ">
                                                                                                                                <p
                                                                                                                                    dangerouslySetInnerHTML={{
                                                                                                                                        __html: item.subtitle,
                                                                                                                                    }}
                                                                                                                                ></p>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            );
                                                                                                        }
                                                                                                    )}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </section>
                                                                        <div
                                                                            className="elementor-element elementor-element-5b1826db elementor-widget elementor-widget-stm_spacing"
                                                                            data-id="5b1826db"
                                                                            data-element_type="widget"
                                                                            data-widget_type="stm_spacing.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div
                                                                                    className="stm-spacing"
                                                                                    id="stm-spacing-641944bb934b9"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                <section
                                                    className="elementor-section elementor-top-section elementor-element elementor-element-8024daf cas_results elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="8024daf"
                                                    data-element_type="section"
                                                >
                                                    <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-row">
                                                            <div
                                                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b47e1c8"
                                                                data-id="b47e1c8"
                                                                data-element_type="column"
                                                            >
                                                                <div className="elementor-column-wrap elementor-element-populated">
                                                                    <div className="elementor-widget-wrap">
                                                                        <div
                                                                            className="elementor-element elementor-element-bf33b51 elementor-widget elementor-widget-vc_custom_heading"
                                                                            data-id="bf33b51"
                                                                            data-element_type="widget"
                                                                            data-widget_type="vc_custom_heading.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div className=" vc_custom_heading  consulting_heading_font  text_align_left">
                                                                                    <h4
                                                                                        style={{
                                                                                            fontSize:
                                                                                                "30px",
                                                                                            color: "#222222",
                                                                                            textAlign:
                                                                                                "left",
                                                                                            lineHeight:
                                                                                                "40px",
                                                                                            fontWeight: 700,
                                                                                        }}
                                                                                        className="consulting-custom-title"
                                                                                    >
                                                                                        RESULT
                                                                                    </h4>
                                                                                </div>{" "}
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="elementor-element elementor-element-02fcbc1 elementor-widget elementor-widget-text-editor"
                                                                            data-id="02fcbc1"
                                                                            data-element_type="widget"
                                                                            data-widget_type="text-editor.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div className="elementor-text-editor elementor-clearfix font-desc">
                                                                                    <p
                                                                                        dangerouslySetInnerHTML={{
                                                                                            __html: post.result,
                                                                                        }}
                                                                                    ></p>
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
                            </article>{" "}
                            {/* #post-## */}
                        </div>
                    </div>{" "}
                    {/*.container*/}
                </div>
            ) : (
                <>
                    {!loaded && (
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
                </>
            )}
            <div style={{ backgroundColor: "#F5F5F5" }} className="">
                <CaseStudiesSlider />
            </div>
        </>
    );
}
