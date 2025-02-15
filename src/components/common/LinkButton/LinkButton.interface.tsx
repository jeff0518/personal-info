import { ReactNode } from "react";
import { ButtonVariant } from "@/components/types";

export interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant: ButtonVariant;
}
