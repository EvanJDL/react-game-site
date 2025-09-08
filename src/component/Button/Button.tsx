import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  onClick: () => void;
  color?: "firstly" | "secondary" | "thirdly" | "primary";
}

const Button = ({ color = "primary", children, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
