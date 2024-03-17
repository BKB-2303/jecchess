import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KnightGambit2 from "../assets/knightGambit2.png";
import JEC from "../assets/JEC_logo.jpg";
import B1 from '../assets/b1.jpeg';

const About = () => {

  // Function to handle image download
  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle image share
  const handleShare = (url) => {
    if (navigator.share) {
      navigator.share({
        title: 'Share Image',
        url: url,
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Share failed:', error));
    } else {
      console.log('Web Share API not supported');
    }
  };

  return (
    <div className='bg-gradient-to-r  from-slate-800 to-stone-950 min-h-screen'>
      <div className='bg-indigo-900 bg-opacity-10 p-4'></div>
      <header className="flex flex-col items-center justify-center">
        <img src={JEC} alt="Jorhat Engineering College Logo" className="h-16 border border-indigo-900 md:h-20 mt-4 mb-2" />
        <div className="flex items-center mb-4">
          <img src={KnightGambit2} alt="Knight's Gambit Logo" className="h-8 md:h-10 mr-2" />
          <h1 className="text-lg md:text-2xl font-bold text-gray-200">Knight's Gambit 2.0</h1>
        </div>
        <Link to="/">
  <button className="text-gray-200 font-bold hover:text-gray-400 text-sm mb-4 flex items-center">
    Back to 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
    </svg>
  </button>
</Link>

      </header>
      <p className="text-center text-gray-200 mt-4 mb-4">"Jorhat Engineering College Presents: Knight's Gambit 2.0 - Where Minds Clash and Kings Reign!"</p>

      {/* Grid of images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mx-auto max-w-screen-lg border border-indigo-950">
        <div className="relative">
          <img className="h-[300px] md:h-[400px] w-full rounded-lg" src={B1} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 flex justify-between items-center p-2">
            <button className="text-gray-200 font-bold text-sm mr-2" onClick={() => handleDownload(B1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
</button>
            <button className="text-gray-200 font-bold text-sm" onClick={() => handleShare(B1)}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
</button>
          </div>
        </div>
        <div className="relative">
          <img className="h-[300px] md:h-[400px] w-full rounded-lg" src={B1} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 flex justify-between items-center p-2">
            <button className="text-gray-200 font-bold text-sm mr-2" onClick={() => handleDownload(B1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
</button>
            <button className="text-gray-200 font-bold text-sm" onClick={() => handleShare(B1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
</button>
          </div>
        </div>
      
      </div>
      <p className=" text-center text-gray-200 mt-4">Share the images with your friends and fellow chess enthusiasts to spread the excitement of Open Blitz Chess Tournament!</p>
      <div className='p-4'></div>

    </div>
  );
};

export default About;
