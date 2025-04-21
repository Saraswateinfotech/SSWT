// components/forms/profile/FormSection.js
export default function FormSection({ title, color, children }) {
    const colorMap = {
      emerald: 'bg-emerald-500',
      purple: 'bg-purple-500',
      amber: 'bg-amber-500',
      rose: 'bg-rose-500'
    };
  
    const bgColor = colorMap[color] || 'bg-gray-500';
  
    return (
      <div>
        <div className="flex items-center mb-6">
          <div className={`h-8 w-1 ${bgColor} mr-4`}></div>
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          {children}
        </div>
      </div>
    );
  }