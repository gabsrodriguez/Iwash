import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import fer from '../../../img/home/fer.png';
import lav from '../../../img/home/lav.png';
import linge from '../../../img/home/linge.png';

const Home = () => {
    return (
        <section className={styles.section}>

            <div className={["text-center", styles.main].join(' ')}>
                <div className={styles.bannerInfo}>
                    <div className="container">
                        <div className="style-banner text-center">
                            <p className="text-li mb-2">Wash, Dry &amp; Fold</p>
                            <h3 className="text-wh font-weight-bold text-uppercase">We Are Expert Cleaners</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about py-5" id="about">
                <div className="container py-xl-5 py-lg-3">
                    <div className="row">
                        <div className="col-lg-6 about-left-w3pvt pr-lg-5">
                            <h4 className="textOrange">Who we are?</h4>
                            <h3 className="tittle-w3layouts text-uppercase mt-3">
                                Laundry and Dry 
                                <br/>
                                Cleaning Services
                            </h3>
                            <p className="para-text mt-5">
                                We are the Best Laundry Services 
                                <br/>
                                est qui dolorem Lorem int ipsum dolor.
                            </p>
                        </div>
                        <div className="col-lg-6 about-right">
                            <p className="mt-4">
                            Self-service laundry facilities in the United States are most commonly called laundromats. "Washateria" is an alternate name for laundromat, but is not in common use outside of Texas. The term comes from the first laundromat in the United States, which was known as a Washateria and was opened on April 18, 1934 in Fort Worth, Texas, by C.A. Tannahill.
                            </p>
                            <p className="mt-4 mb-5">
                            Though steam-powered laundry machines were invented in the 19th century, their cost put them out of reach of many. Cantrell and others began renting short-term use of their machines. Most laundromats in the US are fully automated and coin-operated and generally unmanned, with many operating 24 hours a day. The invention of the coin-operated laundry machine is ascribed to Harry Greenwald of New York who created Greenwald Industries in 1957; the company marketed the devices through the 20th century.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={["py-5", styles.middleInfo].join(' ')}>
                <div className="container py-xl-5 py-3">
                    <h3 className="text40px text-center textBold textWhite mb-5 pb-lg-4 pt-lg-4">
                        <span className={styles.newCust}>
                            New customers save $10
                        </span>
                        Ut enim ad nostrud ullamco laboris 
                        <br/>
                        Nisi ut aliquip ex consequat.
                    </h3>
                    <div className="buttons-w3pvt text-center mt-lg-4 pb-lg-5">
                        <Link to="/about" className={["scroll mr-3", styles.buttonStyle].join(' ')}>Read More</Link>
                        <Link to="/contact" className={["scroll",styles.buttonStyle, styles.buttonStyle2].join(' ')}>Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className="container py-xl-5 pb-ly-3">
                <h3 className="w3ls-title text-center font-weight-bold text-da mb-5 pb-lg-4">
                    <span className={["mb-1", styles.ourService].join(' ')}>What we offer?</span>
				    Our Services
                </h3>
                <div className="row text-center">
                    <div className="col-lg-4 services-w3ls-grid">
                        <img src={fer} alt="" className="img-fluid" />
                        <h4 className="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 1</h4>
                        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                    </div>
                    <div className="col-lg-4 services-w3ls-grid my-lg-0 my-4">
                        <img src={lav} alt="" className="img-fluid" />
                        <h4 className="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 2</h4>
                        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                    </div>
                    <div className="col-lg-4 services-w3ls-grid">
                        <img src={linge} alt="" className="img-fluid" />
                        <h4 className="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 3</h4>
                        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                    </div>
                </div>
            </div>

            <div className="container p-2">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114937.54832567982!2d-80.21018223341697!3d25.81022472015342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1572315179765!5m2!1sen!2sus" width="100%" height="300"></iframe>
			</div>

        </section>
    );
};

export default Home;