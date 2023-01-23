import { NavLink } from "react-router-dom";
import "./style.css";
// import project01 from "./../../img/projects/01.jpg";

const Project = ({ title, img, index }) => {
  return (
    <>
      <NavLink to={`/project/${index}`}>
        <li className="project">
          <img src={img} alt={title} className="project__img" />

          <h3 className="project__title">{title}</h3>
        </li>
      </NavLink>
    </>
  );
};

export default Project;
