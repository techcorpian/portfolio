import React, { useEffect, useRef } from 'react';

const ZigzagTimelineWithDots = () => {
  const Journey = [
    {
      "year":"Jul 2022 - Oct 2022",
      "company":"Upskilling Myself",
      "desc":`I enrolled in a comprehensive full-stack development course to deepen my technical expertise and broaden my skill set. Throughout the course, I focused intensively on mastering core web technologies like HTML, CSS, and JavaScript, which form the backbone of front-end development. 

      I advanced my understanding by diving into ReactJS, learning its component-based architecture and state management to create dynamic, high-performance user interfaces.`
    },
    {
      "year":"Oct 2022 - Oct 2023",
      "company":"Yuzzworks, Chennai - Software Developer",
      "desc":`React & functional driven javascript expert in SPAs, UI Components, Mobile responsive web and Performance optimization.
      The front-end use React JS, Bootstrap or Tailwind to build a SPA that communicate with back-end via RESTful API.
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
      "year":"Oct 2023 - April 2025",
      "company":"ALL-POS Technologies, Chennai - Software Developer",
      "desc":`Independently developed an Loyalty program application With React JS as frontend and Springboot as backend, which encompasses the creation and redemption of Loyalty Cards. The application incorporates various Features, Functionalities, and Validations.
      It also implements a High-level Authentication and Authorization process to ensure Secure User Interactions.
      In addition, I played a Pivotal Role in integrating the application with the Sales and Purchase systems by utilizing APIs.
      Collaborating within a team, I Addressed and Resolved Issues related to dev. and Successfully Debugged collective queries from end-users, enhancing the overall user experience.
      To ensure continuous delivery, I also integrated a CI/CD pipeline, automating testing using jest, deployment, and updates, enabling seamless releases and efficient handling of application changes while improving overall productivity and maintaining application quality.`
    },
    {
      "year":"April 2025 - Present",
      "company":"Neurealm, Chennai - Frontend Developer (Frontier Airlines)",
      "desc":`Modernised the UI of a large-scale airline booking platform by migrating to a modern tech stack including Next.js, React.js, and Material UI, improving page load speed by 25% while enhancing accessibility and user journey flow. Implemented centralized state management using Apollo Cache and integrated GraphQL APIs with Apollo Client for efficient data handling. Built reusable components and custom hooks, reducing code redundancy by 25%. Actively managed Agile workflows via Azure DevOps, handling user stories, sprint planning, and tracking. Improved application stability through comprehensive unit and integration testing with Jest. Proposed GraphQL optimizations using selective data fetching and caching. Earned client recognition for ownership, initiative, and professional delivery.`
    }

  ]
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.4, // Trigger animation when 50% of the item is in view
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
