// // ("use client");

// // import React from "react";
// // import img1 from "../../assets/carousel1.jpg";
// // import img2 from "../../assets/carousel2.jpg";
// // import "./bgs.css";
// // import { Carousel } from "flowbite-react";
// // const Bgs = () => {
// //   return (
// //     <div className="ncc_c">
// //       <Carousel slideInterval={5000}>
// //         <img alt="..." src={img1} style={{ filter: "brightness(50%)" }} />
// //         <div className="carousel-item">
// //           <img alt="..." src={img1} style={{ filter: "brightness(50%)" }} />
// //           <div className="carousel-caption" style={{ fontSize: "40px" }}>
// //             Caption 1
// //           </div>
// //         </div>
// //         <img alt="..." src={img1} />
// //         <img alt="..." src={img1} />
// //         <img alt="..." src={img1} />
// //       </Carousel>
// //     </div>
// //   );
// // };
// // export default Bgs;

// import React, { useEffect, useState } from "react";
// import img1 from "../../assets/carousel1.jpg";
// import img2 from "../../assets/carousel2.jpg";
// import "./bgs.css";
// import { Carousel } from "flowbite-react";
// import "./bgs.css"; // Import your custom CSS for styling captions

// const TypewriterCaption = ({ text }) => {
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       setDisplayText((prev) => prev + text[index]);
//       index++;
//       if (index === text.length) clearInterval(intervalId);
//     }, 100); // Adjust typing speed by changing the interval time
//     return () => clearInterval(intervalId);
//   }, [text]);

//   return <div className="carousel-caption">{displayText}</div>;
// };

// const Bgs = () => {
//   const captions = [
//     "Caption 1",
//     "Caption 2",
//     "Caption 3",
//     "Caption 4",
//     "Caption 5",
//   ];

//   return (
//     <div className="ncc_c">
//       <Carousel slideInterval={5000}>
//         {captions.map((caption, index) => (
//           <div className="carousel-item" key={index}>
//             <img
//               alt="..."
//               src={index % 2 === 0 ? img1 : img2}
//               style={{ filter: "brightness(50%)" }}
//             />
//             <TypewriterCaption text={caption} />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Bgs;

// import React from 'react';
// import Typewriter from 'typewriter-effect';

// const TypewriterCaption = ({ text }) => {
//   return (
//     <div className="carousel-caption">
//       <Typewriter
//         options={{
//           strings: [text],
//           autoStart: true,
//           loop: true,
//         }}
//       />
//     </div>
//   );
// };

// export default TypewriterCaption;
// import React from 'react';
// import img1 from '../../assets/carousel1.jpg';
// import img2 from '../../assets/carousel2.jpg';
// import './bgs.css';
// import { Carousel } from 'flowbite-react';
// import TypewriterCaption from './TypewriterCaption'; // Adjust the path to the TypewriterCaption component
// import './carousel.css'; // Import your custom CSS for styling captions

// const Bgs = () => {
//   const captions = ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4', 'Caption 5'];

//   return (
//     <div className="ncc_c">
//       <Carousel slideInterval={5000}>
//         {captions.map((caption, index) => (
//           <div className="carousel-item" key={index}>
//             <img alt="..." src={index % 2 === 0 ? img1 : img2} style={{ filter: 'brightness(50%)' }} />
//             <TypewriterCaption text={caption} />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Bgs;
import React from "react";
import img1 from "../../assets/carousel1.jpg";
import img2 from "../../assets/carousel2.jpg";
import "./bgs.css";
import { Carousel } from "flowbite-react";

const Bgs = () => {
  const images = [img1, img2]; // Define your images for the carousel
  const slideInterval = 5000; // Set the slide interval in milliseconds (5 seconds in this example)

  return (
    <div class="relative top-0 left-0 mt-100 h-screen w-screen overflow-hidden">
      <Carousel slideInterval={slideInterval}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img alt="..." src={image} className="background-slider-image" />
          </div>
        ))}
      </Carousel>
      <div className="content-overlay">
        <div className="carousel-caption">Your caption or text</div>
        {/* Add your other content here */}
      </div>
    </div>
  );
};

export default Bgs;


// https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/