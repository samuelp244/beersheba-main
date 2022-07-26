import React from 'react'
// import slide1 from "../../assets/home-slidebar-pictures/image-2.jpg"t
import slide2 from "../../assets/home-slidebar-pictures/lord.JPG";
import slide3 from "../../assets/home-slidebar-pictures/livenew.png";
import useMediaQuery from '../../Hooks/useMediaQuery';
import { Link } from 'react-router-dom';

const BeershebaCarousel = () => {
    const Sm = useMediaQuery("(max-width: 550px)")
  return (
    <div className={Sm?" carousel-container container-fluid px-0":" carousel-container container-fluid "}>
            <div id="carouselExampleIndicators" className="carousel slide shadow-lg  mb-5 bg-white" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button> 
                    {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide2} className="d-block  max-h-96 w-100" alt="..."/>
                    </div>
                    <Link to="/live" className="carousel-item">
                        <img src={slide3} className="d-block max-h-96 w-100" alt="..."/>
                    </Link>
                    {/* <Link to="/live" className="carousel-item">
                        <img src={slide3} className="d-block max-h-96 w-100" alt="..."/>
                    </Link> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
  );
}

export default BeershebaCarousel