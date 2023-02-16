import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Github } from "@styled-icons/bootstrap/Github";

export const Header = () => {
  return (
    <div className="header-container">
      <a href="https://www.linkedin.com/in/scottie-chambers/">
        <Linkedin className="logo" />
      </a>
      <a href="https://github.com/ThatguyscottieC">
        <Github className="logo" />
      </a>
    </div>
  );
};
