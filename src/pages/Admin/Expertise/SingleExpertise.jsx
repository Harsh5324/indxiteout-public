import { useLocation, useParams } from "react-router";
import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Moment from "moment";
import CaseStudiesSlider from "../../../components/Case-Studies-Slider/Case-Studies-Slider";
import Api from "../../../API/Api";

export default function SingleExpertise() {
    const { ID } = useParams();

    const location = useLocation();
    const searchText = useRef();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState("");
    const PF = process.env.REACT_APP_IMAGE_URL;

    useEffect(() => {
        const getPost = async () => {
            try {
                Api.getSingleExpertise(path).then((res) => {
                    res && res.data && setPost(res.data);
                    console.log(
                        "🚀 ~ file: SingleExpertise.jsx:22 ~ Api.getSingleExpertise ~ res:",
                        res.data
                    );
                });
            } catch (err) {
                console.log(
                    "🚀 ~ file: SingleExpertise.jsx:28 ~ getPost ~ err:",
                    err
                );
            }
        };
        getPost();
    }, [path]);

    return (
        <div id="main">
            <div className="page_title">
                <div className="container">
                    <div className="breadcrumbs">
                        {/* Breadcrumb NavXT 7.1.0 */}
                        <span typeof="v:Breadcrumb">
                            <Link to="/" className="home">
                                Home
                            </Link>
                        </span>
                        <span>
                            <i className="fa fa-angle-right" />
                        </span>
                        <span property="itemListElement" typeof="ListItem">
                            <span property="name">{post.title}</span>
                            <meta property="position" content={2} />
                        </span>{" "}
                    </div>
                    <h1 className="h2">{post.title}</h1>
                </div>
            </div>
            <div className>
                <div className="content-area">
                    <article
                        id="post-7329"
                        className="consulting_elementor_wrapper post-7329 page type-page status-publish hentry"
                    >
                        <div className="entry-content">
                            <div className="text_block consulting_elementor_wrapper clearfix">
                                <div
                                    data-elementor-type="wp-page"
                                    data-elementor-id="7329"
                                    className="elementor elementor-7329"
                                >
                                    <div className="elementor-inner">
                                        <div className="elementor-section-wrap">
                                            <section
                                                className="pb-5 elementor-section elementor-top-section elementor-element elementor-element-37ee6ff elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                data-id="37ee6ff"
                                                data-element_type="section"
                                            >
                                                <div className="elementor-container elementor-column-gap-default">
                                                    <div className="elementor-row">
                                                        <div
                                                            className="elementor-column col-lg-7 col-md-7  col-sm-12  col-xs-12  elementor-top-column elementor-element elementor-element-a5dd0cf"
                                                            data-id="a5dd0cf"
                                                            data-element_type="column"
                                                        >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                <div className="elementor-widget-wrap">
                                                                    <div
                                                                        className="elementor-element elementor-element-5f3c26d elementor-widget elementor-widget-text-editor"
                                                                        data-id="5f3c26d"
                                                                        data-element_type="widget"
                                                                        data-widget_type="text-editor.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div className="elementor-text-editor elementor-clearfix expertise-text m-0">
                                                                                <p>
                                                                                    {
                                                                                        post.subtitle
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-1cc74dd elementor-widget elementor-widget-text-editor"
                                                                        data-id="1cc74dd"
                                                                        data-element_type="widget"
                                                                        data-widget_type="text-editor.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div className="elementor-text-editor elementor-clearfix expertise-ntext">
                                                                                <p>
                                                                                    {
                                                                                        post.desc
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="elementor-column col-lg-5 p-0 col-md-5 col-sm-12  col-xs-12 elementor-col-50 elementor-top-column elementor-element elementor-element-ddbe9ba"
                                                            data-id="ddbe9ba"
                                                            data-element_type="column"
                                                        >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                <div className="elementor-widget-wrap p-0">
                                                                    <div
                                                                        className="elementor-element elementor-element-532f3f0 elementor-widget elementor-widget-image"
                                                                        data-id="532f3f0"
                                                                        data-element_type="widget"
                                                                        data-widget_type="image.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div className="elementor-image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width="auto"
                                                                                    height={
                                                                                        467
                                                                                    }
                                                                                    alt={
                                                                                        post.title
                                                                                    }
                                                                                    className="attachment-full rounded size-full"
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
                                                className="elementor-section elementor-top-section elementor-element elementor-element-20569c74 usecases elementor-section-boxed elementor-section-height-default elementor-section-height-default py-5"
                                                data-id="20569c74"
                                                data-element_type="section"
                                                style={{
                                                    backgroundColor: "#F5F5F5",
                                                }}
                                            >
                                                <div className="elementor-container elementor-column-gap-default py-5">
                                                    <div className="elementor-row">
                                                        <div
                                                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-60259f94"
                                                            data-id="60259f94"
                                                            data-element_type="column"
                                                        >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                <div className="elementor-widget-wrap">
                                                                    <div
                                                                        className="elementor-element elementor-element-327670dc elementor-widget elementor-widget-stm_spacing"
                                                                        data-id="327670dc"
                                                                        data-element_type="widget"
                                                                        data-widget_type="stm_spacing.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div
                                                                                className="stm-spacing"
                                                                                id="stm-spacing-641917a66a9e2"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-2c69ae42 main_htext elementor-widget elementor-widget-heading"
                                                                        data-id="2c69ae42"
                                                                        data-element_type="widget"
                                                                        data-widget_type="heading.default"
                                                                    >
                                                                        <div className="elementor-widget-container d-flex justify-content-center">
                                                                            <h2
                                                                                className="elementor-heading-title elementor-size-default"
                                                                                style={{
                                                                                    fontSize:
                                                                                        "40px",
                                                                                    fontFamily:
                                                                                        "ubuntu",
                                                                                }}
                                                                            >
                                                                                Offerings
                                                                            </h2>{" "}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-33dcf6f6 elementor-widget elementor-widget-stm_spacing"
                                                                        data-id="33dcf6f6"
                                                                        data-element_type="widget"
                                                                        data-widget_type="stm_spacing.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div
                                                                                className="stm-spacing"
                                                                                id="stm-spacing-641917a67bb3d"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <section
                                                                        className="elementor-section elementor-inner-section elementor-element elementor-element-7ef4829 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                        data-id="7ef4829"
                                                                        data-element_type="section"
                                                                    >
                                                                        <div className="elementor-container elementor-column-gap-default d-flex justify-content-center">
                                                                            <div className="elementor-row row">
                                                                                {post &&
                                                                                post.offerings
                                                                                    ? post.offerings.map(
                                                                                          (
                                                                                              offering,
                                                                                              index
                                                                                          ) => {
                                                                                              return offering.title &&
                                                                                                  offering.subtitle ? (
                                                                                                  <div
                                                                                                      className="align-items-stretch  col-lg-4 col-md-4 col-sm-6 col-xs-12 elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1e1c1c4"
                                                                                                      data-id="1e1c1c4"
                                                                                                      data-element_type="column"
                                                                                                      style={{
                                                                                                          marginBottom: 8,
                                                                                                      }}
                                                                                                  >
                                                                                                      <div
                                                                                                          style={{
                                                                                                              border: "none ",
                                                                                                          }}
                                                                                                          className=" align-items-stretch card mb-3 elementor-column-wrap elementor-element-populated"
                                                                                                      >
                                                                                                          <div className="elementor-widget-wrap p-0">
                                                                                                              <div
                                                                                                                  className="elementor-element elementor-element-26f691f2 elementor-widget elementor-widget-stm_info_box"
                                                                                                                  data-id="26f691f2"
                                                                                                                  data-element_type="widget"
                                                                                                                  data-widget_type="stm_info_box.default"
                                                                                                              >
                                                                                                                  <div className="elementor-widget-container">
                                                                                                                      <div className="infobox   elementor-consulting-info-box style_7">
                                                                                                                          <h4
                                                                                                                              className="infobox_title"
                                                                                                                              style={{
                                                                                                                                  fontWeight:
                                                                                                                                      "700",
                                                                                                                              }}
                                                                                                                          >
                                                                                                                              {
                                                                                                                                  offering.title
                                                                                                                              }
                                                                                                                          </h4>
                                                                                                                          <div className="infobox_content mb-0">
                                                                                                                              <p
                                                                                                                                  className="mb-0"
                                                                                                                                  style={{
                                                                                                                                      fontFamily:
                                                                                                                                          "karla",
                                                                                                                                      fontSize:
                                                                                                                                          "17px",
                                                                                                                                  }}
                                                                                                                              >
                                                                                                                                  {
                                                                                                                                      offering.subtitle
                                                                                                                                  }
                                                                                                                              </p>
                                                                                                                          </div>
                                                                                                                      </div>
                                                                                                                  </div>
                                                                                                              </div>
                                                                                                              <div
                                                                                                                  className="elementor-element elementor-element-58df4431 elementor-widget elementor-widget-stm_spacing"
                                                                                                                  data-id="58df4431"
                                                                                                                  data-element_type="widget"
                                                                                                                  data-widget_type="stm_spacing.default"
                                                                                                              >
                                                                                                                  <div className="elementor-widget-container">
                                                                                                                      <div
                                                                                                                          className="stm-spacing"
                                                                                                                          id="stm-spacing-641917a6a6f70"
                                                                                                                      />
                                                                                                                  </div>
                                                                                                              </div>
                                                                                                          </div>
                                                                                                      </div>
                                                                                                  </div>
                                                                                              ) : (
                                                                                                  ""
                                                                                              );
                                                                                          }
                                                                                      )
                                                                                    : ""}
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                    <div
                                                                        className="elementor-element elementor-element-141c9257 elementor-widget elementor-widget-stm_spacing"
                                                                        data-id="141c9257"
                                                                        data-element_type="widget"
                                                                        data-widget_type="stm_spacing.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div
                                                                                className="stm-spacing"
                                                                                id="stm-spacing-641917a742379"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <CaseStudiesSlider cat={ID} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>{" "}
            {/*.container*/}
        </div>
    );
}
