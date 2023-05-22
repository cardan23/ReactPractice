interface ButtonProps {
  color?: "primary" | "secondary" | "danger";
  text: string;
  onClick: () => void;
}

function Button({ color = "primary", text, onClick }: ButtonProps) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
