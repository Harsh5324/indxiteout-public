import { useEffect, useState } from 'react';
import './about-us.css';
import axios from 'axios';

export default function AboutUs(){

    const [teams, setTeams] = useState(undefined);
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        if(obj){

        obj.innerHTML = Math.floor(progress * (end - start) + start);
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    
    const engagement = document.getElementById("engagement");
    animateValue(engagement, 1, 60, 1000);

    const projects = document.getElementById("projects");
    animateValue(projects, 1, 50, 1000);

    const yoy = document.getElementById("yoy");
    animateValue(yoy, 1, 2, 1000);

    const repeat = document.getElementById("repeat");
    animateValue(repeat, 1, 100, 1000);

    useEffect(()=>{
      getTeams()
    },[])
    const getTeams = async () => {
      await axios.get(process.env.REACT_APP_BASE_URL + "/teams").then((res) =>{
        res && res.data && setTeams(res.data)
      })
    }
    return(
        <div id="main mb-0">
        <div className="page_title">
          <div className="container">
            <div className="breadcrumbs">
              {/* Breadcrumb NavXT 7.1.0 */}
              <span typeof="v:Breadcrumb"><a rel="v:url" property="v:title" title="Go to Inxite Out Pvt. Ltd.." href="../index.html" className="home">Home</a></span><span><i className="fa fa-angle-right" /></span><span property="itemListElement" typeof="ListItem"><span property="name">About Us</span><meta property="position" content={2} /></span>          </div>
            <h1 className="h2">About Us</h1>
          </div>
        </div>
        <div className>
          <div className="content-area">
            <article id="post-7258" className="consulting_elementor_wrapper post-7258 page type-page status-publish hentry">
              <div className="entry-content">
                <div className="text_block consulting_elementor_wrapper clearfix">
                  <div data-elementor-type="wp-page" data-elementor-id={7258} className="elementor elementor-7258">
                    <div className="elementor-inner">
                      <div className="elementor-section-wrap">
                        <section className="elementor-section mb-5 elementor-top-section elementor-element elementor-element-37ee6ff elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="37ee6ff" data-element_type="section">
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div className="elementor-column p-0 col-lg-7 col-md-7 col-xs-12 col-sm-12 py-5 px-3 elementor-top-column elementor-element elementor-element-a5dd0cf" data-id="a5dd0cf" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-5f3c26d elementor-widget elementor-widget-text-editor" data-id="5f3c26d" data-element_type="widget" data-widget_type="text-editor.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix title-main">
                                          <span style={{ color: "#353995", fontWeight: "500", fontFamily: "ubuntu", fontSize: "30px"}} >Making AI and Machine Learning work for Your Business</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-1cc74dd elementor-widget elementor-widget-text-editor" data-id="1cc74dd" data-element_type="widget" data-widget_type="text-editor.default">
                                      <div className="elementor-widget-container">
                                        <div className="text-editor elementor-clearfix">
                                          <p style={{fontFamily: "karla, Sans-serif"}} >Inxite Out drives the value of your data inside out. We are a growing and passionate group of Datapreneurs and Business specialists who strive to achieve the best results for our customers. We partner with businesses to accelerate their AI journey to achieve Transformative Business Impact, Reliably, and at Scale. Our AI processes ensure alignment between data, business, and technology to achieve true Enterprise AI.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column p-0 col-lg-5 col-md-5 col-xs-12 col-sm-12  elementor-top-column elementor-element elementor-element-ddbe9ba" data-id="ddbe9ba" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-532f3f0 elementor-widget elementor-widget-image" data-id="532f3f0" data-element_type="widget" data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-image">
                                          <img width={700} height={467} alt="About Us" className=" attachment-full size-full rounded shadow" src="/assets/wp-content/uploads/2021/10/about-us.jpg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="elementor-section elementor-top-section elementor-element elementor-element-18482d76 third_bg_color elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="18482d76" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5a690bc7" data-id="5a690bc7" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-507ab86b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="507ab86b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                      <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row py-5">
                                          <div className="px-0 elementor-column col-lg-5 col-md-5 col-sm-12 col-xs-12 elementor-col-41 elementor-top-column elementor-element elementor-element-52581615" data-id={52581615} data-element_type="column">
                                            <div className="elementor-column-wrap elementor-element-populated">
                                              <div className="elementor-widget-wrap">
                                                <div className="elementor-element elementor-element-a8e7609 elementor-widget elementor-widget-heading" data-id="a8e7609" data-element_type="widget" data-widget_type="heading.default">
                                                  <div className="elementor-widget-container">
                                                    <h2 className="elementor-heading-title elementor-size-default " style={{fontWeight: "700", color: "002E5B", fontSize: "36px"}}>Serving AI to customers for 5+ years
                                                    </h2>		</div>
                                                </div>
                                                <div className="elementor-element elementor-element-21c35508 elementor-widget elementor-widget-text-editor" data-id="21c35508" data-element_type="widget" data-widget_type="text-editor.default">
                                                  <div className="elementor-widget-container">
                                                    <div className="elementor-text-editor elementor-clearfix p-tag">
                                                      <p className='p-tag'>Inxite Out caters to disruptive Start-ups as well as to Fortune 500 companies. We adopt a pragmatic and flexible partnership model adapted to the requirements of each customer to deliver tangible results.</p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="elementor-element elementor-element-783f1dde elementor-widget elementor-widget-stm_spacing" data-id="783f1dde" data-element_type="widget" data-widget_type="stm_spacing.default">
                                                  <div className="elementor-widget-container">
                                                    <div className="stm-spacing" id="stm-spacing-6418fd4804965" />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* <div className="elementor-column col-lg-1 col-md-1 col-sm-1 col-xs-1 elementor-top-column elementor-element elementor-element-3fbdff10" data-id="3fbdff10" data-element_type="column">
                                            <div className="elementor-column-wrap">
                                              <div className="elementor-widget-wrap">
                                              </div>
                                            </div>
                                          </div> */}
                                          <div className="elementor-column col-lg-3 col-md-3 col-sm-12 col-xs-12 d-flex elementor-top-column elementor-element elementor-element-162c7f99" data-id="162c7f99" data-element_type="column">
                                            <div className="elementor-column-wrap elementor-element-populated">
                                              <div className="elementor-widget-wrap ">
                                                <div className="elementor-element elementor-element-63159e7e elementor-widget elementor-widget-stm_stats_counter" data-id="63159e7e" data-element_type="widget" data-widget_type="stm_stats_counter.default">
                                                  <div className="elementor-widget-container">
                                                    <div className="stats_counter style_5   consulting_elementor_stats_counter">
                                                      <div className="inner">
                                                        <div className="icon-wrap">
                                                          <i className="stm-ankara-case base_font_color" style={{}} />
                                                        </div>
                                                        <div className="counter-wrap">
                                                          <div className='d-flex justify-content-start align-items-center'>
                                                            <h3 className="no_stripe base_font_color mb-0" id="projects" style={{}}>50</h3>
                                                            <span className='no_stripe base_font_color h-100 mb-1' style={{fontSize: "33px", fontWeight: "bold"}}>+</span>
                                                          </div>
                                                          <div className="counter_title base_font_color" style={{}}>Projects Completed</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="elementor-element elementor-element-3db5da4e elementor-widget elementor-widget-stm_spacing" data-id="3db5da4e" data-element_type="widget" data-widget_type="stm_spacing.default">
                                                  <div className="elementor-widget-container">
                                                    <div className="stm-spacing" id="stm-spacing-6418fd480de14" />
                                                  </div>
                                                </div>
                                                <div className="elementor-element elementor-element-50ef13b9 elementor-widget elementor-widget-stm_stats_counter" data-id="50ef13b9" data-element_type="widget" data-widget_type="stm_stats_counter.default">
                                                  <div className="elementor-widget-container">
                                                    <div className="stats_counter style_5   consulting_elementor_stats_counter">
                                                      <div className="inner">
                                                        <div className="icon-wrap">
                                                          <i className="stm-ankara-trophy base_font_color" style={{}} />
                                                        </div>
                                                        <div className="counter-wrap">
                                                          <div className='d-flex justify-content-start align-items-center'>
                                                            <h3 className="no_stripe base_font_color mb-0" id="yoy" >2 </h3>
                                                            <span className='no_stripe base_font_color h-100' style={{fontSize: "33px", fontWeight: "bold"}}>%+</span>
                                                          </div>
                                                        <div className="counter_title base_font_color" style={{}}>Y-o-Y Growth</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="elementor-element elementor-element-d97b7 elementor-widget elementor-widget-stm_spacing" data-id="d97b7" data-element_type="widget" data-widget_type="stm_spacing.default">
                                                  <div className="elementor-widget-container">
                                                    <div className="stm-spacing" id="stm-spacing-6418fd481556c" />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-column col-lg-4 col-md-4 col-sm-12 col-xs-12 elementor-top-column elementor-element elementor-element-11595b15" data-id="11595b15" data-element_type="column">
                                            <div className="elementor-column-wrap elementor-element-populated">
                                              <div className="elementor-widget-wrap">
                                                <div className="elementor-element elementor-element-46492bd8 elementor-widget elementor-widget-stm_stats_counter" data-id="46492bd8" data-element_type="widget" data-widget_type="stm_stats_counter.default">
                                                  <div className="elementor-widget-container">
                                                    <div className="stats_counter style_5   consulting_elementor_stats_counter">
                                                    <div className="inner d-flex">
                                                        <div className="icon-wrap">
                                                          <i className=" stm-ankara-like base_font_color" style={{whiteSpace: "nowrap"}} />
                                                        </div>
                                                        <div className="counter-wrap">
                                                          <div className='d-flex justify-content-start align-items-center '>
                                                            <h3 className="no_stripe base_font_color mb-0" id="engagement">60</h3>
                                                            <span className='no_stripe base_font_color h-100 mb-1' style={{fontSize: "33px", fontWeight: "bold"}}>%+</span>
                                                          </div>
                                                          <div className="counter_title base_font_color">Multi-Year Engagement Revenue Share</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="elementor-element elementor-element-520c192b elementor-widget elementor-widget-stm_spacing" data-id="520c192b" data-element_type="widget" data-widget_type="stm_spacing.default">
                                                  <div className="elementor-widget-container">
                                                    <div className="stm-spacing" id="stm-spacing-6418fd481dc9b" />
                                                  </div>
                                                </div>
                                                <div className="elementor-element elementor-element-11f67336 elementor-widget elementor-widget-stm_stats_counter" data-id="11f67336" data-element_type="widget" data-widget_type="stm_stats_counter.default">
                                                  <div className="elementor-widget-container">
                                                    <div className="stats_counter style_5   consulting_elementor_stats_counter">
                                                      <div className="inner">
                                                        <div className="icon-wrap">
                                                          <i className=" stm-ankara-user base_font_color" style={{}} />
                                                        </div>
                                                        <div className="counter-wrap">
                                                          <div className='d-flex justify-content-start align-items-center'>
                                                            <h3 className="no_stripe base_font_color mb-0" id="repeat" >100 </h3>
                                                            <span className='no_stripe base_font_color stats_counter_suffix mb-1 h-100'  style={{fontSize: "33px", fontWeight: "bold"}}>%</span>
                                                          </div>
                                                          <div className="counter_title base_font_color" style={{}}>Repeat Customers</div>
                                                        </div>
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
                                    <div className="elementor-element elementor-element-375b5215 elementor-widget elementor-widget-stm_spacing" data-id="375b5215" data-element_type="widget" data-widget_type="stm_spacing.default">
                                      <div className="elementor-widget-container">
                                        <div className="stm-spacing" id="stm-spacing-6418fd4826806" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* Team */}
                        <section id="team" className="pb-5">
                          <div className="container">
                            <p className=" text-left py-5" style={{color : "#353995", fontSize: "30px", fontWeight: "500", fontFamily: "Ubuntu"}}>Leadership</p>
                            <div className="row">
                              {/* Team member */}
                              {
                                teams && teams.length > 0 ? 
                                teams.map((team) => {
                                  return  <div className="col-xs-12 col-sm-6 col-md-4">
                                  <div className="image-flip">
                                    <div className="mainflip flip-0">
                                      <div className="frontside">
                                        <div className="card">
                                          <div className="card-body text-center d-flex align-items-center justify-content-center h-100" style={{flexDirection:"column"}}>
                                            <p>
                                              <img
                                                className="img-fluid"
                                                src={"assets/wp-content/uploads/2022/04/"+team.photo}
                                                alt={team.name}
                                              />
                                            </p>
                                            <h4 className="card-title d-flex align-items-center" style={{flexDirection:'column', color: "002e5b" }}>{team.name}</h4>
                                            <p className="card-text mt-3">
                                            {team.designation}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="backside">
                                        <div className="card">
                                        <div className="card-body text-center d-flex align-items-center justify-content-center h-100" style={{flexDirection:"column"}}>
                                            <h4 className="card-title d-flex align-items-center" style={{flexDirection:'column'}}>{team.name}</h4>
                                            <p className="card-text small " dangerouslySetInnerHTML={{__html:team.desc}}>
                                             
                                            </p>
                                            <ul className="list-inline">
                                              <li className="list-inline-item">
                                                <a
                                                  className="social-icon text-xs-center"
                                                  target="_blank"
                                                  href={team.linkedin}
                                                >
                                                  <i className="fa fa-linkedin" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                }) : <h4 className='text-center'>No Team member added yet.</h4>
                              }

                              {/* ./Team member */}
                            </div>
                          </div>
                        </section>
                        <section className="elementor-section mb-5 elementor-top-section elementor-element elementor-element-37ee6ff elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="37ee6ff" data-element_type="section">
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div className="elementor-column p-0 col-lg-7 col-md-7 col-xs-12 col-sm-12 py-5 px-3 elementor-top-column elementor-element elementor-element-a5dd0cf" data-id="a5dd0cf" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-5f3c26d elementor-widget elementor-widget-text-editor" data-id="5f3c26d" data-element_type="widget" data-widget_type="text-editor.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix title-main">
                                          <span style={{ color: "#353995", fontWeight: "500", fontFamily: "ubuntu", fontSize: "30px"}} >Life at Inxite Out</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-1cc74dd elementor-widget elementor-widget-text-editor" data-id="1cc74dd" data-element_type="widget" data-widget_type="text-editor.default">
                                      <div className="elementor-widget-container">
                                        <div className="text-editor elementor-clearfix">
                                          <p style={{fontFamily: "karla, Sans-serif"}} ><strong>We stand for Openness and a Passion for Results.</strong> </p>
                                        </div>
                                        <div className="text-editor elementor-clearfix">
                                          <p className='py-2' style={{fontFamily: "karla, Sans-serif"}} >At Inxite Out you are Leaders on Day One as you make your own decisions and craft your own journey. As part of high-performing teams, you will have ample opportunities to solve complex problems, grow in your career, and push your own boundaries.</p>
                                        </div>
                                        <div className="text-editor elementor-clearfix">
                                          <p className='py-2' style={{fontFamily: "karla, Sans-serif"}} >If you are a Datapreneur at Inxite Out, you will have a holistic experience and exposure to every aspect of an AI project, from hardcore technical brainstorming to business-savvy client communication.</p>
                                        </div>
                                        <div className="text-editor elementor-clearfix">
                                          <p style={{fontFamily: "karla, Sans-serif"}} >It’s only the curious who pull everything inside out. That is your life at Inxite Out.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column p-0 col-lg-5 col-md-5 col-xs-12 col-sm-12  elementor-top-column elementor-element elementor-element-ddbe9ba" data-id="ddbe9ba" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-532f3f0 elementor-widget elementor-widget-image" data-id="532f3f0" data-element_type="widget" data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-image">
                                            <img
                                            className="rounded img-fluid my-lg-5"
                                            src="assets/wp-content/uploads/2021/10/team.jpg"
                                            alt=""
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div> {/*.container*/}
      </div>
   
    )
}