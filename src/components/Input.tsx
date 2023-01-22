interface InputProps {
  label: string;
  type?: "text" | "number";
  value?: any;
  readOnly?: boolean;
  name?: string
  className?: string;
  onChange?: (value: any) => void
}

export function Input({ className, label, type, value, readOnly, name, onChange }: InputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="mb-2">
        {label}
      </label>
      <input
        onChange={e => onChange?.(e.target.value)}
        name={name}
        type={type ?? "text"}
        value={value}
        readOnly={readOnly}
        className={`
            border border-purple-500 rounded-lg bg-gray-100
            px-4 py-2 focus:outline-none ${readOnly ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  );
}
