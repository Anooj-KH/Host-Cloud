import React from 'react'
import Navbar from "../Navbar/Navebar";
import Footer from '../Footer/Footer'
import '../Service/service.css'
import cardimg from '../../assets/cardimg.png'
import cardimg1 from '../../assets/cardimg1.png'
import cardimg2 from '../../assets/cardimg2.png'
import cardimg3 from '../../assets/cardimg3.png'
import cardimg4 from '../../assets/cardimg4.png'
import cardimg5 from '../../assets/cardimg5.png'



import { NavLink } from 'react-router-dom';

export default function OurService() {
    return (
        <div>
            <Navbar />
            <section id='serviceimg'>
                <h1>Our Services</h1>
                <div className="breadcrumb">
                    <NavLink to='/'>
                        <a className="nav-link  me-2 text-white" href="#home"><strong>Home</strong></a>
                    </NavLink>/ Our Services

                </div>
            </section>

            <section className="container">
                <p className="text-info fw-bold " style={{ marginTop: '100px' }}>Hosting Services</p>
                <h2 className="fw-bold">Best Services We Provide</h2>
                <p className="mt-3 text-secondary"> Host Cloud is a professional Bootstrap 4 template by TemplateMo
                    for your hosting company websites.
                    There are 4 HTML pages included in this template. You can feel free to customize anything.
                    Please share this template to your friends. Thank you.</p>
            </section>

            <section className="container d-flex justify-content-evenly flex-wrap mt-5">
                <div className="card bg-light mt-5" style={{ width: '22rem' }}>
                    <img src={cardimg1} className="card-img-top mt-4" alt=".." style={{ width: '8.5rem', marginLeft: "100px" }} />
                    <div className="card-body">
                        <h5 className="card-title text-center mt-3">VPS Cloud</h5>
                        <p className="card-text text-center mt-4">
                            Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt
                            commodo magna, id aliquam sapien sollicitudin id.
                        </p>
                    </div>
                </div>

                <div className="card bg-light mt-5" style={{ width: '22rem' }}>
                    <img src={cardimg2} className="card-img-top mt-4" alt=".." style={{ width: '8.5rem', marginLeft: "100px" }} />
                    <div className="card-body">
                        <h5 className="card-title text-center mt-3">Fast Network</h5>
                        <p className="card-text text-center  mt-4">
                            You are not allowed to re-distribute this template as a downloadable ZIP file on any
                            template collection website. Please contact us if you want to.
                        </p>
                    </div>
                </div>

                <div className="card bg-light mt-5" style={{ width: '22rem' }}>
                    <img src={cardimg} className="card-img-top mt-4" alt=".." style={{ width: '7.5rem', marginLeft: "100px" }} />
                    <div className="card-body">
                        <h5 className="card-title text-center mt-3">Reliable Platform</h5>
                        <p className="card-text  mt-4 text-center">
                            Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam
                            tincidunt commodo magna, id aliquam sapien sollicitudin id.
                        </p>
                    </div>
                </div>
            </section>



            <section className="container d-flex justify-content-evenly flex-wrap mt-5">
                <div className="card bg-light mt-5" style={{ width: '22rem' }}>
                    <img src={cardimg3} className="card-img-top mt-4" alt=".." style={{ width: '8.5rem', marginLeft: "100px" }} />
                    <div className="card-body">
                        <h5 className="card-title text-center mt-3">Managed CDN</h5>
                        <p className="card-text text-center mt-4">
                            Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt
                            commodo magna, id aliquam sapien sollicitudin id.
                        </p>
                    </div>
                </div>

                <div className="card bg-light mt-5" style={{ width: '22rem' }}>
                    <img src={cardimg4} className="card-img-top mt-4" alt=".." style={{ width: '7.5rem', marginLeft: "100px" }} />
                    <div className="card-body">
                        <h5 className="card-title text-center mt-3">Optimal Hosting</h5>
                        <p className="card-text text-center  mt-4">
                            You are not allowed to re-distribute this template as a downloadable ZIP file on any
                            template collection website. Please contact us if you want to.
                        </p>
                    </div>
                </div>

                <div className="card bg-light mt-5" style={{ width: '22rem' }}>
                    <img src={cardimg5} className="card-img-top mt-4" alt=".." style={{ width: '8.5rem', marginLeft: "100px" }} />
                    <div className="card-body">
                        <h5 className="card-title text-center mt-3">Customer Support</h5>
                        <p className="card-text  mt-4 text-center">
                            Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam
                            tincidunt commodo magna, id aliquam sapien sollicitudin id.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
