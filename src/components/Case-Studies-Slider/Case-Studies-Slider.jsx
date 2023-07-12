import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Casestudy.css";
export default function CaseStudiesSlider({ cat, isHomePage }) {
    console.log(
        "🚀 ~ file: Case-Studies-Slider.jsx:11 ~ CaseStudiesSlider ~ cat:",
        cat
    );
    const [posts, setPosts] = useState(null);
    const PF = process.env.REACT_APP_IMAGE_URL;

    useEffect(() => {
        SwiperCore.use([Autoplay]);
        const fetchPosts = async () => {
            let path = process.env.REACT_APP_BASE_URL + "/caseStudies";
            if (cat) {
                path += `?cat=${cat}`;
            } else if (isHomePage) {
                path += `?isHomePage=${true}`;
            }
            const res = await axios.get(path);
            let response = res.data;
            response.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            response = response.slice(0, 10);
            setPosts(response);
        };
        fetchPosts();
    }, [cat, isHomePage]);

    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-d290862 case_stu elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="d290862"
            data-element_type="section"
        >
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3515a6c"
                        data-id="3515a6c"
                        data-element_type="column"
                    >
                        <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                                <div
                                    className="elementor-element elementor-element-72a4cd8 elementor-widget elementor-widget-html"
                                    data-id="72a4cd8"
                                    data-element_type="widget"
                                    data-widget_type="html.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div
                                            data-elementor-type="section"
                                            data-elementor-id={10089}
                                            className="elementor elementor-10089"
                                        >
                                            <div className="elementor-section-wrap">
                                                <section
                                                    className="elementor-section elementor-top-section elementor-element elementor-element-57642921 case_stu elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id={57642921}
                                                    data-element_type="section"
                                                >
                                                    <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-row">
                                                            <div
                                                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2ca26cbc"
                                                                data-id="2ca26cbc"
                                                                data-element_type="column"
                                                            >
                                                                <div className="elementor-column-wrap elementor-element-populated">
                                                                    <div className="elementor-widget-wrap">
                                                                        <div
                                                                            className="elementor-element elementor-element-2cd8b677 elementor-widget elementor-widget-stm_spacing"
                                                                            data-id="2cd8b677"
                                                                            data-element_type="widget"
                                                                            data-widget_type="stm_spacing.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div
                                                                                    className="stm-spacing"
                                                                                    id="stm-spacing-6419360a54d0f"
                                                                                ></div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="elementor-element my-5 elementor-element-581e6031 main_htext elementor-widget elementor-widget-heading"
                                                                            data-id="581e6031"
                                                                            data-element_type="widget"
                                                                            data-widget_type="heading.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                                    Case
                                                                                    Studies
                                                                                </h2>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="elementor-element elementor-element-7e828e31 elementor-arrows-position-outside elementor-widget elementor-widget-image-carousel"
                                                                            data-id="7e828e31"
                                                                            data-element_type="widget"
                                                                            data-settings='{"slides_to_show":"3","slides_to_scroll":"1","navigation":"arrows","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","autoplay_speed":5000,"infinite":"yes","speed":500,"image_spacing_custom":{"unit":"px","size":20,"sizes":[]}}'
                                                                            data-widget_type="image-carousel.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div
                                                                                    className=" swiper-container"
                                                                                    dir="ltr"
                                                                                >
                                                                                    <Swiper
                                                                                        breakpoints={{
                                                                                            0: {
                                                                                                slidesPerView: 1,
                                                                                                spaceBetween: 0,
                                                                                            },
                                                                                            640: {
                                                                                                slidesPerView: 1,
                                                                                                spaceBetween: 0,
                                                                                            },
                                                                                            768: {
                                                                                                slidesPerView: 2,
                                                                                                spaceBetween: 40,
                                                                                            },
                                                                                            1024: {
                                                                                                slidesPerView: 3,
                                                                                                spaceBetween: 50,
                                                                                            },
                                                                                        }}
                                                                                        modules={[
                                                                                            Navigation,
                                                                                            Pagination,
                                                                                            Scrollbar,
                                                                                            A11y,
                                                                                            Autoplay,
                                                                                        ]}
                                                                                        spaceBetween={
                                                                                            0
                                                                                        }
                                                                                        slidesPerView={
                                                                                            1
                                                                                        }
                                                                                        pagination={{
                                                                                            clickable: true,
                                                                                        }}
                                                                                        loop={
                                                                                            true
                                                                                        }
                                                                                        autoplay={{
                                                                                            delay: 1000,
                                                                                            disableOnInteraction: true,
                                                                                        }}
                                                                                        onSlideChange={() =>
                                                                                            console.log(
                                                                                                "slide change"
                                                                                            )
                                                                                        }
                                                                                        onSwiper={(
                                                                                            swiper
                                                                                        ) =>
                                                                                            console.log(
                                                                                                swiper
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        {posts ? (
                                                                                            posts.map(
                                                                                                (
                                                                                                    post,
                                                                                                    index
                                                                                                ) => {
                                                                                                    return (
                                                                                                        <SwiperSlide
                                                                                                            key={
                                                                                                                index
                                                                                                            }
                                                                                                            className="swiper-slide col-lg-4 col-md-4 col-sm-6 col-xs-12 p-4 card  h-100"
                                                                                                        >
                                                                                                            <Link
                                                                                                                to={
                                                                                                                    "/case-studies/" +
                                                                                                                    post.title.replace(
                                                                                                                        /\s/g,
                                                                                                                        "-"
                                                                                                                    )
                                                                                                                }
                                                                                                            >
                                                                                                                <figure className="swiper-slide-inner pb-2 h-100">
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
                                                                                                                        src={
                                                                                                                            PF +
                                                                                                                            post.photo
                                                                                                                        }
                                                                                                                        style={{
                                                                                                                            height: 200,
                                                                                                                            width: "100%",
                                                                                                                        }}
                                                                                                                    />
                                                                                                                    <figcaption
                                                                                                                        className="elementor-image-carousel-caption card_height"
                                                                                                                        style={{
                                                                                                                            fontFamily:
                                                                                                                                "karla",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        {
                                                                                                                            post.title
                                                                                                                        }
                                                                                                                    </figcaption>
                                                                                                                </figure>
                                                                                                            </Link>
                                                                                                        </SwiperSlide>
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
                                                                                    </Swiper>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="elementor-element elementor-element-7275cede elementor-widget elementor-widget-stm_spacing"
                                                                            data-id="7275cede"
                                                                            data-element_type="widget"
                                                                            data-widget_type="stm_spacing.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <div
                                                                                    className="stm-spacing"
                                                                                    id="stm-spacing-6419360a741f7"
                                                                                ></div>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
