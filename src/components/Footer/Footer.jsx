import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <>
            <section>
                <div className="bg-light" style={{ height: '550px' }}>
                    <div>
                        <p className='text-white mt-5'>rkgjnjerbn</p>
                        <p className="text-center text-info mt-5 fw-bold">Testimonials</p>
                        <h2 className='text-center fw-bold'>What they say about us</h2>
                    </div>

                    <div id="testimonialCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="text-center">
                                    <div className="quote-icon">❝</div>
                                    <p className="testimonial-text">"Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."</p>
                                    <h5 className="author-name">William Smith</h5>
                                    <p className="author-title">New Co-Founder</p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="text-center">
                                    <div className="quote-icon">❝</div>
                                    <p className="testimonial-text">"Quisque lacinia sed velit et maximus. Quisque dictum, lacus a malesuada finibus, arcu magna luctus risus, eu accumsan risus elit vitae lacus."</p>
                                    <h5 className="author-name">Vinny Smart</h5>
                                    <p className="author-title">Digital Marketer</p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="text-center">
                                    <div className="quote-icon">❝</div>
                                    <p className="testimonial-text">"Vestibulum mauris ipsum, tempor tincidunt justo sit amet, bibendum tincidunt dui. Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis."</p>
                                    <h5 className="author-name">Trevor Liam</h5>
                                    <p className="author-title">Technology Chef</p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active bg-info" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" className='bg-info' aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" className='bg-info' aria-label="Slide 3"></button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <footer className="footer-section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-3 mb-4">
                                <h3>About Us</h3>
                                <p className='mt-5'>Host Cloud is provided by TemplateMo for free of charge. Anyone can download and use this CSS Bootstrap template for commercial purposes.</p>
                            </div>

                            <div className="col-md-3 mb-4">
                                <h3>Hosting Plans</h3>
                                <ul className='mt-5'>
                                    <li><a href="#teh">Basic Cloud 5X</a></li>
                                    <li><a href="#theth">Cloud VPS 10X</a></li>
                                    <li><a href="#herh">Advanced Cloud</a></li>
                                    <li><a href="#theth">Custom Designs</a></li>
                                    <li><a href="#th">Special Solutions</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3 mb-4">
                                <h3>Useful Links</h3>
                                <ul className='mt-5'>
                                    <li><a href="#eh">Cloud Hosting Platform</a></li>
                                    <li><a href="#eh">Light Speed Zone</a></li>
                                    <li><a href="#thyeth">Content Delivery Network</a></li>
                                    <li><a href="#46">Customer Support</a></li>
                                    <li><a href="#7">Latest News</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3 mb-4">
                                <h3>More Information</h3>
                                <ul className='mt-5'>
                                    <li>Phone: 010-020-0560</li>
                                    <li>Email: mail@company.com</li>
                                    <li>Support: support@company.com</li>
                                    <li>Website: www.company.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <hr style={{ width: "900px", marginLeft: "250px" }} />
                        <div className="mt-5">
                            <p>Copyright © 2024 Cloud Hosting Company - Designed by AnoojKH</p>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}
