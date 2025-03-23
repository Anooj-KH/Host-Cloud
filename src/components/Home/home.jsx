import React from "react";
import "./home.css";
import logo from "/Education/React/host_cloud/src/assets/logo.png"
import cardimg from '/Education/React/host_cloud/src/assets/cardimg.png'
import Navbar from "../Navbar/Navebar";
import planimg from "/Education/React/host_cloud/src/assets/planimg.png"
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <div>
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-white" id="headline">SEARCH YOUR DOMAIN</h1>
                    <div className="domain-search mt-4">
                        <form className="d-flex align-items-center domain-form">
                            <input
                                type="text" className="form-control domain-input" style={{ borderRadius: '0%' }}
                                placeholder="Enter your domain here..." />
                            <button type="submit" className="btn btn-info text-white fw-bold ms-4 mt-1" style={{ borderRadius: '0%', width: '90px',height:"40px" }}>
                                SEARCH
                            </button>
                        </form>
                        <div className="mt-3 domain-options">
                            <label><input type="checkbox" /> .com ($10/yr) </label>
                            <label><input type="checkbox" /> .net ($12/yr)</label>
                            <label><input type="checkbox" /> .org ($8/yr)</label>
                            <label><input type="checkbox" /> .in ($6/yr)</label>
                        </div>
                    </div>
                </section>
                <div className="logotext" style={{ height: 'auto', padding: '20px 0' }}>
                    <h5 className="text-center fw-bold mt-3">TRUSTED BY 1,250+ HAPPY CUSTOMERS WORLDWIDE </h5>

                    <div className="container mt-4">
               
                        <div className="row">
                            <div className="col-md-3 d-flex justify-content-center mt-3">
                                <img src={logo} alt="Logo" className="img-fluid" />
                            </div>
                            <div className=" col-md-3 d-flex justify-content-center mt-3">
                                <img src={logo} alt="Logo" className="img-fluid" />
                            </div>
                            <div className=" col-md-3 d-flex justify-content-center mt-3">
                                <img src={logo} alt="Logo" className="img-fluid" />
                            </div>
                            <div className=" col-md-3 d-flex justify-content-center mt-3">
                                <img src={logo} alt="Logo" className="img-fluid" />
                            </div>
                        </div>
                       
                    </div>
                </div>
                <section className="container">
                    <p className="text-info fw-bold " style={{ marginTop: '100px' }}>Hosting Services</p>
                    <h2 className="fw-bold">Services we provide</h2>
                    <p className="mt-3 text-secondary"> Host Cloud is a professional Bootstrap 4 template by TemplateMo
                        for your hosting company websites.
                        There are 4 HTML pages included in this template. You can feel free to customize anything.
                        Please share this template to your friends. Thank you.</p>
                </section>

                <section className="container d-flex justify-content-evenly flex-wrap mt-5">
                    <div className="card bg-light mt-5" style={{ width: '22rem' }}>
                        <img src={cardimg} className="card-img-top mt-4" alt=".." style={{ width: '8.5rem', marginLeft: "100px" }} />
                        <div className="card-body">
                            <h5 className="card-title text-center mt-3">10x Light Cloud</h5>
                            <p className="card-text text-center mt-4">
                                Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt
                                commodo magna, id aliquam sapien sollicitudin id.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-light mt-5" style={{ width: '22rem' }}>
                        <img src={cardimg} className="card-img-top mt-4" alt=".." style={{ width: '8.5rem', marginLeft: "100px" }} />
                        <div className="card-body">
                            <h5 className="card-title text-center mt-3">Managed VPS Cloud</h5>
                            <p className="card-text text-center  mt-4">
                                You are not allowed to re-distribute this template as a downloadable ZIP file on any
                                template collection website. Please contact us if you want to.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-light mt-5" style={{ width: '22rem' }}>
                        <img src={cardimg} className="card-img-top mt-4" alt=".." style={{ width: '8.5rem', marginLeft: "100px" }} />
                        <div className="card-body">
                            <h5 className="card-title text-center mt-3">Fully Dedicated</h5>
                            <p className="card-text  mt-4 text-center">
                                Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam
                                tincidunt commodo magna, id aliquam sapien sollicitudin id.
                            </p>
                        </div>
                    </div>
                </section>


                <div id="plan" >
                    <h2 id="plantext">Cloud Hosting Plans</h2>
                    <p className="text-center text-white mt-3 container" style={{ width: "800px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Veritatis consequatur dolorem nisi doloribus illum. Quod sapiente pariatur laudantium praesentium
                        libero mollitia.
                    </p>
                    <div className="container d-flex justify-content-evenly flex-wrap mt-5" >
                        <div className="card  mt-5" style={{ width: '22rem', borderRadius: "0%" }}>
                            <div className="card-body">
                                <h6 className="card-title text-center mt-4 fw-bolder">BASIC CLOUD 5X</h6>
                                <div id="pricing-card" className="mt-5">
                                    <div id="price">$15.50</div>
                                    <span className="text-white fw-bold">MONTHLY</span>
                                </div>
                                <p className="card-text text-center text-secondary ms-4 mt-4" style={{ width: "280px" }}>
                                    Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus
                                </p>
                                <hr className="mt-5" />
                                <div id="plan-content" className="mt-5">
                                    <h6 className="text-muted">✔️ 500 GB Storage Space</h6>
                                    <h6 className="text-muted">✔️ 3 TB Data Transfer</h6>
                                    <h6 className="text-muted">✔️ Basic  Managed Panel</h6>
                                    <h6 className="text-muted">✔️ 24/7 Fast Supportt</h6>
                                    <h6 className="text-muted">✔️ 100 Premium Themes</h6>
                                    <h6 className="text-muted">✔️ Cancel or Upgrade Anytime</h6>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-5" style={{ width: '22rem', borderRadius: "0%" }}>
                            <div className="card-body">
                                <h6 className="card-title text-center mt-4 fw-bolder">CLOUD VPS 10x</h6>
                                <div id="pricing-card-grad" className="mt-5">
                                    <div id="price">$30.00</div>
                                    <span className="text-white fw-bold">MONTHLY</span>
                                </div>
                                <p className="card-text text-center text-secondary ms-4 mt-4" style={{ width: "280px" }}>
                                    Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus
                                </p>
                                <hr className="mt-5" />
                                <div id="plan-content" className="mt-5">
                                    <h6 className="text-muted">✔️ 1 TB Cloud Space</h6>
                                    <h6 className="text-muted">✔️ 8 TB Data Transfer</h6>
                                    <h6 className="text-muted">✔️ Fully Managed Panel</h6>
                                    <h6 className="text-muted">✔️ 15-minute Quick Support</h6>
                                    <h6 className="text-muted">✔️ Unlimted Web Addons</h6>
                                    <h6 className="text-muted">✔️ Cancel or Upgrade Anytime</h6>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-5" style={{ width: '22rem', borderRadius: "0%" }}>
                            <div className="card-body">
                                <h6 className="card-title text-center mt-4 fw-bolder">ADVANCED CLOUD</h6>
                                <div id="pricing-card" className="mt-5">
                                    <div id="price">$72.25</div>
                                    <span className="text-white fw-bold">MONTHLY</span>
                                </div>
                                <p className="card-text text-center text-secondary ms-4 mt-4" style={{ width: "280px" }}>
                                    Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus
                                </p>
                                <hr className="mt-5" />
                                <div id="plan-content" className="mt-5">
                                    <h6 className="text-muted">✔️ 4 TB Cloud Space</h6>
                                    <h6 className="text-muted">✔️ 20 TB Data Transfer</h6>
                                    <h6 className="text-muted">✔️ Fully Managed Panel</h6>
                                    <h6 className="text-muted">✔️ 15-minute Quick Support</h6>
                                    <h6 className="text-muted">✔️ Top Notch Web Apps</h6>
                                    <h6 className="text-muted mb-5">✔️ Advanced Scalable</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="planbtn" className="container d-flex justify-content-around flex-wrap ">
                        <button type="button" className="btn btn-info text-white fw-bold" style={{ borderRadius: '0%' }}>START PLAN</button>
                        <button type="button" id="clrbtn" className="btn fw-bold" style={{ borderRadius: '0%' }}>SELECT PLAN</button>
                        <button type="button" className="btn btn-info text-white fw-bold" style={{ borderRadius: '0%' }}>TAKE IT NOW</button>
                    </div>

                    <section className="container ">
                        <p className="text-info fw-bold text-center" style={{ marginTop: '150px' }}>Best Quality for you</p>
                        <h2 className="fw-bold text-center">Cloud Features</h2>

                        <div className="container my-5">
                            <div className="row g-4 mt-4">

                                <div className="col-md-6">
                                    <div className="card border-0 shadow-md">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="icon me-3"><img src={planimg} alt=".." /></div>
                                            <div>
                                                <h5 className="card-title fw-bold">Load Balanced</h5>
                                                <p className="card-text">Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="card border-0 shadow-md">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="icon me-3"><img src={planimg} alt=".." /></div>
                                            <div>
                                                <h5 className="card-title fw-bold">99.9% Uptime Guaranteed</h5>
                                                <p className="card-text">Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 mt-4">

                                <div className="col-md-6">
                                    <div className="card border-0 shadow-md">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="icon me-3"><img src={planimg} alt=".." /></div>
                                            <div>
                                                <h5 className="card-title fw-bold">Top Reliability</h5>
                                                <p className="card-text">Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="card border-0 shadow-md">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="icon me-3"><img src={planimg} alt=".." /></div>
                                            <div>
                                                <h5 className="card-title fw-bold">High Security</h5>
                                                <p className="card-text">Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 mt-4">

                                <div className="col-md-6">
                                    <div className="card border-0 shadow-md">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="icon me-3"><img src={planimg} alt=".." /></div>
                                            <div>
                                                <h5 className="card-title fw-bold">Quality Hardwares</h5>
                                                <p className="card-text">Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="card border-0 shadow-md">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="icon me-3"><img src={planimg} alt=".." /></div>
                                            <div>
                                                <h5 className="card-title fw-bold">Network Solutions</h5>
                                                <p className="card-text">Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> <br />
                        </div>
                    </section>
                </div>
            </div>
            <div >
                <Footer />
            </div>
        </>

    );
}
