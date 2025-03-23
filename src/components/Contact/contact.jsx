import React from 'react'
import Navbar from "../Navbar/Navebar";
import Footer from '../Footer/Footer'
import '../Contact/contact.css'
import { NavLink } from 'react-router-dom';
import phone from "../../assets/cardimg6.png"
import mail from "../../assets/cardimg7.png"
import support from "../../assets/cardimg5.png"
import website from "../../assets/cardimg8.png"


export default function Contact() {
  return (
    <div>
      <Navbar />
      <section id='contactimg'>
        <h1>Contact Us</h1>
        <div className="breadcrumb">
          <NavLink to='/'>
            <a className="nav-link  me-2 text-white" href="#home"><strong>Home</strong></a>
          </NavLink>/ Contact us

        </div>
      </section>
      <section className='mt-5'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6'>
              <form >
                <input type="text" placeholder='  Your Name' />
                <input type="email" className='mt-4' placeholder='  Your Email' />
                <input type="text" className='mt-4' placeholder='  Subject' />
                <textarea name="textarea" className='mt-4' placeholder='  Your Message' style={{ height: "150px" }}></textarea>
                <button type='submit' className='bg-info mt-5 text-white fs-6 fw-bold'>SEND MESSAGE</button>
              </form>
            </div>
            <div className='col-md-6'>
              <p className='text-info mt-5 fw-bold'>Contact us</p>
              <h2 className='fw-bold mb-2'>Let's keep in touch</h2>
              <p style={{ width: "auto" }}>Quisque sagittis blandit sapien et elementum. Fusce pretium viverra
                consequat. Aliquam at feugiat mi. Pellentesque hendrerit, felis ac sodales commodo.</p>

              <hr className='mt-5' />

              <div className="container mt-5">
                <div className="row text-center gy-4">

                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="d-flex align-items-center">
                      <div
                        className=" text-white rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <img src={phone} alt="phone" style={{ width: "75px" }} />
                      </div>
                      <p className="ms-3 mb-0 fw-bold" style={{width:'180px'}}>010-020-0560</p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="d-flex align-items-center">
                      <div
                        className=" text-white rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: "60px", height: '60px' }}

                      >  <img src={mail} alt="phone" style={{ width: "70px" }} />
                      </div>
                      <p className="ms-3 mb-0 fw-bold col-md-6">contact@company.com</p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="d-flex align-items-center">
                      <div
                        className=" text-white rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: "60px", height: '60px' }}
                      >
                         <img src={support} alt="phone" style={{ width: "85px" }} />
                      </div>
                      <p className="ms-3 mb-0 fw-bold">support@company.com</p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="d-flex align-items-center">
                      <div
                        className="text-white rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: "60px", height: '60px' }}
                        
                      >  <img src={website} alt="phone" style={{ width: "85px" }} />
                      </div>
                      <p className="ms-3 mb-0 fw-bold" style={{width:'170px'}}>www.company.com</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      <section className='mt-5'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8558.032137386295!2d41.12259375444467!3d37.890275248508594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1733379364593!5m2!1sen!2sin'
          width="100%" height="500" allowfullscreen="" title='_blank' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <Footer />
    </div>
  )
}
