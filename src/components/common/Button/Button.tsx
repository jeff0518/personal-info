import { ButtonProps } from "./Button.interface";

const Button = (props: ButtonProps) => {
  const { children, variant, type } = props;
  const baseStyle = "inline-flex items-center justify-center cursor-pointer";
  const variants = {
    icon: "w-10 h-10 rounded-full bg-black text-white",
    text: "px-4 py-2 text-gray-700 hover:text-gray-900",
    primary: "px-4 py-2 bg-black text-white rounded hover:bg-gray-800",
  };
  return (
    <button type={type} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
