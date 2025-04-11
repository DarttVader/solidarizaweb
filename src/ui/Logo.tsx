import Link from "next/link";
interface LogoProps {
  fontSize?: string;
  fontType?: string;
  textColor?: string;
};

const Logo: React.FC<LogoProps> = ({ textColor = "white", fontSize = "xl", fontType = "normal" }) => (
  <Link href="/">
    <span className={`text-${textColor} text-${fontSize} font-${fontType} font-prata cursor-pointer`}>
      Solidariza
    </span>
  </Link>
);

export default Logo;
