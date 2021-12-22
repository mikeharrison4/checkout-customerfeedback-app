import React from 'react';
import StarRating from './StarRating';
import RATING_COUNT from '../../../constants/ratingCount';

const FieldRatingInput = ({
  field,
  label,
  form: { values, setFieldValue },
}) => {
  return (
    <div>
      <label
        htmlFor={field.name}
        className="text-xl"
      >
        {label}
      </label>
      <StarRating
        id={field.name}
        value={values.rating}
        setFieldValue={setFieldValue}
        ratingCount={RATING_COUNT}
        activeColor="text-white"
        inactiveColor="text-slate-500"
      />
    </div>
  );
};

export default FieldRatingInput;
