// import React from 'react';
// import ECLECTIC_EUPHORIA from "../assets/ECLECTIC EUPHORIA .png";
// import KNIGHTS_GAMBIT from "../assets/KG1image1.jpg";

// const Home = () => {
//   const handleDownload = () => {
//     // Create a temporary anchor element
//     const anchor = document.createElement('a');
//     anchor.href = ECLECTIC_EUPHORIA; // Set the image URL as the href
//     anchor.download = 'eclectic_euphoria.png'; // Set the downloaded file name
//     document.body.appendChild(anchor);
//     anchor.click();
//     document.body.removeChild(anchor); // Clean up
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: "Knight's Gambit 2.0",
//         text: 'Check out this awesome image!',
//         url: window.location.href
//       }).then(() => {
//         console.log('Shared successfully');
//       }).catch((error) => {
//         console.error('Error sharing:', error);
//       });
//     } else {
//       console.log('Web Share API not supported');
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-950 to-black min-h-screen flex flex-col items-center justify-center text-white">
//       <img src={KNIGHTS_GAMBIT} alt="Knight's Gambit 2.0" className="h-40 mb-2" />
//       <h1 className="text-4xl mb-4">Home Page</h1>
//       <img src={ECLECTIC_EUPHORIA} alt="ECLECTIC_EUPHORIA" className="h-40 mb-2" />
//       <div className="flex justify-center">
//         <button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
//           Download Image
//         </button>
//         <button onClick={handleShare} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Share
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router if you're using it
import ECLECTIC_EUPHORIA from "../assets/ECLECTIC EUPHORIA .png";
import KNIGHTS_GAMBIT from "../assets/KG1image1.jpg";
import KNIGHTS_GAMBIT2 from "../assets/KG1image2.jpeg";

const Home = () => {
  const handleDownload = (imageName) => {
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = imageName; // Set the image URL as the href
    anchor.download = 'image.png'; // Set the downloaded file name
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor); // Clean up
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Knight's Gambit 2.0",
        text: 'Check out this awesome image!',
        url: window.location.href
      }).then(() => {
        console.log('Shared successfully');
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      console.log('Web Share API not supported');
    }
  };

  const items = [
    {
      name: "Knight's Gambit 2.0 Poster",
      imageAlt: "product image",
      imageSrc: KNIGHTS_GAMBIT
    },
    {
      name: "Knight's Gambit 2.0 Poster 2",
      imageAlt: "product image 2",
      imageSrc: KNIGHTS_GAMBIT2
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-950 to-black min-h-screen flex flex-col items-center justify-center text-white">
      <img src={ECLECTIC_EUPHORIA} alt="Header" className="mb-4 max-h-60 object-cover" />
      <Link to="/" className="text-white mb-4">Home</Link> {/* Link to navigate back to the home page */}
      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 max-w-2xl bg-gradient-to-r from-indigo-900 to-black border border-indigo-200 rounded-lg shadow mb-8">
            <img className="p-8 rounded-t-lg w-full h-auto sm:h-96" src={item.imageSrc} alt={item.imageAlt} />
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-indigo-200">{item.name}</h5>
              </a>
          
              <div className="flex mt-2 items-center justify-between">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleDownload(item.imageSrc)}>
                  Download
                </button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleShare}>
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
