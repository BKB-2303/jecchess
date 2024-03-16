
import ECLECTIC_EUPHORIA from "../assets/ECLECTIC EUPHORIA .png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KnightGambit2 from "../assets/knightGambit2.png";

import PaymentQr from "../assets/PaymetnQr.png"; 
import KG1coordinators from '../assets/KG1coordinators.jpeg'
import KG1image1 from '../assets/KG1image1.jpg'
import KG1image2 from '../assets/KG1image2.jpeg'
import KG1image3 from '../assets/KG1image3.jpeg'
import KG1image4 from '../assets/KG1image4.jpeg'
import KG1image5 from '../assets/KG1image5.jpeg'
import KG1image6 from '../assets/KG1image6.jpeg'





import Map from "../assets/map.png"; 

import "./main.css";
import React, { useState,useEffect } from "react";

const Home = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (upiId) => {
    const textarea = document.createElement('textarea');
    textarea.value = upiId;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    setCopied(true);

  
    setTimeout(() => setCopied(false), 1500);
  };
  const galleryItems = [
    { 
      imageSrc: KG1coordinators, 
     
    },
  
    { 
      imageSrc: KG1image1, 
     
    },
    { 
      imageSrc: KG1image2, 
     
    },
    { 
      imageSrc: KG1image3, 
     
    },
    { 
      imageSrc: KG1image4, 
     
    },
    { 
      imageSrc: KG1image5, 
     
    },
    { 
      imageSrc: KG1image6, 
     
    },
    
  ];
  
  const carouselItems = [
    { 
      imageSrc: 'https://play-lh.googleusercontent.com/vfcgwewsTEz0t-aV119kMDNtYYOUOffUEWTUyOdFtir6upQMzg5JLzuyQRj_oJXHPXk', 
      text: 'Gloabal Reach' 
    },
  
   
  ];
  
  const carouselSettings = {
    items: carouselItems.length,
    autoPlay: true,
    autoPlayInterval: 2000,
    disableButtonsControls: true,
    dotsDisabled: true,
    infinite: true, 
    
  };
  const carouselSettingsGallery = {
    items: galleryItems.length,
    autoPlay: true,
    autoPlayInterval: 3000,
    disableButtonsControls: true,
    dotsDisabled: true,
    infinite: true,
    responsive: {
      0: { items: 1 }, 
      768: { items: 2 }, 
      1024: { items: 3 }, 
    },
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
 
  
  return (
    <div className="relative bg-gradient-to-r from-blue-950 to-stone-950/95  ">

      {/* <div
        className="absolute inset-0 z-[-1] filter blur-sm bg-cover bg-center"
        style={{ backgroundImage: `url(${ECLECTIC_EUPHORIA})` }}
      ></div> */}


<nav className="bg-white ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      
      <img src={KnightGambit2} className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-stone-900 text-sm font-semibold whitespace-nowrap">Knight's Gambit 2.0</span>
    </a>

    {/* Mobile Menu Button */}
    <button
      onClick={handleMobileMenuToggle}
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-950 border border-stone-950 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-default"
      aria-expanded={isMobileMenuOpen}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    {/* Mobile Menu */}
    <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} absolute top-24 inset-x-0 border bg-slate-900 bg-opacity-35  rounded-lg z-10`} id="navbar-default">
  <ul className="font-medium flex flex-col p-4 bg-slate-900 bg-opacity-75  space-y-4 text-center">
    <li>
      <a href="/" className="block py-2 px-3 bg-slate-900 bg-opacity-75 hover:bg-slate-950 rounded" aria-current="page">Home</a>
    </li>
    <li>
      <a href="#coordinators" className="block bg-slate-900 bg-opacity-75 py-2 px-3 text-gray-200 rounded hover:bg-slate-950">Contact</a>
    </li>
    <li>
      <a href="#gallery" className="block bg-slate-900 bg-opacity-75 py-2 px-3 text-gray-200 rounded hover:bg-slate-950">Gallery</a>
    </li>
    <li>
      <a href="/formore" className="block bg-slate-900 bg-opacity-75 py-2 px-3 text-gray-200 rounded hover:bg-slate-950">For more</a>
    </li>
  </ul>
</div>


    {/* Desktop Menu */}
    <div className=" md:flex md:items-center md:w-auto hidden" id="navbar-default">
      <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
        <li>
          <a href="/" className="block py-2 px-3 text-stone-950  rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#coordinators" className="block py-2 px-3 text-stone-950 rounded hover:bg-slate-400 md:hover:bg-transparent md:border-0 md:p-0">Contact</a>
        </li>
        <li>
          <a href="#gallery" className="block py-2 px-3 text-stone-950 rounded hover:bg-slate-400 md:hover:bg-transparent md:border-0 md:p-0">Gallery</a>
        </li>
        <li>
          <a href="/formore" className="block py-2 px-3 text-stone-950 rounded hover:bg-slate-400 md:hover:bg-transparent md:border-0 md:p-0">For More</a>
        </li>
      </ul>
    </div>

  </div>
</nav>



<div className="p-3 bg-slate-800 opacity-50 shadow-lg"></div>


<header className="flex mt-4 flex-col items-center justify-center relative">
  {/* Animation divs - Left side */}
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center">
    <div className="w-8 h-8 bg-red-400 bg-opacity-40 rounded-md  mr-1"></div>
    <div className="w-8 h-8 bg-white bg-opacity-40 animate-spin rounded-md  mr-1"></div>
  </div>

  {/* Your image */}
  <img
    src={ECLECTIC_EUPHORIA}
    alt="ECLECTIC_EUPHORIA"
    className="h-40 mb-2 transition-transform animate-scale-continuous transform hover:scale-110 animate-scale"
  />

  {/* Animation divs - Right side */}
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center ">
    <div className="w-8 h-8 bg-white animate-spin rounded-md bg-opacity-40 mr-1"></div>
    <div className="w-8 h-8 bg-red-400 rounded-md bg-opacity-40 mr-1"></div>
  </div>

<div class="flex items-center">
  <h1 class="mt-2 text-2xl text-gray-200 inline-flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    Presents
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  </h1>
</div>

  <div className="flex items-center mt-2">
    {/* Add your icon image here */}
    <img src={KnightGambit2} alt="Icon" className="h-8 w-8 mr-2 transform hover:scale-110 animate-scale" />
    <h1 className="text-2xl text-gray-200 transform hover:scale-110 animate-scale">Knight's Gambit</h1>
  </div>
  <h1 className="mt-2 text-xl text-gray-200">2.0</h1>


  
</header>

      <div className="text-center  mx-auto max-w-screen-xl bg-stone-800 bg-opacity-20 p-6 rounded-lg shadow-lg">
    
      <div class="flex items-center justify-center">
  <h1 class="mt-2 text-2xl text-gray-200 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
    Venue 
  </h1>
  <a href="https://maps.app.goo.gl/NzuUe8pe8JpAtXAT7" target="_blank" rel="noopener noreferrer" class="inline-block ml-1">
    <img src={Map} alt="Map Icon" class="w-10 h-10" />
  </a>
  <span class="text-2xl text-rose-200 animate-pulse ml-1">click here</span> 
</div>


    <a href="https://jecassam.ac.in/">
  <h1 className="mt-4 text-lg text-rose-50 ">Jorhat Engineering College</h1>
</a>

    <h1 className="mt-2 text-base text-gray-200">Garmur, Jorhat, Assam</h1>
</div>

      <div className="my-8 mx-auto max-w-screen-xl bg-opacity-70 bg-indigo-950 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Box 1 */}
        <div className="bg-slate-900 bg-opacity-70 p-2 rounded-md shadow-md hover:bg-slate-950 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg  mb-2 text-gray-400">
            Open Blitz Chess Tournament
          </h2>
          <p className="text-gray-300 text-base">
            🏆 Prizes Worth{" "}
            <span className="text-white text-xl font-bold">
              Rs. 24,000/-
            </span>
          </p>
          <p className="text-gray-300 font-bold">Entry Fee: Rs. 400</p>
          <p className="text-gray-300">
            <span className="text-2xl text-red-500 animate-pulse">50%</span> OFF
            for JECian
          </p>

          <p className="text-gray-200 mt-2">
            Last Date of Registration:{" "}
            <span className="text-stone-300  font-bold">22 March, 2024</span>
          </p>
          <p className="text-gray-200">
            Date:{" "}
            <span className="text-gray-400 ">23 March, 2024</span>
          </p>
          
          <p className="text-gray-200">
            Venue:{" "}
            <span className="text-gray-400  ">NB 207,Drawing hall</span>
          </p>
          <p className="text-gray-200">
            
            <span className="text-gray-400  ">Jorhat Engineering College</span>
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-slate-900 bg-opacity-70 p-2 rounded-md shadow-md hover:bg-slate-950 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg mb-2  font-modern-antiqua text-gray-400 ">
            🌟 Tournament Schedule 🌟
          </h2>
          <p className="text-gray-300">1st Round: 9:30AM</p>
          <p className="text-gray-300">2nd Round: 10:15AM</p>
          <p className="text-gray-300">3rd Round: 11:00AM</p>
          <p className="text-gray-300">4th Round: 11:45AM</p>
          <p className="text-gray-300">5th Round: 12:30PM</p>
          <p className="text-gray-300">6th Round: 1:15PM</p>
          <p className="text-gray-300">*Number of rounds cited above may be more or less depending upon number of registered participants</p>
        </div>
      </div>
      <h1 className="mt-2 text-xl text-center text-gray-400 mb-4">Knight's Gambit 2.0 Sponsored by</h1>
      <AliceCarousel {...carouselSettings}>
    {carouselItems.map((item, index) => (
      <div key={index}>
        <img src={item.imageSrc} alt={`Carousel Image ${index + 1}`} className="carousel-image  mx-auto h-32 w-36" />
        <p className="text-center mt-2 text-gray-200">{item.text}</p>
      </div>
    ))}
  </AliceCarousel>
      <div className="mt-8 mx-auto max-w-screen-lg p-4 rounded-md shadow-md">
    <p className="text-gray-200 text-base">
        "Join 'Knights Gambit 2.0' at Phoenix 2024. It's not just a game; it's a battle of wits and strategy. Let's find the true chess champion!"
    </p>
    
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoT2kAyfiGD4hDmRiYkEBFTUKg1DrCUbO4fUsVp43_maYrtQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="bg-indigo-500 hover:bg-indigo-800 text-white px-4 py-3 rounded-md mt-4 inline-block">
        Register Now
    </a>
</div>

      {/* <div className="mt-8 mx-auto max-w-screen-lg p-4 rounded-md shadow-md">
       
        <p className="text-gray-200 text-base">
        "Join 'Knights Gambit 2.0' at Phoenix 2024. It's not just a game; it's a battle of wits and strategy. Let's find the true chess champion!"
        </p>
        <button
          onClick={handleRegisterClick}
          className="bg-green-300  hover:bg-green-400  text-black font-bold py-3 px-8 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="animate-pulse">
          Register Now
          </span>
         
        </button> 
        
      </div> */}
      
      <div className="my-8 mx-auto max-w-screen-xl bg-opacity-70 bg-indigo-950 p-4">
  {/* Box 1 - Open Category */}
  <div className="bg-slate-950 bg-opacity-70 p-4 rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
    <h2 className="text-lg font-bold mb-2 text-green-200">
      Open Category
    </h2>
    <p className="text-sm text-gray-300">1st prize: Rs 5000 + certificate</p>
    <p className="text-sm text-gray-300">2nd prize: Rs 4000 + certificate</p>
    <p className="text-sm text-gray-300">3rd prize: Rs 3000 + certificate</p>
    <p className="text-sm text-gray-300">4th prize: Rs 2000 + certificate</p>
    <p className="text-sm text-gray-300 sm:text-base">5th - 7th prize: Rs 1500 + certificate</p>
    <p className="text-sm text-gray-300 sm:text-base">8th - 10th prize: Rs 1000 + certificate</p>
    <p className="text-sm text-gray-300 sm:text-base">Best JECIAN: Rs 1500 + certificate</p>
  </div>
</div>

    
      <div className="my-8 mx-auto max-w-screen-xl bg-opacity-70 bg-indigo-950 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Box 1 - Open Category */}
     

        {/* Box 2 - Under-9 */}
        <div className="bg-slate-950 p-4 flex bg-opacity-70 flex-col rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg font-bold mb-2 text-yellow-300">Under-9</h2>
          <p className="text-gray-300">1st prize: Trophy + certificate</p>
          <p className="text-gray-300">2nd prize: Trophy + certificate</p>
          <p className="text-gray-300">3rd prize: Trophy + certificate</p>
        </div>

        {/* Box 3 - Under-13 */}
        <div className="bg-slate-950 p-4 flex bg-opacity-70 flex-col rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg font-bold mb-2 text-blue-300">Under-11</h2>
          <p className="text-gray-300">1st prize: Trophy + certificate</p>
          <p className="text-gray-300">2nd prize: Trophy + certificate</p>
          <p className="text-gray-300">3rd prize: Trophy + certificate</p>
        </div>

        {/* Box 4 - Under-17 */}
        <div className="bg-slate-950 p-4 flex bg-opacity-70 flex-col rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg font-bold mb-2 text-purple-300">Under-13</h2>
          <p className="text-gray-300">1st prize: Trophy + certificate</p>
          <p className="text-gray-300">2nd prize: Trophy + certificate</p>
          <p className="text-gray-300">3rd prize: Trophy + certificate</p>
        </div>
        <div className="bg-slate-950 p-4 flex bg-opacity-70 flex-col rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg font-bold mb-2 text-purple-300">Under-15</h2>
          <p className="text-gray-300">1st prize: Trophy + certificate</p>
          <p className="text-gray-300">2nd prize: Trophy + certificate</p>
          <p className="text-gray-300">3rd prize: Trophy + certificate</p>
        </div>
      </div>
      <div className="mt-8 bg-indigo-950 mx-auto max-w-screen-lg p-4 rounded-md shadow-lg">
       
       <p className="text-gray-200 text-base">
       🏅🎓 Digital certificates will be awarded to participants of Knight's Gambit 2.0. 🏆📜
       </p>
      
     </div>

      {/* Rules/Regulations content */}
      <div className="mt-8 mx-auto max-w-screen-lg p-4 rounded-md shadow-md">
        <h2 className="text-xl text-slate-200 underline font-bold mb-2">
          Rules/Regulations
        </h2>
        <ul className="list-disc list-inside text-gray-200">
          <li>
            The tournament will be conducted in the blitz format, under the
            clock timing of (5+2), and increment of 2 seconds will be given from the first move.
          </li>
          <li>
            One illegal move will be considered. The second illegal move will
            result in a game lost.
          </li>
          <li>
            When a player makes an illegal move, the opponent will get an
            addition of 1 minute in his/her clock timing.
          </li>
          <li>
            No electronic device, including wristwatches, should ring during the
            match. Failing to comply with this rule will result in an immediate
            game lost.
          </li>
          <li>
            For all other matters, the decision of the organizing committee will
            be final.
          </li>
        </ul>
      </div>
      <div className="mt-8 mx-auto max-w-screen-lg p-4 rounded-md shadow-md flex flex-col sm:flex-row items-center justify-between">
  {/* QR Code Image */}
  <div className="mb-4 sm:mb-0 relative">
    <img
      src={PaymentQr}
      alt="QR Code"
      className="h-40 transition-transform transform hover:scale-110"
    />
  </div>

  {/* Pay for Registration */}
  <div className="text-center sm:text-left text-gray-200 text-lg sm:mx-4">
    <h2 className="text-sm font-bold mb-2">Pay</h2>
    <p>Rs 400 For Registration</p>
    <p className="text-sm">JECIAN's get <span className="text-lg text-red-500 animate-pulse">50%</span> off - Now only Rs 200!</p>
  </div>

  {/* Payment Details */}
  {/* <div className="text-gray-200 text-lg mt-4 sm:mt-0 sm:ml-4">
    <h2 className="text-xl font-bold mb-2 hidden sm:block">
      Payment Details
    </h2>
    <p>UpiId: jyotisankarborpatra04@oksbi</p>
    <p>UpiId: 7577830278@paytm</p>
  </div> */}
   {/* Payment Details */}
   <div className="text-gray-200 text-lg mt-4 sm:mt-0 sm:ml-4">
        <h2 className="text-xl font-bold mb-2 hidden sm:block">
          Payment Details
        </h2>
        {copied && (
        <div className="text-sm text-green-500 ml-2">Copied to clipboard!</div>
      )}
        <p>
          UpiId:{' '}
          <span
            className="text-indigo-500 cursor-pointer"
            onClick={() => handleCopy('jyotisankarborpatra04@oksbi')}
          >
            jyotisankarborpatra04@oksbi
          </span>
        </p>
        <p>
          UpiId:{' '}
          <span
            className="text-indigo-500 cursor-pointer"
            onClick={() => handleCopy('7577830278@paytm')}
          >
            7577830278@paytm
          </span>
        </p>
      </div>
    
    
</div>


<h1 id="gallery" className="mt-4 mb-4 text-center text-lg text-indigo-200 font-bold">Knight's Gambit 1.0 Gallery</h1>

<AliceCarousel {...carouselSettingsGallery}>
  {galleryItems.map((item, index) => (
    <div key={`gallery-${index}`} >
      <img src={item.imageSrc} alt={`Gallery Image ${index + 1}`} className="gallery-image mx-auto max-w-full h-[300px]" />
      <p className="text-center mt-2 text-gray-200">{item.text}</p>
    </div>
  ))}
</AliceCarousel>

<footer id="coordinators" className="mt-8 mx-auto max-w-screen-lg bg-slate-800 p-4 rounded-md shadow-md">
  {/* Coordinator Cards */}
  <h1 className="mt-2 text-sm mb-4 text-center text-gray-200">Coordinators</h1>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
    {/* Coordinator Cards */}
    <div className="bg-slate-950 p-4 rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
      <p className="text-gray-300 text-sm">Rittiz Mahanta</p>
      <a href="tel:+6002150653" className="text-green-300 text-sm">6002150653</a>
    </div>

    <div className="bg-slate-950 p-4 rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
      <p className="text-gray-300 text-sm">Bikash Borah</p>
      <a href="tel:+8822045466" className="text-green-300 text-sm">8822045466</a>
    </div>

    <div className="bg-slate-950 p-4 rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
      <p className="text-gray-300 text-sm">Sankar Jyoti Barpatra</p>
      <a href="tel:+7086932185" className="text-green-300 text-sm">7086932185</a>
    </div>
    <div className="bg-slate-950 p-4 rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
      <p className="text-gray-300 text-sm">Mafruz Nissar Rahman</p>
      <a href="tel:+9127460654" className="text-green-300 text-sm">9127460654</a>
    </div>



    <div className="bg-slate-950 p-4 rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
      <p className="text-gray-300 text-sm">Chirosmit Das</p>
      <a href="tel:+7577830278" className="text-green-300 text-sm">7577830278</a>
    </div>

    <div className="bg-slate-950 p-4 rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
      <p className="text-gray-300 text-sm">Bitupan Dangoria</p>
      <a href="tel:+8011735570" className="text-green-300 text-sm">8011735570</a>
    </div>

  
    <div className="bg-slate-950 p-4 rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
      <p className="text-gray-300 text-sm">Rohit Kumar Sah</p>
      <a href="tel:+7636048043" className="text-green-300 text-sm">7636048043</a>
    </div> 

    <div className="bg-slate-950 p-4 rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
      <p className="text-gray-300 text-sm">Nilabh Bharadwaj</p>
      <a href="tel:+8638686417" className="text-green-300 text-sm">8638686417</a>
    </div>

    <div className="bg-slate-950 p-4 rounded-md shadow-md hover:bg-slate-900 transition duration-300 ease-in-out transform hover:scale-105">
      <p className="text-gray-300 text-sm">Partha Pratim Patra</p>
      <a href="tel:+6000219909" className="text-green-300 text-sm">6000219909</a>
    </div>
  </div>
</footer>
<div className="text-center mt-4 text-sm text-gray-200 font-bold">Follow Us</div>
<div className="text-center">
  <a href="https://www.instagram.com/gambit_knights/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram text-gray-200 text-xl mt-2"></i>
  </a>
</div>

<div className="text-center mt-2 text-sm text-gray-200">&copy; 2024 All rights reserved</div>

<div className="text-center mt-4 text-sm text-gray-200 font-bold">Developed by Bikash Borah</div>



       
    </div>
  );
};

export default Home;
