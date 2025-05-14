import React from 'react';
import { Globe, Twitter, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-300 mr-2" />
              <span className="text-2xl font-bold text-white">
                GIS<span className="text-blue-300">2025</span>
              </span>
            </div>
            <p className="text-blue-200 mb-4">
              Global Initiative Summit 2025<br />
              Shaping the future of international policy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors duration-200">
                  About the Summit
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Program Schedule
                </a>
              </li>
              <li>
                <a href="#resources" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Resources
                </a>
              </li>
              <li>
                <a href="#news" className="text-blue-200 hover:text-white transition-colors duration-200">
                  News & Updates
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About the Organizer</h3>
            <p className="text-blue-200 mb-4">
              The Nexus Policy Institute is a leading think tank dedicated to advancing innovative solutions to global challenges through research, advocacy, and multi-stakeholder engagement.
            </p>
            <a 
              href="https://www.nexuspolicyinstitute.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors duration-200 inline-flex items-center"
            >
              Visit Institute Website
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-blue-200 mb-4">
              Subscribe to receive the latest news and updates about GIS2025.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-blue-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full placeholder-blue-400 border border-blue-700"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-r-md transition-colors duration-200"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
            <p className="text-blue-300 text-sm">
              By subscribing, you agree to receive updates from GIS2025 and the Nexus Policy Institute.
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-blue-800 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Global Initiative Summit. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;