import "./footer.css";
import { ModeContext } from "../../../context/modeContext/ModeContext";
import { useContext } from "react";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const { mode } = useContext(ModeContext);
  return (
    <footer className="footer" style={{background:mode.backgroundNav}}>
      <div id="button"></div>
<<<<<<< HEAD
      <div id="container"  style={{background:mode.backgroundNav,color:mode.color}}>
        <article className="hidden-Footer"  style={{background:mode.backgroundNav,color:mode.color}}>
=======
      <div id="container">
        <article className=" hidden-Footer">
>>>>>>> 440f15a2e02a6f279f478a55981439a954f55107
          <div className="logoa">
            <img src="https://i.ibb.co/7CsT864/ddaf023ec64044ebaeb29ebf4545b423.png" alt="" />
          </div>
          <div>
            <img src="https://avatars.githubusercontent.com/u/87426545?v=4" />
            <h1>Yafit Samuel</h1>
            <p>Full-stack web developer</p>
            <a href="https://www.linkedin.com/feed/">linkedin </a>
            <a href="https://github.com/YafitSamuel?tab=repositories">
              github
            </a>
            {/* <a href="">yafit642@gmail.com </a> */}

          </div>
          <div>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG4KGqtE0NEDg/profile-displayphoto-shrink_100_100/0/1640766039826?e=1652918400&v=beta&t=svReXeOgvrygZGLg_xvYhxtcK4R6C4z3CVuFkuIuDgI" />

            <h1>Ermias Mangisto</h1>
            <p>Full-stack web developer</p>
            <a href="https://www.linkedin.com/feed/">linkedin </a>

            <a href="https://github.com/YafitSamuel?tab=repositories">
              github
            </a>
            {/* <a href="">yafit642@gmail.com </a> */}
          </div>
          <div>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHhRlE4wuqznw/profile-displayphoto-shrink_100_100/0/1640784431466?e=1652918400&v=beta&t=0ZRkrfTjXuA5kQcx84ELWAbWpKJRMsa6-zTuhw8hMF4" />

            <h1>Izhak Lijalem</h1>
            <p>Full-stack web developer</p>
            {/* <a href="">yafit642@gmail.com </a> */}
            <a href="https://www.linkedin.com/feed/">linkedin </a>
            <a href="https://github.com/YafitSamuel?tab=repositories">
              github
            </a>

          </div>

        </article>

      </div>
    </footer>
  );
};
export default Footer;
