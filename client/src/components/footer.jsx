import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="h-auto bg-[#131A22] py-6 overflow-hidden">
      <div className="grid max-w-5xl grid-cols-1 gap-12 mx-auto text-white md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <img
            className="w-[100px] lg:w-[120px] overflow-hidden"
            src="https://www.ftvsalonacademy.org/wp-content/uploads/2017/07/logo.png"
            alt=""
          />
          <h4 className="text-center lg:text-left overflow-hidden">
            Launchpad of your truly International Career with flexible courses
            at your time and your pace in FTV Salon Academy.
          </h4>
          <img
            className="w-[100px] lg:w-[120px] overflow-hidden"
            src="https://www.ftvsalonacademy.org/wp-content/uploads/2016/12/footer-logo-ftv.png"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start">
          <div className="relative">
            <h3 className="inline-block text-2xl lg:text-3xl overflow-hidden">Quick Links</h3>
            <div className="absolute bottom-0 left-0 w-[70%] h-[2px] bg-[#1ac331]"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <ul className="flex flex-col gap-1">
              <li>
                <a href="#" className="decoration-solid">
                  Calibre With Courses
                </a>
              </li>
              <li>
                <a href="/about" className="decoration-solid">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="decoration-solid">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="decoration-solid">
                  Franchise Opportunity
                </a>
              </li>
              <li>
                <a href="#" className="decoration-solid">
                  Download Certificate
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="#" className="decoration-solid">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#" className="decoration-solid">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="decoration-solid">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="decoration-solid">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="decoration-solid">
                  Online Learning Program
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start">
          <div className="relative">
            <h3 className="inline-block text-2xl lg:text-3xl overflow-hidden">GET IN TOUCH</h3>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff3232]"></div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-2 hover:text-[rgb(85,224,255)] overflow-hidden">
              <BsFillTelephoneOutboundFill size={22} />
              <a
                href="tel:+9304922632"
                className="hover:text-[rgb(85,224,255)]"
              >
                +91 9266665444
              </a>
            </span>
            <span className="flex items-center gap-2 hover:text-sky-600 overflow-hidden">
              <SiMinutemailer size={22} />
              <a
                href="mailto:info@fsalonacademy.org"
                className="hover:text-[#FD2323]"
              >
                - info@fsalonacademy.org
              </a>
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl overflow-hidden">FOLLOW US</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/ftv-salon-academy/"
              className="hover:text-sky-500 overflow-hidden"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/ftv_salon_academy/"
              className="hover:text-red-500 overflow-hidden"
            >
              <BsInstagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/fashiontvsalonacademy"
              className="hover:text-blue-500 overflow-hidden"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCR-9Gp5EkU4LMRtVp13oLgw"
              className="hover:text-red-500 overflow-hidden"
            >
              <IoLogoYoutube size={22} />
            </a>
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2FftvsalonAcademy"
              className="hover:text-sky-400 overflow-hidden"
            >
              <FaTwitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

