import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Gridview from '../components/Gridview'
import './HomeCSS/home.css';
import './HomeCSS/MediaQuery.css';

const Home = () => {
    const [menuActive, setMenuActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const header = document.querySelector('header');
        const section = document.querySelector('section');

        if (menuActive) {
            header.classList.add('active');
            section.classList.add('active');
        } else {
            header.classList.remove('active');
            section.classList.remove('active');
        }
    }, [menuActive, navigate]);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div>
            <header className={menuActive ? 'active' : ''}>
                <Link to="/" className="logo">FTV Salon</Link>
                <div className="menuToggle" onClick={toggleMenu}></div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Our Blogs</Link></li>
                        <li><Link target='_blank' to="/service">Service</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/sign-up">SignUp</Link></li>
                        
                        <li className='wap'>
                            <Link target='_blank' to="https://wa.me/9212758888">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className={`sectionFirst ${menuActive ? 'active' : ''}`}>
                <div className="frontPage">
                    <div className="address">Be the most beautiful and fashionable person</div>
                    <h2 className="heading">FTV Beauty Salon</h2>
                    <p className="paragra">
                        WE AT FTV SALON INTRODUCE STANDARDIZED
                        SALON GROOMING SERVICES FOR INDIAN CITIZENS.
                        <br />
                        WE ASPIRE TO BECOME THE LEADER OF LUXURY SALON BUSINESS IN INDIA PROVIDING WORLD-CLASS SALON TREATMENT TO OUR CLIENTS.
                    </p>

                    <div className="btn">
                        <Link to="/about">About Us</Link>
                    </div>

                    {/* Add the new button here */}
                    <div className="btn">
                        <button
                            className="mission-button"
                            onClick={() => navigate('/mission-and-goal')}
                        >
                            Learn About Our Mission and Goals
                        </button>
                    </div>
                </div>

                <section className="transform-img">
                    <img src="./img/background180.svg" alt="Background" />
                </section>
            </section>

            <section className="sectionSecond">
                <div className="fourIMG">
                    <img src="./img/model4.jpg" alt="Model 1" />
                    <img src="./img/model2.jpg" alt="Model 2" />
                    <img src="./img/model3.jpg" alt="Model 3" />
                    <img src="./img/model1.jpg" alt="Model 4" />
                </div>

                <div className="textInfo">
                    <div className="greet">Welcome To</div>
                    <h2 className="title">FTV Beauty Salon</h2>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut odio vitae. Voluptatibus deleniti at ullam error, voluptates pariatur quibusdam! Corporis corrupti in molestias consequuntur dolorum eligendi vel animi suscipit!</p>
                </div>
            </section>

            <section>
                <Gridview/>
            </section>


            <section className="sectionThree">
                <h2>Services For Every Occasion</h2>
                <p>At FTV Salon , We offer services for every Occasion.</p>

                <div className="servicesBox">
                    <div className="box">
                        <h2>Weddings Makeup</h2>
                        <p>A little detail about the services you've mentioned above. Tell them what you do</p>
                    </div>
                    <div className="box">
                        <h2>Party Makeup</h2>
                        <p>A little detail about the services you've mentioned above. Tell them what you do</p>
                    </div>
                    <div className="box">
                        <h2>Fashion Makeup</h2>
                        <p>A little detail about the services you've mentioned above. Tell them what you do</p>
                    </div>
                    <div className="box">
                        <h2>Photo Makeup</h2>
                        <p>A little detail about the services you've mentioned above. Tell them what you do</p>
                    </div>
                </div>
            </section>

            <section className="DiscountSection">
                <div className="img">
                    <img src="./img/25off.png" alt="25% Off" />
                </div>

                <div className="textinfo">
                    <h2>Book Your Appointment Now And Get Exciting Offers !</h2>
                </div>

                <div className="btn">
                <button className="booking-button"
                onClick={() => navigate('/appointment-form')}
                >
                Book an Appointment
                </button>
                </div>
            </section>

            <div className="transformBox">
                <h2>Priced Beauty Solutions</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore id earum, voluptas consectetur explicabo tempore aut placeat blanditiis dolores dolorum.</p>
            </div>

            <section className="sectionFive">
                <div className="BeautySolutions">
                    <h2>Hair Cuts</h2>
                    <span></span>
                    <ul>
                        <li>Women's Haircut <span>₹ 95</span></li>
                        <li>Teen's Haircut <span>₹ 40+</span></li>
                        <li>Stylish Haircut <span>₹ 55</span></li>
                        <li>Children's Haircut <span>₹ 40+</span></li>
                    </ul>
                </div>
                <div className="BeautySolutions">
                    <h2>Make Up</h2>
                    <span></span>
                    <ul>
                        <li>Women's Haircut <span>₹ 95 </span></li>
                        <li>Teen's Haircut <span>₹ 95</span></li>
                        <li>Stylish Haircut <span>₹ 95</span></li>
                        <li>Children's Haircut <span>₹ 95</span></li>
                    </ul>
                </div>
                <div className="BeautySolutions">
                    <h2>Hair Color</h2>
                    <span></span>
                    <ul>
                        <li>Women's Haircut <span>₹ 95</span></li>
                        <li>Teen's Haircut <span>₹ 95</span></li>
                        <li>Stylish Haircut <span>₹ 95</span></li>
                        <li>Children's Haircut <span>₹ 95</span></li>
                    </ul>
                </div>
                <div className="BeautySolutions">
                    <h2>Skin Care</h2>
                    <span></span>
                    <ul>
                        <li>Women's Haircut <span>₹ 95</span></li>
                        <li>Teen's Haircut <span>₹ 95</span></li>
                        <li>Stylish Haircut <span>₹ 95</span></li>
                        <li>Children's Haircut <span>₹ 95</span></li>
                    </ul>
                </div>
            </section>

            <section className="sectionSix">
                <h2>Review Us</h2>
                <div className="icon">
                    <Link to="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    <Link to="#"><FontAwesomeIcon icon={faGoogle} /></Link>
                    <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>

                <div className="imgicon">
                    <img src="./img/ftv.png" alt="Testimonial" />
                </div>

                <p>DUE TO FASHIONTV’S BRAND POPULARITY AND OUR CUSTOMERS LOVE TO POST, LIKE, SHARE, COMMENT, CHECK-IN, TAKE PICTURES, SHOOT VIDEOS, TAG, AND MORE IN ALL OF OUR LOCATIONS.</p>

            </section>
        </div>
    );
};

export default Home;
