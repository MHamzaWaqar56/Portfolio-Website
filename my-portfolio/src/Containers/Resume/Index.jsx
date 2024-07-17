import React from "react";
import PageHeaderContent from "../../Components/PageHeaderContent/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import { data } from "./utils";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Style.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yelow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                date={item.duration}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>

                  <h4>{item.subTitle}</h4>
                </div>
                <p style={{ color: "white", fontSize: "18px" }}>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__education">
          <h3 className="timeline__experience__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yelow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                date={item.duration}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>

                  <h4>{item.subTitle}</h4>
                </div>
                <p style={{ color: "white", fontSize: "18px" }}>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="resume-download">
        <a href="/Hamza-CV.pdf" download>
          <button className="resume-download__download-button">
            Download My Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
