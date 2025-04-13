import Link from "next/link";
interface LogoProps {
  href?: string;
  fontType?: string;
  textColor?: string;
};

const Logo: React.FC<LogoProps> = ({ href = "/", textColor = "white", fontType }) => (
  <Link href={href} className="group">
    <h2 className={`text-${textColor} text-2xl ${fontType} font-prata cursor-pointer mt-1
      group-hover:opacity-75`}>
      Solidariza
    </h2>
  </Link>
);

export default Logo;
