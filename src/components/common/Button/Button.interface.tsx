import { ReactNode } from "react";
import { ButtonVariant } from "@/components/types";
export interface ButtonProps {
  children: ReactNode;
  variant: ButtonVariant;
  type: "button" | "submit";
  onClick?: () => void;
}
