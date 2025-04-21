// components/ui/FormInput.js
export default function FormInput({
    type = 'text',
    name,
    id,
    placeholder,
    value,
    onChange,
    required = false,
    min,
    accept,
    className = '',
    colorFocus = 'focus:ring-emerald-500 focus:border-emerald-500'
  }) {
    return (
      <input
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        accept={accept}
        className={`block w-full shadow-sm text-base border border-gray-300 rounded-lg px-4 py-3 ${colorFocus} placeholder-gray-400 transition duration-200 ${className}`}
      />
    );
  }