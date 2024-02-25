import React from "react";
import { email, instagram, facebook, phone, maps, youtube } from "./import";
import img1 from "../../assets/carousel3.1.jpg";
const Footer = () => {
  return (
    <div>
      <div class="footer" style={{ height: "50%" }}>
        <img src={img1}></img>
      </div>
      <div className="to-hide">
        <div className="ncc-bg-blue ncc-white">
          <div className="row mx-0 ">
            <div className="py-2 d-flex justify-content-between footerResponsive text-left">
              <div className="d-flex flex-column text-left px-2 element px-lg-4">
                <span id="title_footer" className="pb-1">
                  Contact Us:
                </span>
                <div className="d-flex align-items-center pt-2">
                  <img src={phone} />
                  <div className="px-2">
                    <p id="content" className="m-0 pb-1">
                      +91 9478128407
                    </p>
                    <p id="content" className="pb-1 m-0">
                      +91 9816292461
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-2">
                  <img src={email} alt="email" />
                  <div className="px-3">
                    <p id="content" className="m-0 pb-1">
                      <a
                        href="mailto:shukladk@nitj.ac.in"
                        className="text-white text-decoration-none"
                      >
                        email of ncc_nit_jalandhar
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column text-left px-2element px-lg-4">
                <span id="title_footer" className="pb-1">
                  Social Media:
                </span>
                <div className="d-flex align-items-center justify-content-between pt-4">
                 
                  <a
                    target="_blank"
                    id="logo3"
                    href="https://instagram.com/ncc_nit_jalandhar?igshid=MzRlODBiNWFlZA=="
                    rel="noreferrer"
                  >
                    <img
                      src={instagram}
                      className="me-2"
                      width="44px"
                      height="44px"
                    />
                  </a>
                  <a
                    target="_blank"
                    id="logo4"
                    href="https://www.google.com/maps/place/Dr+B+R+Ambedkar+National+Institute+of+Technology+Jalandhar/@31.3958746,75.5358439,16z/data=!4m19!1m12!4m11!1m3!2m2!1d75.5358654!2d31.3962134!1m6!1m2!1s0x391a51d30c180edf:0x5b7633718d17ef33!2sDr+B+R+Ambedkar+National+Institute+of+Technology+Jalandhar+Grand+Trunk+Road+Barnala+-+Amritsar+Bypass+Rd+Jalandhar,+Punjab+144011!2m2!1d75.5358439!2d31.3958746!3m5!1s0x391a51d30c180edf:0x5b7633718d17ef33!8m2!3d31.3958746!4d75.5358439!16zL20vMDRsZDVq?entry=ttu"
                    rel="noreferrer"
                  >
                    <img
                      src={maps}
                      className="me-2"
                      width="44px"
                      height="44px"
                    />
                  </a>
                </div>
              </div>

              <div className="d-flex flex-column text-left ele px-2ment NIT px-lg-4">
                <span id="title_footer" className="pb-1">
                  Website:
                </span>
                <div className="d-flex align-items-center pt-2">
                  <div>
                    <a
                      href="https://indiancc.nic.in/"
                      target="_blank"
                      id="content"
                      className="text-decoration-none text-white"
                      rel="noreferrer"
                    >
                      NCC Official
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-2">
                  <div>
                    <a
                      href="https://www.nitj.ac.in/"
                      target="_blank"
                      id="content"
                      className="m-0 pb-1"
                      rel="noreferrer"
                    >
                      NTT Jalandhar
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column text-left element">
                <span id="title_footer" className="pb-1">
                  Address:
                </span>
                <div className="d-flex align-items-center pt-2">
                  <p id="content" className="m-0 pb-1 address">
                    Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar,
                    Punjab 144008, NIT Jalandhar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="to-show">
        <p
          className="d-flex align-items-center text-center justify-content-center ncc-bg-copyright footer-copyright ncc-16 ncc-white py-2"
          id="content"
        >
          © Copyright 2023 - NCC NIT Jalandhar | All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
