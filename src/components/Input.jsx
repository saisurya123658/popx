import React from 'react';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  ...props
}) => {
  return (
    <div className="relative w-full mb-3.5 font-sans">
      {/* Absolute floating label breaking the top border */}
      {label && (
        <label
          htmlFor={name}
          className="absolute -top-2 left-3 px-1.5 bg-white text-[11px] font-medium text-popx-purple tracking-wide z-10 select-none"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      {/* Input element */}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 text-sm text-popx-text-dark bg-white rounded-[6px] border ${
          error ? 'border-red-500' : 'border-slate-300'
        } focus:border-popx-purple focus:outline-none transition-colors duration-200 placeholder:text-slate-400`}
        {...props}
      />

      {/* Error text helper */}
      {error && (
        <span className="text-[10px] text-red-500 mt-1 block absolute -bottom-4 left-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
