import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Github } from "@styled-icons/bootstrap/Github";

export const Header = () => {
  return (
    <div className=" container mx-auto">
      <a href="https://www.linkedin.com/in/scottie-chambers/">
        <Linkedin className="linkedin w-10" />
      </a>
      <a href="https://github.com/ThatguyscottieC">
        <Github className="Github w-10 m-3" />
      </a>
    </div>
  );
};
