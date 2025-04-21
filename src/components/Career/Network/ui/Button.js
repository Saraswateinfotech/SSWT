// components/ui/Button.js
export default function Button({
    type = 'button',
    variant = 'primary',
    children,
    className = '',
    ...props
  }) {
    const baseClasses = "py-3 px-6 border rounded-lg shadow-sm text-base font-medium transition duration-200";
    
    const variantClasses = {
      primary: "border-transparent text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500",
      secondary: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    };
  
    return (
      <button
        type={type}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }