import React from 'react';

const FieldTextInput = ({
  field,
  label,
  className = '',
  form: { isSubmitting, values, errors, touched },
  ...props
}) => {
  const hasErrorOccurred = errors[field.name] && touched[field.name];
  return (
    <div className={`relative w-full ${className}`}>
      <input
        { ...field }
        {...props}
        disabled={isSubmitting}
        className={`bg-transparent w-full border-b py-2 text-xl text-white focus:outline-none peer focus:invalid:border-pink-500 ${hasErrorOccurred ? 'border-pink-500' : ''}`}
        autoComplete="off"
      />
      <label
        htmlFor={field.name}
        className={`w-full absolute pointer-events-none left-0 top-1 text-xl cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all ${values[field.name] ? '-top-4 text-xs text-white' : ''}`}
      >
        <span>{label}</span>
        { hasErrorOccurred
          && (
            <span className="absolute text-xs right-0 text-pink-500">
              {errors[field.name]}
            </span>
          )
        }
      </label>
    </div>
  );
};

export default FieldTextInput;
