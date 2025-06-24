import { ComponentProps } from "react";
import styles from "./button.module.css";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "destructive";
};

export function Button(props: ButtonProps) {
  return <button className={styles.button} {...props} />;
}
