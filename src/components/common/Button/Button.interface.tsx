export interface ButtonProps {
  children: React.ReactNode;
  variant: "icon" | "text" | "primary";
  type: "button" | "submit";
  onClick?: () => void;
}
