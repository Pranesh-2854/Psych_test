import React from 'react';
import './App.css'; 
import { useNavigate } from 'react-router-dom';
import img4 from './images/Img4.png';
import Navbar from './Navbars/Navbar';
import Footer from './Footer/Footer';
import AnimatedBackground from './Animations/Animations';

export default function LandingPage()
{
    const navigate = useNavigate();
    const handleStartClick = () => {
        navigate('/instructions'); 
    };
    return(
    <>
    <AnimatedBackground/>
    <Navbar/>
    <main>
    <div className="left">
    <h1 className="fade-in-heading">Welcome to the Psychometric Test!</h1>
    <p>Dive into our engaging test and see what amazing abilities you have in store!</p>
    <button className="start-button" onClick={handleStartClick}>Let's Begin</button>
    </div>
    <div className="right">
    <img src={img4} alt="Decorative" /> 
    </div>
    </main>
    <Footer/>
    </>)
}


    

