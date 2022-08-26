import React from "react";
import {FaHome,FaRegEnvelope} from "react-icons/fa";
import {HiOutlinePhone} from "react-icons/hi";
import { Link } from "react-router-dom";
export default function Footer(){
    const d = new Date();
    let currentYear = d.getFullYear();
    // const topColor = "#393E46"
    // const bottomColor = "#222831"
    return (
        <>
          <div className={`border shadow-lg bg-[#393E46] `}>

            <footer className="text-center text-lg-start ">

              <div className="container footer-inner p-4 pb-0">

                <section className=" text-white">

                  <div className="row">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">
                        BEERSHEBA
                      </h6>
                      <p>
                        
                      </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />


                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">About us</h6>
                      <p>
                        <Link className="" to="/Shorthistory">A Short History</Link>
                      </p>
                      <p>
                        <Link className="" to="oursociety">Our Society</Link>
                      </p>
                      <p>
                        <Link className="" to="/gallery">Gallery</Link>
                      </p>
                      <p>
                        <Link className="" to="/locations">Locations</Link>
                      </p>
                    </div>


                    <hr className="w-100 clearfix d-md-none" />


                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">
                        Resources
                      </h6>
                      <p>
                        <Link className="" to="/live">Live</Link>
                      </p>
                      <p>
                        <Link className="" to="/series">Series</Link>
                      </p>
                      <p>
                        <Link className="" to="/meetings">Meetings</Link>
                      </p>
                      <p>
                        {/* <a className="" href="!#">#########</a> */}
                      </p>
                    </div>


                    <hr className="w-100 clearfix d-md-none" />


                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                      <div className="flex"><span className="p-1"><FaHome size={"20px"}/></span><p className=""> opp spencers, near boatclub park, Kakinada, Andhra Pradesh 533005</p></div>
                      <div className="flex"><span className="p-1"><FaRegEnvelope size={"20px"}/></span><p className="px-1">info@gmail.com</p></div>
                      <div className="flex"><span className="p-1"><HiOutlinePhone size={"20px"}/></span><p className="px-1">+ 01 234 567 88</p></div>
                      {/* <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p> */}
                      {/* <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p> */}
                      {/* <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
                    </div>

                  </div>

                </section>


                <hr className="my-3" />

                </div>
                </footer>
                <section className={`container-fluid text-white bg-[#222831]`}>
                  <div className="row d-flex align-items-center">

                    <div className="col-md-7 col-lg-8 text-center text-md-start">

                      <div className="p-3">
                        © {currentYear} Copyright:
                        <a className="" href="/"> Beershebakkd.org</a>
                      </div>

                    </div>



                    {/* <div className="faf-buttons col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                      <a className="btn btn-outline-light btn-floating m-1 " role="button" href="!#"><i className="fab fa-facebook-f "></i></a>


                      <a className="btn btn-outline-light btn-floating m-1 " role="button" href="!#"><i className="fab fa-twitter"></i></a>


                      <a className="btn btn-outline-light btn-floating m-1 " role="button" href="!#"><i className="fab fa-google"></i></a>


                      <a className="btn btn-outline-light btn-floating m-1 " role="button" href="!#"><i className="fab fa-instagram"></i></a>
                    </div> */}

                  </div>
                </section>

              

            

          </div>

        </>
    );
}
