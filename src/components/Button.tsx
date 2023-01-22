interface ButtonProps {
  children: any;
  className?: string;
  color?: "green" | "blue" | "gray";
  onClick?: () => void;
}

export function Button({ children, className, color, onClick }: ButtonProps) {
    const defaultColor = color ?? 'gray'

  return (
    <button
    onClick={onClick}
      className={`
        px-4 py-2 rounded-md 
        bg-gradient-to-r from-${defaultColor}-400 to-${defaultColor}-700
        text-white
        ${className}`}
    >
      {children}
    </button>
  );
}
