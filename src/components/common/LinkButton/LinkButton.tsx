import Link from "next/link";
import { LinkButtonProps } from "./LinkButton.interface";

const LinkButton = (props: LinkButtonProps) => {
  const { href, children, variant } = props;
  const baseStyle = "inline-flex items-center justify-center";
  const variants = {
    icon: "w-10 h-10 rounded-full bg-black text-white",
    text: "px-4 py-2 text-gray-700 hover:text-gray-900",
    primary: "px-4 py-2 bg-black text-white rounded hover:bg-gray-800",
  };
  return (
    <Link href={href} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
