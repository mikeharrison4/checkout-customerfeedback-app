import React from 'react';
import FieldLabel from './FieldLabel';

const FieldTextArea = ({
  field,
  label,
  form: { values, errors, touched },
  ...props
}) => {
  const hasErrorOccurred = errors[field.name] && touched[field.name];
  return (
    <div className="relative">
      <textarea
        {...field}
        {...props}
        id={field.name}
        aria-labelledby={label}
        className={`bg-transparent border-b peer w-full min-h-[75px] focus:outline-none ${hasErrorOccurred ? 'border-pink-500' : ''}`}
      />
      <FieldLabel
        name={field.name}
        label={label}
        hasErrorOccurred={hasErrorOccurred}
        error={errors[field.name]}
        className={`w-full absolute pointer-events-none left-0 cursor-text peer-focus:text-xs peer-focus:-top-6 transition-all  ${values[field.name] ? '-top-6 text-xs' : 'top-8 text-xl'}`}
      />
    </div>
  );
};

export default FieldTextArea;
