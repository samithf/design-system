import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

export const button = cva(
  [
    "font-semibold",
    "border",
    "rounded",
    "shadow-sm",
    "inline-flex",
    "items-center",
    "cursor-pointer",
    "gap-1.5",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
    "transition-colors",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-primary-700",
          "text-white",
          "border-transparent",
          "hover:bg-primary-500",
          "active:bg-primary-400",
        ],
        secondary: [
          "bg-white",
          "text-slate-900",
          "border-slate-300",
          "hover:bg-slate-50",
          "active:bg-slate-100",
        ],
        destructive: [
          "bg-danger-600",
          "text-white",
          "border-transparent",
          "hover:bg-danger-500",
          "active:bg-danger-400",
        ],
      },
      size: {
        small: ["text-sm", "px-2", "py-1"],
        medium: ["text-sm", "px-2.5", "py-1.5"],
        large: ["text-sm", "px-3", "py-2"],
      },
      type: {
        button: "",
        icon: ["px-0", "rounded-full"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "small",
        class: ["uppercase"],
      },
    ],
    defaultVariants: {
      intent: "secondary",
      size: "medium",
      type: "button",
    },
  }
);

// type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = ComponentProps<"button"> & {
  intent?: "primary" | "secondary" | "destructive";
  size?: "small" | "medium" | "large";
  type?: "button" | "icon";
};

export function Button({
  intent = "primary",
  size = "medium",
  type = "button",
  ...props
}: ButtonProps) {
  return <button className={button({ intent, size, type })} {...props} />;
}
