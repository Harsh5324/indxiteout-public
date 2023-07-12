import "./footer.css";
import { Link } from "react-router-dom";
import React, {useEffect,useState} from 'react';
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import Api from "../../API/Api";


export default function Footer(){
    const [ expertise, setExpPosts ] = useState([]);
    const [ solutions, setSolPosts ] = useState([]);

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    //  console.log('splitLocation',splitLocation)
    const clickEvent = () => {
        var element = document.querySelector(".page_title");
        // smooth scroll to element and align it at the bottom
        element.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }
    const getExpertise = () => {
        // API CALL START
        Api.getExpertise().then((res) =>{
			res && res.data && setExpPosts(res.data)
		  })
      // API CALL ENDED
        }
        const getSolutions = () => {
            // API CALL START
            Api.getSolutions().then((res) =>{
                res && res.data && setSolPosts(res.data)
              })
          // API CALL ENDED
            }

        useEffect(()=>{	
            getExpertise()
            getSolutions()
          },[])
    return (
        <div>
            <footer itemscope="itemscope" id="colophon" role="contentinfo">
                <div className='footer-width-fixer '>
                    <div data-elementor-type="wp-post" data-elementor-id="6931" className="elementor elementor-6931">
                        <div className="elementor-inner">
                            <div className="elementor-section-wrap">
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-ae5eb5e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="ae5eb5e" data-element_type="section"
                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row">
                                            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e360ec8"
                                                data-id="e360ec8" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-8a65618 elementor-widget elementor-widget-text-editor"
                                                            data-id="8a65618" data-element_type="widget"
                                                            data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-text-editor elementor-clearfix">
                                                                    <p style={{fontFamily: "karla, arial", fontSize: '22px'}}>HAVE AN ANALYTICS NEED OR WANT TO KNOW MORE ABOUT OUR
                                                                        SERVICES?</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e5a2ccf"
                                                data-id="e5a2ccf" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-7671245 elementor-align-center elementor-widget elementor-widget-button"
                                                            data-id="7671245" data-element_type="widget"
                                                            data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper icon_align_  ">
                                                                    <a href="javascript:void(0)"
                                                                        className="elementor-button-link elementor-button elementor-size-lg"
                                                                        role="button">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text"><Link to="/get-in-touch" style={{textDecoration: "none", color: "black" }}> Get in Touch</Link>
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
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-ceb4437 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="ceb4437" data-element_type="section"
                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row">
                                            <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-feea284 elementor-hidden-phone"
                                                data-id="feea284" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-48f3980 elementor-widget elementor-widget-heading"
                                                            data-id="48f3980" data-element_type="widget"
                                                            data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                    Expertise</h2>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-30a23b7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                            data-id="30a23b7" data-element_type="widget"
                                                            data-widget_type="icon-list.default">
                                                            <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                
                                                                    {   
                                                                        expertise && expertise.map((exp, i) => {
                                                                            return   <li className="elementor-icon-list-item">
                                                                            
                                                                                <span className="elementor-icon-list-icon">
                                                                                    <i aria-hidden="true"
                                                                                        className=" stm-lnr-chevron-right"></i>
                                                                                </span>
                                                                                <span className="elementor-icon-list-text" >
                                                                                 <Link onClick={clickEvent} style={{textDecoration: "none", color: "white", textDecorationColor: "white"}} className="" to={'/expertise/'+exp._id}  > {exp.title} </Link></span>
                                                                               
                                                                            </li>  
                                                                        })
                                                                    }  
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-416ae95 elementor-hidden-phone"
                                                data-id="416ae95" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-4ab8eaf elementor-widget elementor-widget-heading"
                                                            data-id="4ab8eaf" data-element_type="widget"
                                                            data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                    Solutions</h2>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-d47aa7b elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                            data-id="d47aa7b" data-element_type="widget"
                                                            data-widget_type="icon-list.default">
                                                            <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                    <li className="elementor-icon-list-item">
                                                                        <a href="sales-analytics/index.html">

                                                                            <span className="elementor-icon-list-icon">
                                                                                <i aria-hidden="true"
                                                                                    className=" stm-lnr-chevron-right"></i>
                                                                            </span>
                                                                            <span className="elementor-icon-list-text">Sales
                                                                                Analytics</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="elementor-icon-list-item">
                                                                        <a href="marketing-analytics/index.html">

                                                                            <span className="elementor-icon-list-icon">
                                                                                <i aria-hidden="true"
                                                                                    className=" stm-lnr-chevron-right"></i>
                                                                            </span>
                                                                            <span className="elementor-icon-list-text">Marketing
                                                                                Analytics</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="elementor-icon-list-item">
                                                                        <a href="customer-analytics/index.html">

                                                                            <span className="elementor-icon-list-icon">
                                                                                <i aria-hidden="true"
                                                                                    className=" stm-lnr-chevron-right"></i>
                                                                            </span>
                                                                            <span className="elementor-icon-list-text">Customer
                                                                                Analytics</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-fcf3ead elementor-hidden-phone"
                                                data-id="fcf3ead" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-3309be3 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                            data-id="3309be3" data-element_type="widget"
                                                            data-widget_type="icon-list.default">
                                                            <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                    <li className="elementor-icon-list-item">
                                                                        <a href="finance-analytics/index.html">

                                                                            <span className="elementor-icon-list-icon">
                                                                                <i aria-hidden="true"
                                                                                    className=" stm-lnr-chevron-right"></i>
                                                                            </span>
                                                                            <span className="elementor-icon-list-text">Finance
                                                                                Analytics</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="elementor-icon-list-item">
                                                                        <a href="supply-chain-analytics/index.html">

                                                                            <span className="elementor-icon-list-icon">
                                                                                <i aria-hidden="true"
                                                                                    className=" stm-lnr-chevron-right"></i>
                                                                            </span>
                                                                            <span className="elementor-icon-list-text">Supply
                                                                                Chain Analytics</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="elementor-icon-list-item">
                                                                        <a href="operations-analytics/index.html">

                                                                            <span className="elementor-icon-list-icon">
                                                                                <i aria-hidden="true"
                                                                                    className=" stm-lnr-chevron-right"></i>
                                                                            </span>
                                                                            <span
                                                                                className="elementor-icon-list-text">Operations
                                                                                Analytics</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e7ce431"
                                                data-id="e7ce431" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-5d21216 elementor-widget elementor-widget-heading"
                                                            data-id="5d21216" data-element_type="widget"
                                                            data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                    About Us</h2>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-27e5c84 elementor-widget elementor-widget-text-editor"
                                                            data-id="27e5c84" data-element_type="widget"
                                                            data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-text-editor elementor-clearfix">
                                                                    <p>We are an advanced analytics and AI consulting
                                                                        company enabling organizations to extract value from
                                                                        data using advanced AI and Machine Learning
                                                                        techniques.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-7441e62 elementor-widget elementor-widget-text-editor"
                                                            data-id="7441e62" data-element_type="widget"
                                                            data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-text-editor elementor-clearfix">
                                                                    <p><a
                                                                            href="mailto:sales@inxiteout.ai">sales@inxiteout.ai</a>
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
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-2359dea elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="2359dea" data-element_type="section"
                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row row">
                                            <div className="col-lg-3 elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-a1d26cd elementor-hidden-phone"
                                                data-id="a1d26cd" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-1b52213 elementor-widget elementor-widget-heading"
                                                            data-id="1b52213" data-element_type="widget"
                                                            data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                    Expertise</h2>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-93c88e5 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                            data-id="93c88e5" data-element_type="widget"
                                                            data-widget_type="icon-list.default">
                                                            <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                {   
                                                                        expertise && expertise.map((exp, i) => {
                                                                            return   <li className="elementor-icon-list-item">
                                                                            <a href="">
                                                                                <span className="elementor-icon-list-icon">
                                                                                    <i aria-hidden="true"
                                                                                        className=" stm-lnr-chevron-right"></i>
                                                                                </span>
                                                                                <span className="elementor-icon-list-text ">
                                                                                 <Link onClick={clickEvent} className="ttt" style={{textDecoration: "none", color: "white", textDecorationColor: "white", fontFamily: "karla, arial"}} to={'/expertise/'+exp._id}> {exp.title} </Link></span>
                                                                            </a>
                                                                            </li>  
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{width:'40%'}} className="col-lg-4 elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9430b43 elementor-hidden-phone"
                                                data-id="9430b43" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-22a9824 elementor-widget elementor-widget-heading"
                                                            data-id="22a9824" data-element_type="widget"
                                                            data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                    Solutions</h2>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-9063744 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                            data-id="9063744" data-element_type="widget"
                                                            data-widget_type="icon-list.default">
                                                            <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items two-cols-list">
                                                                {   
                                                                        solutions && solutions.map((sol, i) => {
                                                                            return   <li className="elementor-icon-list-item w-50">
                                                                            <a href="">
                                                                                <span className="elementor-icon-list-icon">
                                                                                    <i aria-hidden="true"
                                                                                        className=" stm-lnr-chevron-right"></i>
                                                                                </span>
                                                                                <span className="elementor-icon-list-text ">
                                                                                 <Link onClick={clickEvent} className="ttt" style={{textDecoration: "none", color: "white",  fontFamily: "karla, arial"}} to={'/solutions/'+sol._id}> {sol.title} </Link></span>
                                                                            </a>
                                                                            </li>  
                                                                        })
                                                                    }  
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e135f48"
                                                data-id="e135f48" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <section
                                                            className="elementor-section elementor-inner-section elementor-element elementor-element-80cf822 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                            data-id="80cf822" data-element_type="section">
                                                            <div className="elementor-container elementor-column-gap-default">
                                                                <div className="elementor-row">
                                                                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c203414"
                                                                        data-id="c203414" data-element_type="column">
                                                                        <div
                                                                            className="elementor-column-wrap elementor-element-populated">
                                                                            <div className="elementor-widget-wrap">
                                                                                <div className="elementor-element elementor-element-ba4e9df duns-logo elementor-widget elementor-widget-heading"
                                                                                    data-id="ba4e9df"
                                                                                    data-element_type="widget"
                                                                                    data-widget_type="heading.default">
                                                                                    <div className="elementor-widget-container">
                                                                                        <h2
                                                                                            className="elementor-heading-title elementor-size-default mb-5">
                                                                                            About Us
                                                                                        </h2>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-53ca645"
                                                                        data-id="53ca645" data-element_type="column">
                                                                        <div
                                                                            className="elementor-column-wrap elementor-element-populated">
                                                                            <div className="elementor-widget-wrap">
                                                                                <div className="elementor-element elementor-element-f18eeba footer-dun elementor-widget elementor-widget-text-editor"
                                                                                    data-id="f18eeba"
                                                                                    data-element_type="widget"
                                                                                    data-widget_type="text-editor.default">
                                                                                    <div className="elementor-widget-container">
                                                                                        <div
                                                                                            className="elementor-text-editor elementor-clearfix">
                                                                                            <p>
                                                                                                <script
                                                                                                    ></script>
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
                                                        <div className="elementor-element elementor-element-d719242 elementor-widget elementor-widget-text-editor"
                                                            data-id="d719242" data-element_type="widget"
                                                            data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-text-editor elementor-clearfix ">
                                                                    <p>We are an advanced analytics and AI consulting
                                                                        company enabling organizations to extract value from
                                                                        data using advanced AI and Machine Learning
                                                                        techniques.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-0910cc5 elementor-widget elementor-widget-text-editor"
                                                            data-id="0910cc5" data-element_type="widget"
                                                            data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-text-editor elementor-clearfix m-0 p-0">
                                                                    <p><a style={{textDecoration: "none", color: "#fde428", fontFamily: "karla, arial", fontSize: " 14px"}}
                                                                            href="mailto:sales@inxiteout.ai">sales@inxiteout.ai</a>
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
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-c3ddae2 elementor-section-boxed elementor-section-height-default elementor-section-height-default m-0 p-0"
                                    data-id="c3ddae2" data-element_type="section"
                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row">
                                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-164e0ee"
                                                data-id="164e0ee" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-fdb7065 elementor-widget elementor-widget-text-editor"
                                                            data-id="fdb7065" data-element_type="widget"
                                                            data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-text-editor elementor-clearfix" >
                                                                    <p className="d-flex justify-content-center"> 
                                                                    <a
                                                                            style={{color: "#ffffff;"}}
                                                                            href="#"> <Link style={{textDecoration: "none", color: "white", textDecorationColor: "white", fontFamily: "karla, arial"}} >Copyright © 2022 </Link></a>
                                                                        <span style={{color: "#275d91"}}> | </span>
                                                                        <a
                                                                            style={{color: "#ffffff;"}}
                                                                            href="#"> <Link style={{textDecoration: "none", color: "white", textDecorationColor: "white", fontFamily: "karla, arial"}}>All Rights Reserved </Link></a>
                                                                        <span style={{color: "#275d91"}}> | </span>
                                                                          <a
                                                                            style={{color: "#ffffff;"}}
                                                                            href=""> <Link style={{textDecoration: "none", color: "white", textDecorationColor: "white", fontFamily: "karla, arial"}} to="/privacy-policy">Privacy Policy</Link></a>
                                                                        <span style={{color: "#275d91"}}> | </span> <a
                                                                            style={{color: "#ffffff;"}}
                                                                            href=""> <Link style={{textDecoration: "none", color: "white", textDecorationColor: "white", fontFamily: "karla, arial"}} to="terms-of-use">Terms of Use</Link></a> 
                                                                            <span style={{color: "#275d91"}}> | </span> <a
                                                                            style={{color: "#ffffff;"}}
                                                                            href=""> <Link style={{textDecoration: "none", color: "white", textDecorationColor: "white", fontFamily: "karla, arial"}} to="/gdpr">GDPR</Link> </a>
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
            </footer>
        </div>
    );
}