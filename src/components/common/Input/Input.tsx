import { InputProps } from "./Input.interface";

const baseStyle = `w-full p-1 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-vermilion-500`;

const Input = (props: InputProps) => {
  const { type, id, placeholder, icon: Icon } = props;
  return (
    <div>
      <label htmlFor={id} className="opacity-0">
        {placeholder}
      </label>
      <Icon className="" />
      <input
        type={type}
        className={baseStyle}
        name={id}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
