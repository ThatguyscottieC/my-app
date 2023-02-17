import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Github } from "@styled-icons/bootstrap/Github";

export const Header = () => {
  return (
    <div className="header-container m-8">
      <a href="https://www.linkedin.com/in/scottie-chambers/">
        <Linkedin className="linkedin m-2" />
      </a>
      <a href="https://github.com/ThatguyscottieC">
        <Github className="Github m-2" />
      </a>
    </div>
  );
};
