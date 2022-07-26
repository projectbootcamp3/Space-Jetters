import React from "react";
import Auth from "../utils/auth";
import heroImage from "../assets/home-images/space-station.jpg"
import spaceImg from "../assets/home-images/section-d-img.jpg"
import testimonial1 from "../assets/testimonials/testimonial-1.jpg"
import testimonial2 from "../assets/testimonials/testimonial-2.jpg"
import testimonial3 from "../assets/testimonials/testimonial-3.jpg"
import testimonial4 from "../assets/testimonials/testimonial-4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCalendar, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Home = () => {
  const loggedIn = Auth.loggedIn();
  return (
    <main id="main">
      <div className="hero_image"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center",
        }}>
        {loggedIn && (
          <section className="section-hero">
          </section>
        )}
        {/* MAIN SECTION WITH HERO IMAGE*/}
        <div className="hidden-box"><h1 className="hide hidden-title">Welcome to the <span className="highlight">future</span> of tourism.</h1></div>
        <div className="main-section-wrapper">
          <div className="inv-box"></div>
          <div className="main-section">
            <h1>The <span className="highlight"> best experience</span> in your life will come true with SpaceJetters!</h1>
            <article>
              <p>
                SpaceJetters is a travel agency company that allows the customers to travel outside Earth to other places in the Solar System.
              </p>
            </article>
            <div className="btn-box">
              {Auth.loggedIn() ? (
                <>
                  <Link to="/destinations" className="btn-secondary link">explore</Link>
                  <Link to="/rockets" className="btn-3">rockets</Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn-secondary">explore</Link>
                  <Link to="/login" className="btn-3">rockets</Link>
                </>
              )}
            </div>
          </div>
        </div>
        
      </div>
      <div className="section-a-wrapper">
        <section className="section section-a">
          <div className="subtitle-container">
            <div className="line"></div>
            <h2 className="sub-title">Secure and Affordable </h2>
            <div className="line"></div>
          </div>
          <div className="text-container">
            <p> Flying outside Earth with SpaceJetters will provide you an amazing and  <span className="highlight">breathtaking experience</span> with  <span className="highlight">affordable prices</span>. Our team is well prepared to make your trip <span className="highlight">secure</span> and provide you with all the guidance and information you need. Any questions? Follow the contact us button below:
            </p>
            <div></div>
            <div>
              {Auth.loggedIn() ? (
                <>
                  <button className="btn-primary" >
                    <Link to="/contact" className="link">Contacts Us</Link>
                    <span className="btn-span"></span>
                  </button>
                </>
              ) : (
                <>
                  <button className="btn-primary">
                    <Link to="/login">Contacts Us</Link>
                    <span className="btn-span"></span>
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
      {/*Section-B Testimonials*/}
      <div className="section-b-wrapper">
        <section className="section section-b">
          {/*Section title */}
          <div className="subtitle-container">
            <div className="line"></div>
            <h2 className="sub-title">Testimonials</h2>
            <div className="line"></div>
          </div>
          <div id="home-b" className="text-center py-2">
            <div className="container">
              <p className="lead">
                See what our customers say
              </p>
              {/*Testimonials container */}
              <div className="process testimonials-container">
                {/* First */}
                <div>
                  <div className="circle-box">
                    <img alt="" className=" fa-4x circle-box-img my-2" src={testimonial1} />
                    <div className="process-step"><FontAwesomeIcon icon={faStar} /></div>
                  </div>
                  <h3 className="p-2">Leon Milles</h3>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                    voluptas laborum repellendus dolorum! Harum, cupiditate.
                  </p>
                </div>
                {/* Second */}
                <div>
                  <div className="circle-box">
                    <img alt="" className=" fa-4x circle-box-img my-2" src={testimonial2} />
                    <div className="process-step"><FontAwesomeIcon icon={faStar} /></div>
                  </div>
                  <h3 className="p-2">Tayeon Rose</h3>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                    voluptas laborum repellendus dolorum! Harum, cupiditate.
                  </p>
                </div>
                {/* Third */}
                <div className="box">
                  <div className="circle-box">
                    <img alt="" className=" fa-4x circle-box-img my-2" src={testimonial3} />
                    <div className="process-step"><FontAwesomeIcon icon={faStar} /></div>
                  </div>
                  <h3 className="p-2">Anna Louise</h3>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                    voluptas laborum repellendus dolorum! Harum, cupiditate.
                  </p>
                </div>
                {/* Fourth */}
                <div>
                  <div className="circle-box">
                    <img alt="" className=" fa-4x circle-box-img my-2" src={testimonial4} />
                    <div className="process-step"><FontAwesomeIcon icon={faStar} /></div>
                  </div>
                  <h3 className="p-2">Michael Phillip</h3>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                    voluptas laborum repellendus dolorum! Harum, cupiditate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Section C Services */}
      <section id="section-c" className="icons bg-light">
        <div className="subtitle-container">
          <div className="line"></div>
          <h2 className="sub-title">Steps</h2>
          <div className="line"></div>
        </div>
        <div className="flex-items">
          <div className="line-2 hide"></div>
          <div className="icon-box">
            <div className="blueIcon"><FontAwesomeIcon icon={faCalendar} /></div>
            <div>
              <h3>Choose the date</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div className="line-2 hide"></div>
          <div className="icon-box">
            <div className="blueIcon"> <i className="fa-solid fa-chalkboard-user"></i></div>
            <div >
              <h3>Prepare and Study</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div className="line-2 hide"></div>
          <div>
            <div className="blueIcon"><FontAwesomeIcon icon={faRocket} /></div>
            <div className="icon-box">
              <h3>Launch</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div className="line-2 hide"></div>
        </div>
      </section>
      {/* Section D */}
      <section className="section-d flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img alt="" className="astronault" src={spaceImg} />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <h4>Feel curious about the Universe?</h4>
              <h2>Learn more about the Universe with us!</h2>
              <p>
                Flying with <span className="highlight">SpaceJetters</span>, has given many people across the world the greatest moments in their life, but they also learn a lot from our services. Try our Nasa API and get a different image with description from NASA's telescope every day!
              </p>
              <a href="/nasaImages" className="btn-secondary">
                check here
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;