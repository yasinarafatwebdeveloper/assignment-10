// import React from 'react';

import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagramSquare />
          </div>
        </nav> 
        <aside>
          <p>Our product very significant and delicious.everyone can buy our products</p>
        </aside>
      </footer>
    );
};

export default Footer;