// Footer.js
import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-2 w-full  absolute translate-y-0     ">
      <div className="container mx-auto  ">
        <div className="mb-2 flex justify-around items-center ">
          <h3 className="text-md font-bold">Contact Us</h3>
          <p>Email: ainfo@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <div>
            <h3 className="text-md font-bold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white hover:text-gray-300">
                <i className=" fab fa-facebook-square text-md"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter-square text-md"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram-square text-md"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
