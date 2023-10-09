import React, { useState } from "react";
import "./about.css"; // Import your CSS file here

const About = () => {
  const [box1Visible, setBox1Visible] = useState(false);
  const [box2Visible, setBox2Visible] = useState(false);
  const [box3Visible, setBox3Visible] = useState(false);

  const toggleBoxDetails = (boxId) => {
    if (boxId === "box1") {
      setBox1Visible(!box1Visible);
    } else if (boxId === "box2") {
      setBox2Visible(!box2Visible);
    } else if (boxId === "box3") {
      setBox3Visible(!box3Visible);
    }
  };

  return (
    <section className="about-us" id="about-us">
      <div className="container2">
        <h2>Why to Konnect with us?</h2>
        <p>
          Konnect is a platform for students as well as mentors to build,
          collaborate on projects or even just explore! Our aim is to connect
          every university in India through one platform to grow and innovate!
          Konnect is a platform for students as well as mentors to build,
          collaborate on projects or even just explore! Our aim is to connect
          every university in India through one platform to grow and innovate!
          Konnect is a platform for students as well as mentors to build,
          collaborate on projects or even just explore! Our aim is to connect
          every university in India through one platform to grow and innovate!
        </p>
        <div className="about-boxes">
          <div
            className="about-box"
            id="box1"
            onClick={() => toggleBoxDetails("box1")}
          >
            <h3>
              <b>Find a Project - Intra university</b>
            </h3>
            <div className="detail">
              <img
                className="heroimg"
                src="https://i.postimg.cc/65QxYYzh/001234.png"
                alt="Hero"
              />
              <p>
                For the students as well as mentors, who are searching for some
                projects to work on, well this is the right place!
              </p>
            </div>
            <a href="#">READ MORE</a>
            {box1Visible && <a href="#">READ MORE</a>}
          </div>
          <div
            className="about-box"
            id="box2"
            onClick={() => toggleBoxDetails("box2")}
          >
            <h3>
              <b>Find the Mentor - Intra university</b>
            </h3>
            <div className="detail">
              <img
                className="heroimg"
                src="https://i.postimg.cc/65QxYYzh/001234.png"
                alt="Hero"
              />
              <p>
                For the students who have an idea in their mind and need a
                guide/mentor to work with, we provide a solution here!
              </p>
            </div>
            <a href="#">READ MORE</a>
            {box2Visible && <a href="#">READ MORE</a>}
          </div>
          <div
            className="about-box"
            id="box3"
            onClick={() => toggleBoxDetails("box3")}
          >
            <h3>
              <b>Showcase Projects - Inter university</b>
            </h3>
            <div className="detail">
              <img
                className="heroimg"
                src="https://i.postimg.cc/65QxYYzh/001234.png"
                alt="Hero"
              />
              <p>
                Detailed information about showcasing projects between
                universities...
              </p>
            </div>
            <a href="#">READ MORE</a>
            {box3Visible && <a href="#">READ MORE</a>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// import React, { useState, useEffect } from "react";
// import "./about.css"; // Import your CSS file here

// const About = () => {
//   const [activeBox, setActiveBox] = useState(0);

//   const boxes = [
//     {
//       title: "Find a Project - Intra university",
//       description:
//         "For the students as well as mentors, who are searching for some projects to work on, well this is the right place!",
//     },
//     {
//       title: "Find the Mentor - Intra university",
//       description:
//         "For the students who have an idea in their mind and need a guide/mentor to work with, we provide a solution here!",
//     },
//     {
//       title: "Showcase Projects - Inter university",
//       description:
//         "Detailed information about showcasing projects between universities...",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveBox((prev) => (prev + 1) % boxes.length);
//     }, 5000); // Change slide every 5 seconds (5000 milliseconds)

//     return () => {
//       clearInterval(interval);
//     };
//   }, []); // Empty dependency array ensures effect runs only once, like componentDidMount

//   return (
//     <section className="about-us" id="about-us">
//       <div className="container2">
//         <h2>What we do?</h2>
//         <div className="about-carousel-container">
//           <div className="about-box">
//             <h3>{boxes[activeBox].title}</h3>
//             <p>{boxes[activeBox].description}</p>
//             <a href="#">READ MORE</a>
//             <span>
//               <img
//                 className="heroimg"
//                 src="https://i.postimg.cc/65QxYYzh/001234.png"
//                 alt="Hero"
//               />
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
