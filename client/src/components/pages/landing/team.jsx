import react from "react";
import "./team.css";

const Team = () => {
  return (
    <section className="allTeam">
      <div className="allImage">
        <div className="Meet">
          <h1>Meet the team </h1>
        </div>

        <div className="image">
          <img src="https://avatars.githubusercontent.com/u/87426545?v=4" />
          <h3>Yafit Samuel</h3>
        </div>

        <div className="image">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG4KGqtE0NEDg/profile-displayphoto-shrink_100_100/0/1640766039826?e=1652918400&v=beta&t=svReXeOgvrygZGLg_xvYhxtcK4R6C4z3CVuFkuIuDgI" />
          <h3>Ermias Mangisto</h3>
        </div>

        <div className="image">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHhRlE4wuqznw/profile-displayphoto-shrink_100_100/0/1640784431466?e=1652918400&v=beta&t=0ZRkrfTjXuA5kQcx84ELWAbWpKJRMsa6-zTuhw8hMF4" />
          <h3>Izhak Lijalem </h3>
        </div>
      </div>
    </section>
  );
};

export default Team;
