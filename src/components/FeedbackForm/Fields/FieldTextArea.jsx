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
        className={`bg-transparent border-b peer w-full min-h-[75px] focus:outline-none ${hasErrorOccurred ? 'border-pink-500' : ''}`}
      />
      <FieldLabel
        name={field.name}
        label={label}
        hasErrorOccurred={hasErrorOccurred}
        error={errors[field.name]}
        className={`text-xl w-full absolute pointer-events-none left-0 top-8 cursor-text peer-focus:text-xs peer-focus:-top-6 transition-all  ${values[field.name] ? '-top-6 text-xs' : ''}`}
      />
    </div>
  );
};

export default FieldTextArea;
