import React, { useState } from 'react';
import "./avalab2.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import hh from "../assets/Reservation/hh.jpg";
import ff from "../assets/Reservation/ff.jpg";
import aa from "../assets/Reservation/aa.jpg";
import tt from "../assets/Reservation/tt.jpg";
import thalas from "../assets/Reservation/thalas.jpg";
import nn from "../assets/Reservation/nn.jpg";
import MailList from "../components/MailList"; // Corrected import statement
import { id } from 'date-fns/locale';

export default function Availb2() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        { id: 1, src: hh },
        { id: 2, src: ff },
        { id: 3, src: aa },
        { id: 4, src: tt },
        { id: 5, src: thalas },
        { id: 6, src: nn }
    ];

    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open &&
                    <div className="slider">
                        
                        <FontAwesomeIcon icon={faCircleXmark} onClick={() => setOpen(false)} className="close" />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />

                        <div className="sliderlWrapper"  >
                        
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                    </div>}
                <div className="hotelWrapper">
                    <button className='BookNow'>Reserve or book now !</button>
                    <h1 className="hotelTitle">Hotel Bel Azur Thalasso & Bungalows</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Yasmine Hammamet 8052</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location -24.5 km from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over 114d at this property and get a free airport taxi
                    </span>
                    <div className="photoGallery">
                        {photos.map((photo, index) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(index)} key={photo.id} src={photo.src} alt={`Image ${index + 1}`} className='hotelImg' />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className='hotelTitle'>Stay in the heart of Hammamet</h1>
                            <p className='hotelDesc'>
                                Les chambres sont réparties sur plusieurs étages et disposent toutes d'un système de climatisation ( à réglage individuel),
                                une salle de bain équipée d'une baignoire et d'un bidet,
                                une télévision à chaînes par satellite ,
                                un téléphone, sèche-cheveux , etc.
                            </p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Hammammet, this property has an Excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>945d</b>(9 night)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList /> {/* Corrected component name */}
                <Footer />
            </div>
        </div>
    );

}
