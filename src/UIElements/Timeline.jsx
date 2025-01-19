import React, { useEffect, useRef } from 'react';

const ZigzagTimelineWithDots = () => {
  const Journey = [
    {
      "year":"Jul 2022 - Oct 2022",
      "company":"Upskilling Myself",
      "desc":`I enrolled in a comprehensive full-stack development course to deepen my technical expertise and broaden my skill set. Throughout the course, I focused intensively on mastering core web technologies like HTML, CSS, and JavaScript, which form the backbone of front-end development. 

      I advanced my understanding by diving into ReactJS, learning its component-based architecture and state management to create dynamic, high-performance user interfaces. On the backend, I explored PHP, gaining proficiency in creating server-side logic and managing databases. This immersive learning experience allowed me to sharpen my skills across the full development stack and build a strong foundation for creating responsive, scalable web applications.`
    },
    {
      "year":"Oct 2022 - Oct 2023",
      "company":"Yuzzworks, Chennai - Software Developer",
      "desc":`React & functional driven javascript expert in SPAs, UI Components, Mobile responsive web and Performance optimization.
      The front-end use HTML 5, CSS 3, React JS, JQuery and Bootstrap or Tailwind to build a SPA that communicate with back-end via RESTful API.
      Responsible for implementing UI mockups, integrating third party React libraries, and handling/creating Redux store data
      The backend use of Node JS, Express JS, MongoDB, Mongoose, MySQL, Postgre SQL, the complete MERN Stack & PERN Stack to provide RESTful APIs.
      Used Axios (React Library) to send HTTP Requests to the backend.
      Implemented generating the verification hash code using Node JS and added user validation and user permission.
      Working with MVC architecture in Node JS to provide a developer-friendly programs and codes.
      PHP Laravel used as backend to create RESTful APIs that can be fetched inside React JS.
      Leading the team through all phases of the Software Development Life Cycle.
      Code version control using Git and Github.`
    },
    {
      "year":"Oct 2023 - Present",
      "company":"ALL-POS Technologies, Chennai - Software Developer",
      "desc":`Independently developed an Application named Gift Card With React JS as frontend and Node JS as backend, which encompasses the Creation and Redemption of Cards. The application incorporates various Features, Functionalities, and Validations.
      It also implements a High-level Authentication and Authorization process to ensure Secure User Interactions.
      In addition, I played a Pivotal Role in integrating the application with the Sales and Purchase systems by utilizing APIs.
      Collaborating within a team, I Addressed and Resolved Issues related to dev. and Successfully Debugged collective queries from end-users, enhancing the overall user experience.
      To ensure continuous delivery, I also integrated a CI/CD pipeline, automating testing, deployment, and updates, enabling seamless releases and efficient handling of application changes while improving overall productivity and maintaining application quality.`
    },

  ]
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.6, // Trigger animation when 50% of the item is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('fade-out');
        } else {
          entry.target.classList.add('fade-out');
          entry.target.classList.remove('fade-in');
        }
      });
    }, options);

    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (timelineItemsRef.current.length > 0) {
        timelineItemsRef.current.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div className="timeline md:px-6">
      {Journey.map((journey, index) => (
        <div
          key={index}
          ref={(el) => (timelineItemsRef.current[index] = el)}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} fade-out`} // Alternating left and right
        >
          <div className="timeline-content">
            <h1 className='font-medium text-yellow-400 text-lg'>{journey.year}</h1>
            <h2 className='text-white font-bold'>{journey.company}</h2>
            <p className='text-justify pt-3 text-gray-500'>{journey.desc}</p>
          </div>
          <div className="dot"></div> {/* Dot for each event */}
        </div>
      ))}
    </div>
  );
};

export default ZigzagTimelineWithDots;
