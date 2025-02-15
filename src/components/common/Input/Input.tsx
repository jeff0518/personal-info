import { InputProps } from "./Input.interface";

const baseStyle = `w-full p-1 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-vermilion-500`;

const Input = (props: InputProps) => {
  const { type, id, placeholder, icon: Icon } = props;
  return (
    <div className="flex items-center gap-2">
      <Icon className="text-gray-500" />
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
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
