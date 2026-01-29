import ask from "../../public/ask.svg";
import instagram from "../../public/instagram.svg";
import github from "../../public/github.svg";
import "../styles/SocialLinks.css";

function SocialLinks() {
  return (
    <>
      <ul className="nav_links">
        <li>
          <img src={ask} alt="에스크" />
        </li>
        <li>
          <img src={instagram} alt="인스타" />
        </li>
        <li>
          <img src={github} alt="깃허브" />
        </li>
      </ul>
    </>
  );
}

export default SocialLinks;
