import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialIcons = () => (
  <div className="flex gap-3 text-white">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-red-1 p-2 rounded-full">
      <FaTwitter size={20} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-red-1 p-2 rounded-full">
      <FaInstagram size={20} />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-red-1 p-2 rounded-full">
      <FaGithub size={20} />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-red-1 p-2 rounded-full">
      <FaFacebook size={20} />
    </a>
  </div>
);

export default SocialIcons;
