import React, { useState } from "react";
import PageHeaderContent from "../../Components/PageHeaderContent/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../Images/image1.jpg";
import ImageTwo from "../../Images/image2.jpg";
import ImageThree from "../../Images/image3.jpg";
import ImageFour from "../../Images/image4.png";
import ImageFive from "../../Images/image5.jpg";
import "./Style.scss";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce Website",
    image: ImageOne,
    link: "https://github.com/MHamzaWaqar56/TechEmporium-Ecommerce-Website/tree/master",
  },
  {
    id: 3,
    name: "Blog App",
    link: "https://github.com/MHamzaWaqar56/Blog-App-with-React",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Supplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo App (Authenticated)",
    image: ImageFour,
    link: "https://github.com/MHamzaWaqar56/Authentiacted-Todo-List-App-In-Mern-Stack-",
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Projects = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <Link>
                  <img alt="dummy data" src={item.image} />
                </Link>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>

                    <Link to={item.link} target="_blank">
                      <button>Visit</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
