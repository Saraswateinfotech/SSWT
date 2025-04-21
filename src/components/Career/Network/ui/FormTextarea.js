// components/ui/FormTextarea.js
export default function FormTextarea({
    name,
    id,
    rows = 4,
    placeholder,
    value,
    onChange,
    required = false,
    className = '',
    colorFocus = 'focus:ring-emerald-500 focus:border-emerald-500'
  }) {
    return (
      <textarea
        name={name}
        id={id || name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`block w-full shadow-sm text-base border border-gray-300 rounded-lg px-4 py-3 ${colorFocus} placeholder-gray-400 transition duration-200 ${className}`}
      ></textarea>
    );
  }