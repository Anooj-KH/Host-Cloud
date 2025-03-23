import React, { Component } from 'react';
import Navbar from "../Navbar/Navebar";
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';
import aboutimg from '../../assets/aboutimg.png';
import '../About/about.css';
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleContent: 'history', // Default content to display
    };
  }

  showContent = (id) => {
    this.setState({ visibleContent: id });
  };

  render() {
    const { visibleContent } = this.state;

    return (
      <div>
        <Navbar />
        <section id="aboutimg">
          <h1>About Us</h1>
          <div className="breadcrumb">
            <NavLink to="/">
              <span className="nav-link me-2 text-white">
                <strong>Home</strong>
              </span>
            </NavLink>
            / About us
          </div>
        </section>

        <section>
          <div className="container-fluid bg-light">
            <div className="row g-4 mt-5">
              <div className="col-sm-12 col-md-6 text-center">
                <img
                  src={aboutimg}
                  alt="about"
                  className="aboutpic"
                />
              </div>
              <div className="col-sm-12 col-md-6" id="aboutcontent">
                <p className="text-info fw-bold">About Us</p>
                <h2 className="fw-bold">Background of our company</h2>
                <p className="text-muted mt-4">
                  Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare,
                  suscipit lobortis augue volutpat. Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh.
                </p>
                <hr className='mt-5' />
                <nav className="navbar navbar-expand-lg mt-5 fs-5">
                  <ul className="navbar-nav flex-wrap">
                    <li className="nav-item">
                      <button
                        className={`nav-link ms-3 fw-bold btn btn-link ${visibleContent === 'history' ? 'text-info' : 'text-dark'
                          }`}
                        onClick={() => this.showContent('history')}
                      >
                        Our History
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ms-3 fw-bold btn btn-link ${visibleContent === 'cloud' ? 'text-info' : 'text-dark'
                          }`}
                        onClick={() => this.showContent('cloud')}
                      >
                        Our Cloud
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ms-3 fw-bold btn btn-link ${visibleContent === 'network' ? 'text-info' : 'text-dark'
                          }`}
                        onClick={() => this.showContent('network')}
                      >
                        Our Network
                      </button>
                    </li>
                  </ul>

                </nav>

                {visibleContent === 'history' && (
                  <div>
                    <p className="content text-muted">
                      Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis.
                      Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis augue volutpat.
                    </p>
                  </div>
                )}
                {visibleContent === 'cloud' && (
                  <div>
                    <p className="content text-muted">
                      Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam ducimus molestiae
                      praesentium doloribus. Ipsa et quibusdam deleniti nesciunt ad! Dolor iusto, eveniet sapiente vero in dolore laborum earum
                      ipsam!
                    </p>
                  </div>
                )}
                {visibleContent === 'network' && (
                  <div>
                    <p className="content text-muted">
                      Fusce in semper velit, at tempus augue. Morbi quis auctor ipsum, ut accumsan neque. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Officia, obcaecati vitae quia magnam porro necessitatibus ducimus sit, quos facilis officiis, molestiae
                      vel ad harum minima repudiandae est explicabo laborum dolor.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id='team'>
          <p className='text-info fw-bold'>Our Team</p>
          <h2 className='fw-bold'>Meet the greatest people</h2>
          <p className='mt-4 text-muted mx-auto' style={{ maxWidth: "700px" }}>
            Integer blandit, tellus varius vulputate cursus, purus orci tincidunt tortor,
            eget tincidunt elit justo non leo. Donec mollis nulla id est suscipit, ut laoreet nibh faucibus.
          </p>

          <div className='container'>
            <div className='row justify-content-center mt-5'>
              {[{ name: 'Jonathan Smart', img: card1 }, { name: 'Mary Morris', img: card2 }, { name: 'George White', img: card3 }].map((card, idx) => (
                <div key={idx} className="col-sm-12 col-md-4">
                  <div className="card mt-3" style={{ width: "350px" }}>
                    <img className="card-img-top" src={card.img} alt="Card img" />
                    <div className="card-body" id='body'>
                      <h4 className="card-title">{card.name}</h4>
                      <p className="card-text text-info">Co-Founder</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default About;
