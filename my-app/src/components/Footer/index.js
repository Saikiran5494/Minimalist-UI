import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="follow-heading">Follow us on</h1>
      <div>
        <FaInstagram className="icon" />
        <FiYoutube className="icon" />
        <FiTwitter className="icon" />
        <CiFacebook className="icon" />
        <CiLinkedin className="icon" />
      </div>
    </div>
  );
};

export default Footer;
