import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center font-extrabold underline text-2xl md:text-3xl">
        About Me
      </h1>
      <div className="flex justify-center items-center p-4">
        <VerticalTimeline>
          {/* Section 1: Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#3498db", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #3498db" }}
            iconStyle={{ background: "#3498db", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Computer Science Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Fourth Year</h4>
            <p>Passionate about software and web development.</p>
            <p>
              Bonus: Strong communication, collaboration, and teamwork
              abilities. Proficient in Microsoft Office and Photoshop.
            </p>
          </VerticalTimelineElement>

          {/* Section 2: Skills */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#2ecc71", color: "black" }} // Change background color to a shade of green
            contentArrowStyle={{ borderRight: "7px solid #2ecc71" }}
            iconStyle={{ background: "#2ecc71", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Web Development Skills
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              HTML, CSS, Bootstrap, Tailwind
            </h4>
            <p>
              JavaScript, React.js, Express.js, MongoDB, Firebase, SQL, MySQL
            </p>
            <p>
              Experience with RESTful APIs, npm, and version control with
              GitHub.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;
