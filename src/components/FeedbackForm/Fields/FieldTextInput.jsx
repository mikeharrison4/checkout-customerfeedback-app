import React from 'react';
import FieldLabel from './FieldLabel';

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
        {...field}
        {...props}
        id={field.name}
        aria-labelledby={label}
        disabled={isSubmitting}
        className={`bg-transparent w-full border-b py-2 text-xl text-white focus:outline-none peer focus:invalid:border-pink-500 ${hasErrorOccurred ? 'border-pink-500' : ''}`}
      />
      <FieldLabel
        name={field.name}
        label={label}
        hasErrorOccurred={hasErrorOccurred}
        error={errors[field.name]}
        className={`w-full absolute pointer-events-none left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all ${values[field.name] ? '-top-4 text-xs' : 'text-xl top-2'}`}
      />
    </div>
  );
};

export default FieldTextInput;
