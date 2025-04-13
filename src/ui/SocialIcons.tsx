import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialIconsProps {
  hoverA?: boolean
}

const SocialIcons = ({ hoverA }: SocialIconsProps) => (
  <div className={`flex gap-2 text-white`}>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
      className={`${hoverA ? `group` : ``} bg-red-500 p-2 rounded-full`}>
      <FaXTwitter className={`${hoverA ? `group-hover:opacity-75` : `hover:opacity-75`} w-6 h-6`} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
      className={`${hoverA ? `group` : ``} bg-red-500 p-2 rounded-full`}>
      <FaInstagram className={`${hoverA ? `group-hover:opacity-75` : `hover:opacity-75`} w-6 h-6`} />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
      className={`${hoverA ? `group` : ``} bg-red-500 p-2 rounded-full`}>
      <FaGithub className={`${hoverA ? `group-hover:opacity-75` : `hover:opacity-75`} w-6 h-6`} />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
      className={`${hoverA ? `group` : ``} bg-red-500 p-2 rounded-full`}>
      <FaFacebook className={`${hoverA ? `group-hover:opacity-75` : `hover:opacity-75`} w-6 h-6`} />
    </a>
  </div>
);

export default SocialIcons;
