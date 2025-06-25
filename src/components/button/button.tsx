import { ComponentProps } from "react";
import styles from "./button.module.css";
import clsx from "clsx";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "destructive";
  size?: "small" | "medium" | "large";
};

export function Button({
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size])}
      {...props}
    />
  );
}
