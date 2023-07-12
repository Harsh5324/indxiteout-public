import {toast} from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


export default function GetInTouch(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [organization, setOrganization] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [title, setTitle] = useState("");
    const [industry, setIndustry] = useState("");
    const [desc, setDesc] = useState("");

    const form = useRef();

    const sendEmail = (e) => { 
      emailjs.sendForm('service_wjq3qm1', 'template_tqplm8p', e.target, 'obxZLkGW4EZf_mZ4l')
        .then((result) => {
            toast.success('Mail sent.')
        }, (error) => {
        });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!firstname){
             toast.error('firstname is required.');
             return;
         }
         else if(!lastname){
             toast.error('lastname is required.');
             return;
         }
         else if(!organization){
             toast.error('organization is required.');
             return;
         }else if(!email){
             toast.error('email is required');
             return;
         }
         else if(!phone){
            toast.error('phone is required');
            return;
        }
        sendEmail(e);
         
     }

    return(
        <div id="main">
  <div className="page_title">
    <div className="container">
      <div className="breadcrumbs">
        {/* Breadcrumb NavXT 7.1.0 */}
        <span typeof="v:Breadcrumb"><a rel="v:url" property="v:title" title="Go to Inxite Out Pvt. Ltd.." href="../index.html" className="home">Home</a></span><span><i className="fa fa-angle-right" /></span><span property="itemListElement" typeof="ListItem"><span property="name">Get in Touch</span><meta property="position" content={2} /></span>          </div>
      <h1 className="h2">Get in Touch</h1>
    </div>
  </div>
  <div className>
    <div className="content-area">
      <article id="post-7412" className="consulting_elementor_wrapper post-7412 page type-page status-publish hentry">
        <div className="entry-content">
          <div data-elementor-type="wp-page" data-elementor-id={7412} className="elementor elementor-7412">
            <div className="elementor-inner">
              <div className="elementor-section-wrap">
                <section className="elementor-section elementor-top-section elementor-element elementor-element-99823fb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="99823fb" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-902a223" data-id="902a223" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-de88e3a elementor-widget elementor-widget-vc_custom_heading" data-id="de88e3a" data-element_type="widget" data-widget_type="vc_custom_heading.default">
                              <div className="elementor-widget-container">
                                <div className=" vc_custom_heading  consulting_heading_font  text_align_left py-3"><h2 style={{fontSize: '28px', color: '#585858', textAlign: 'left', lineHeight: '34px', fontWeight: 700}} className="consulting-custom-title">Let's talk about your business.
                                  </h2></div>		</div>
                            </div>
                            <div className="elementor-element elementor-element-105f104 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-html" data-id="105f104" data-element_type="widget" data-widget_type="html.default">
                              <div className="elementor-widget-container">
                                <style dangerouslySetInnerHTML={{__html: "\n    #preview-form .max-600 {\n    max-width: 100%;\n    margin: 0 auto;\n    background-color: #CFCFCF !important;\n    border: 0px !important;\n    padding: 0px !Important;\n}\n.preview-form-wrapper {\n    padding: 0 15px;\n    background-color: #CFCFCF;\n}\n" }} />		</div>
                            </div>
                            <div className="elementor-element elementor-element-034658c elementor-widget elementor-widget-html" data-id="034658c" data-element_type="widget" data-widget_type="html.default">
                              <div className="elementor-widget-container">
                                <form ref={form} onSubmit={handleSubmit} name="insightly_web_to_lead"  >
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                      <div className="input-group">
                                        <input id="insightly_firstName" name="firstname" className="wpcf7-form-control wpcf7-text" value={firstname} onChange={(e)=>{ setFirstname(e.target.value) }} placeholder="First Name *" required type="text" />
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                      <div className="input-group">
                                        <input id="insightly_lastName" className="wpcf7-form-control wpcf7-text" value={lastname} onChange={(e)=>{ setLastname(e.target.value) }} placeholder="Last Name *" name="lastname" required type="text" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                      <div className="input-group">
                                        <input id="insightly_organization" name="organization" type="text" className="wpcf7-form-control wpcf7-text" required value={organization} onChange={(e)=>{ setOrganization(e.target.value) }} placeholder="Organization *" />
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                      <div className="input-group">
                                        <input id="insightly_Email" name="email" className="wpcf7-form-control wpcf7-text wpcf7-email" value={email} onChange={(e)=>{ setEmail(e.target.value) }} placeholder="E-mail *" required type="email" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                      <div className="input-group">
                                        <input id="insightly_Phone" name="phone" className="wpcf7-form-control wpcf7-text wpcf7-tel" value={phone} onChange={(e)=>{ setPhone(e.target.value) }} placeholder="Phone *" minLength={10} required type="tel" />
                                      </div>
                                      <div className="input-group">
                                        <input id="insightly_Title" name="title" className="wpcf7-form-control wpcf7-text" value={title} onChange={(e)=>{ setTitle(e.target.value) }} placeholder="Title"  type="text" />
                                      </div>
                                      <div className="input-group">
                                        <input id="insightly_Industry" name="industry" type="text" className="wpcf7-form-control wpcf7-text" value={industry} onChange={(e)=>{ setIndustry(e.target.value) }} placeholder="Industry" />
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                      <div className="input-group">
                                        <textarea id="insightly_Description" name="desc" type="text" className="wpcf7-form-control wpcf7-textarea" value={desc} onChange={(e)=>{ setDesc(e.target.value) }} placeholder="Description" defaultValue={""} />
                                      </div>
                                      <div className="input-group">
                                        <input type="hidden" id="insightly_ResponsibleUser" name="ResponsibleUser" defaultValue={1957503} /><input type="hidden" id="insightly_LeadSource" name="LeadSource" defaultValue={3385887} />
                                        <input type="submit"  defaultValue="Submit" className="button size-lg" /></div>
                                    </div>
                                  </div>
                                </form>		</div>
                            </div>
                    {/* forms ends */}
                            <div className="elementor-element elementor-element-7389776 elementor-widget elementor-widget-text-editor" data-id={7389776} data-element_type="widget" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section style={{marginBottom: "20px"}} className="elementor-section elementor-top-section elementor-element elementor-element-d9bc206 new-location-sec elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d9bc206" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b0a70cd" data-id="b0a70cd" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-40d4c05 elementor-widget elementor-widget-heading" data-id="40d4c05" data-element_type="widget" data-widget_type="heading.default">
                              <div className="elementor-widget-container smallbar text-light d-flex justify-content-center">
                                <p className="elementor-heading-title elementor-size-default">Development Centre</p>		</div>
                            </div>
                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-c189846 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c189846" data-element_type="section">
                              <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-row">
                                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-07c7f70" data-id="07c7f70" data-element_type="column">
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-20efffc elementor-widget elementor-widget-image" data-id="20efffc" data-element_type="widget" data-widget_type="image.default">
                                          <div className="elementor-widget-container">
                                            <div className="elementor-image">
                                              <img decoding="async" width={500} height={260} alt="kolkata" data-srcset="https://inxiteout.ai/wp-content/uploads/2021/09/kolkata.jpg 500w, https://inxiteout.ai/wp-content/uploads/2021/09/kolkata-300x156.jpg 300w" data-src="https://inxiteout.ai/wp-content/uploads/2021/09/kolkata.jpg" data-sizes="(max-width: 500px) 100vw, 500px" className="attachment-full size-full rounded" src="/assets/images/comment_before.jpeg" /><noscript>&lt;img decoding="async" width="500" height="260"   alt="kolkata" data-srcset="https://inxiteout.ai/wp-content/uploads/2021/09/kolkata.jpg 500w, https://inxiteout.ai/wp-content/uploads/2021/09/kolkata-300x156.jpg 300w"  data-src="https://inxiteout.ai/wp-content/uploads/2021/09/kolkata.jpg" data-sizes="(max-width: 500px) 100vw, 500px" className="attachment-full size-full lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /&gt;&lt;noscript&gt;&lt;img decoding="async" width="500" height="260" src="../wp-content/uploads/2021/09/kolkata.jpg" className="attachment-full size-full" alt="kolkata" srcset="https://inxiteout.ai/wp-content/uploads/2021/09/kolkata.jpg 500w, https://inxiteout.ai/wp-content/uploads/2021/09/kolkata-300x156.jpg 300w" sizes="(max-width: 500px) 100vw, 500px" /&gt;</noscript>														</div>
                                          </div>
                                        </div>
                                        <div className="elementor-element elementor-element-eeb3ef9 elementor-widget elementor-widget-stm_contacts_widget" data-id="eeb3ef9" data-element_type="widget" data-widget_type="stm_contacts_widget.default">
                                          <div className="elementor-widget-container">
                                            <div className="stm_contacts_widget consulting_elementor_contacts_widget style_4 ">
                                              <h4 className="no_stripe">INDIA</h4>
                                              <ul>
                                                <li>
                                                  <div className="icon"><i className="fa fa-map-marker" /></div>
                                                  <div className="text">2nd floor, Infinity Tower II,
                                                    Sector V,Salt Lake City,<br />
                                                    Kolkata 700091</div>
                                                </li>
                                                <li>
                                                  <div className="icon"><i className="fa fa-phone" /></div>
                                                  <div className="text">
                                                    +91 33 2357 5626/5637/5628                                          </div>
                                                </li>
                                              </ul>
                                            </div>		</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-center align-items-center elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4bf5830" data-id="4bf5830" data-element_type="column">
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-f61d04a elementor-widget elementor-widget-image" data-id="f61d04a" data-element_type="widget" data-widget_type="image.default">
                                          <div className="elementor-widget-container">
                                            <div className="elementor-image">
                                              <img width={325} height={165} decoding="async" title="Benglore" alt="Benglore" data-src="https://inxiteout.ai/wp-content/uploads/elementor/thumbs/Benglore-scaled-pm0av8vsaooycuf31qkbpudm44zt222mxguv5fwdyq.jpg" className="rounded" src="/assets/images/banglore.jpeg" /><noscript>&lt;img width="325" height="165" decoding="async" src="../wp-content/uploads/elementor/thumbs/Benglore-scaled-pm0av8vsaooycuf31qkbpudm44zt222mxguv5fwdyq.jpg" title="Benglore" alt="Benglore" /&gt;</noscript>														</div>
                                          </div>
                                        </div>
                                        <div className="elementor-element elementor-element-a3892e3 elementor-widget elementor-widget-stm_contacts_widget" data-id="a3892e3" data-element_type="widget" data-widget_type="stm_contacts_widget.default">
                                          <div className="elementor-widget-container">
                                            <div className="stm_contacts_widget consulting_elementor_contacts_widget style_4 ">
                                            <h4 className="no_stripe text-white">INDIA</h4>
                                              <ul>
                                                <li>
                                                  <div className="icon"><i className="fa fa-map-marker" /></div>
                                                  <div className="text">91 Springboard Business Hub,
                                                    80 Feet Road, Indiranagar,
                                                    Bengaluru 560038</div>
                                                </li>
                                                <li>
                                                  <div className="icon"><i className="fa fa-phone" /></div>
                                                  <div className="text">
                                                    +91 900 009 4272                                          </div>
                                                </li>
                                              </ul>
                                            </div>		</div>
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
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7310b64" data-id="7310b64" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-2ccc6ff elementor-widget elementor-widget-heading" data-id="2ccc6ff" data-element_type="widget" data-widget_type="heading.default">
                              <div className="elementor-widget-container smallbar text-light d-flex justify-content-center">
                                <p className="elementor-heading-title elementor-size-default">Sales Office
                                </p>		</div>
                            </div>
                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-630ec67 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="630ec67" data-element_type="section">
                              <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-row">
                                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fd6ea76" data-id="fd6ea76" data-element_type="column">
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-0db1672 elementor-widget elementor-widget-image" data-id="0db1672" data-element_type="widget" data-widget_type="image.default">
                                          <div className="elementor-widget-container">
                                            <div className="elementor-image">
                                              <img decoding="async" width={500} height={260} alt="oakton-img2" data-srcset="https://inxiteout.ai/wp-content/uploads/2021/08/oakton-img2.jpg 500w, https://inxiteout.ai/wp-content/uploads/2021/08/oakton-img2-300x156.jpg 300w" data-src="https://inxiteout.ai/wp-content/uploads/2021/08/oakton-img2.jpg" data-sizes="(max-width: 500px) 100vw, 500px" className="attachment-full size-full rounded" src="/assets/images/us.jpeg" /><noscript>&lt;img decoding="async" width="500" height="260"   alt="oakton-img2" data-srcset="https://inxiteout.ai/wp-content/uploads/2021/08/oakton-img2.jpg 500w, https://inxiteout.ai/wp-content/uploads/2021/08/oakton-img2-300x156.jpg 300w"  data-src="https://inxiteout.ai/wp-content/uploads/2021/08/oakton-img2.jpg" data-sizes="(max-width: 500px) 100vw, 500px" className="attachment-full size-full lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /&gt;&lt;noscript&gt;&lt;img decoding="async" width="500" height="260" src="../wp-content/uploads/2021/08/oakton-img2.jpg" className="attachment-full size-full" alt="oakton-img2" srcset="https://inxiteout.ai/wp-content/uploads/2021/08/oakton-img2.jpg 500w, https://inxiteout.ai/wp-content/uploads/2021/08/oakton-img2-300x156.jpg 300w" sizes="(max-width: 500px) 100vw, 500px" /&gt;</noscript>														</div>
                                          </div>
                                        </div>
                                        <div className="elementor-element elementor-element-4831ff7 elementor-widget elementor-widget-stm_contacts_widget" data-id="4831ff7" data-element_type="widget" data-widget_type="stm_contacts_widget.default">
                                          <div className="elementor-widget-container">
                                            <div className="stm_contacts_widget consulting_elementor_contacts_widget style_4 ">
                                              <h4 className="no_stripe">US</h4>
                                              <ul>
                                                <li>
                                                  <div className="icon"><i className="fa fa-map-marker" /></div>
                                                  <div className="text">99 Hudson Street, 5th Floor PMB 6015<br />
                                                    New York NY 10013</div>
                                                </li>
                                                <li>
                                                  <div className="icon"><i className="fa fa-phone" /></div>
                                                  <div className="text">
                                                    +1 315 618 7888                                          </div>
                                                </li>
                                              </ul>
                                            </div>		</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-40acea0" data-id="40acea0" data-element_type="column">
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-76ab52f elementor-widget elementor-widget-image" data-id="76ab52f" data-element_type="widget" data-widget_type="image.default">
                                          <div className="elementor-widget-container">
                                            <div className="elementor-image">
                                              <img decoding="async" width={500} height={260} alt="oakton" data-srcset="https://inxiteout.ai/wp-content/uploads/2021/09/oakton-img1.jpg 500w, https://inxiteout.ai/wp-content/uploads/2021/09/oakton-img1-300x156.jpg 300w" data-src="https://inxiteout.ai/wp-content/uploads/2021/09/oakton-img1.jpg" data-sizes="(max-width: 500px) 100vw, 500px" className="attachment-full size-full rounded" src="/assets/images/uk.jpeg" /><noscript>&lt;img decoding="async" width="500" height="260"   alt="oakton" data-srcset="https://inxiteout.ai/wp-content/uploads/2021/09/oakton-img1.jpg 500w, https://inxiteout.ai/wp-content/uploads/2021/09/oakton-img1-300x156.jpg 300w"  data-src="https://inxiteout.ai/wp-content/uploads/2021/09/oakton-img1.jpg" data-sizes="(max-width: 500px) 100vw, 500px" className="attachment-full size-full lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /&gt;&lt;noscript&gt;&lt;img decoding="async" width="500" height="260" src="../wp-content/uploads/2021/09/oakton-img1.jpg" className="attachment-full size-full" alt="oakton" srcset="https://inxiteout.ai/wp-content/uploads/2021/09/oakton-img1.jpg 500w, https://inxiteout.ai/wp-content/uploads/2021/09/oakton-img1-300x156.jpg 300w" sizes="(max-width: 500px) 100vw, 500px" /&gt;</noscript>														</div>
                                          </div>
                                        </div>
                                        <div className="elementor-element elementor-element-4f9860f elementor-widget elementor-widget-stm_contacts_widget" data-id="4f9860f" data-element_type="widget" data-widget_type="stm_contacts_widget.default">
                                          <div className="elementor-widget-container">
                                            <div className="stm_contacts_widget consulting_elementor_contacts_widget style_4 ">
                                              <h4 className="no_stripe">UK</h4>
                                              <ul>
                                                <li>
                                                  <div className="icon"><i className="fa fa-map-marker" /></div>
                                                  <div className="text">114 Nine Mile Ride,
                                                    Finchampstead,<br />
                                                    Wokingham RG40 4JA
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="icon"><i className="fa fa-phone" /></div>
                                                  <div className="text">
                                                    +44 182 570 5354                                          </div>
                                                </li>
                                              </ul>
                                            </div>		</div>
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