import React from "react";
import PageHeaderContent from "../../Components/PageHeaderContent/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./Style.scss";

const PersonalDetails = [
  {
    label: "Name",
    value: "M Hamza Waqar",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "Lahore - Pakistan",
  },
  {
    label: "Email",
    value: "hamzarajpoot3912@gmail.com",
  },
  {
    label: "Whatsapp ",
    value: "03366776269",
  },
];

const jobSummary =
  "My name is M Hamza Waqar. I'm a Software Engineer and dedicated Frontend Web Developer with 2 years of experience in designing, developing, and implementing innovative web solutions. Proficient in Frontend Technologies like React.js. I have strong knowledge about HTML, CSS, TAILWIND, JavaScript, React.js, MongoDB, and WordPress. On the other hand, I have a little bit of knowledge about Express.js and Node.js. I graduated from the University of Sahiwal recently with a Bachelor of Software Engineering specializing in Web Development. I had Developed my final year (Ecommerce Website) project in the Mern stack.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalwrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateY(0px)" }}
          >
            <h3>Frontend Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            style={{ paddingTop: "20px" }}
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateY(0px)" }}
          >
            <h3 className="personalinformationtext">Personal Information</h3>
            <ul>
              {PersonalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceswrapper">
          <Animate
            style={{ paddingTop: "20px" }}
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateY(0px)" }}
          >
            <div className="about__content__serviceswrapper__innercontent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
