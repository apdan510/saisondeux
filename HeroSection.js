import React from "react";
import "../App.css";
import "./HeroSection.css";
import "./Cards.css";
import CardItem from "./CardItem";
import "./Cards.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Season 2 Grow Journal</h1>
      <div className="cards">
        <h1>Title</h1>
        <h1>Pic Name</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <Carousel className="imagecell" infiniteLoop useKeyboardArrows>
              <div>
                <img src="https://ipfs.io/ipfs/QmeEsAerMGpwTXCKsrZeU8xNnTUpoGhGXTk3WCkN3WsFmu/bg.jpg" />
              </div>
              <div>
                <img src="https://ipfs.io/ipfs/QmeEsAerMGpwTXCKsrZeU8xNnTUpoGhGXTk3WCkN3WsFmu/bg.jpg" />
              </div>
              <div>
                <img src="https://ipfs.io/ipfs/QmeEsAerMGpwTXCKsrZeU8xNnTUpoGhGXTk3WCkN3WsFmu/bg.jpg" />
              </div>
              <div>
                <img src="https://ipfs.io/ipfs/QmeEsAerMGpwTXCKsrZeU8xNnTUpoGhGXTk3WCkN3WsFmu/bg.jpg" />
              </div>
              <div>
                <img src="https://ipfs.io/ipfs/QmeEsAerMGpwTXCKsrZeU8xNnTUpoGhGXTk3WCkN3WsFmu/bg.jpg" />
              </div>
              <div>
                <img src="https://ipfs.io/ipfs/QmeEsAerMGpwTXCKsrZeU8xNnTUpoGhGXTk3WCkN3WsFmu/bg.jpg" />
              </div>
              <div>
                <img src="https://ipfs.io/ipfs/QmeEsAerMGpwTXCKsrZeU8xNnTUpoGhGXTk3WCkN3WsFmu/bg.jpg" />
              </div>
              <div>
                <img src="https://ipfs.io/ipfs/QmeEsAerMGpwTXCKsrZeU8xNnTUpoGhGXTk3WCkN3WsFmu/bg.jpg" />
              </div>
              <div>
                <img src="https://ipfs.io/ipfs/QmeEsAerMGpwTXCKsrZeU8xNnTUpoGhGXTk3WCkN3WsFmu/bg.jpg" />
              </div>
              <div>
                <img src="https://ipfs.io/ipfs/QmeEsAerMGpwTXCKsrZeU8xNnTUpoGhGXTk3WCkN3WsFmu/bg.jpg" />
              </div>
            </Carousel>
            <h1>Incert file name here:</h1>
            <h1>Incert page name here:</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
