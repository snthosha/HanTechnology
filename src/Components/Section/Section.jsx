// src/Components/Section/Section.js
import React from 'react';
import './section.css';
import side from './img/side.png'
import Mobileapp from './img/Mobileapp.png';
import Webapp from './img/Webapp.png';
import Saas from './img/Saas.png';
import Seo from './img/Seo.png'
import Sitting from './img/Sitting.png'

const Section = () => (
  <>
    <div className="main-section">
      <h1>All-in-one Hub for Mobile Apps, Web Apps, SAAS & SEO services</h1>
      <button className="get-started-button">Get Started</button>
      <div className='apps'>

        <div className='top'>
          <img src={Mobileapp} alt="MOBILE"  /> <samp>MOBILE APPS</samp>
          <img src={Webapp} alt="" /> <samp>WEB APPS</samp>
        </div>

        <div className='bottom'>
          <img src={Saas} alt="" /><samp>SAAS</samp>
          <img src={Seo} alt="" /><samp>SEO SERVICES</samp>
        </div>
      </div>
    </div>

    <div className="statistics-graphics">
      <div className="stat-graphic">
        <img src={side} alt="Side" />
      </div>
    </div>


<div className='pa-si'>
    <div className='para-sit'>
      <p> <samp>Welcome to HAN Technologies:</samp> We specialize in crafting innovative solutions that cater to all your needs in the digital sphere. Whether you’re looking to launch a cutting-edge mobile app, streamline your online operations with web apps, establish a captivating online presence with a stunning website, or boost your visibility and reach through SEO services, we’ve got you covered.</p>
      <br />
      <p> Partner with us today and experience the difference with HAN Technologies – where innovation meets excellence in every project we undertake.</p>
    </div>

    <div className='sit'>
      <img className='img-sit' src={Sitting} alt=""  />
    </div>
    </div>

  </>
);

export default Section;
