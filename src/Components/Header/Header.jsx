import React from 'react';
import HANLOGO from './Assets/images/HANLOGO.png'; 
import './header.css';

export default function Header (){
    return(
        <>
   <header className='header'>
    <div className='logo'>
        {/* <HANLOGO/> */}
        <img src={HANLOGO} alt="HAN LOGO" />
    </div>
        <nav>
            <a href="https://hantechnologies.in/">Home</a>
            <a href="https://hantechnologies.in/">about</a>
            <a href="https://hantechnologies.in/services/">services</a>
            <a href="https://hantechnologies.in/contact/">contact</a>
        </nav>
        <button className="quote-button">Get a Quote</button>
 
   </header>
   </>
    );
}

