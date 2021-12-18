import React from 'react';
import StarRating from './StarRating';

const FieldRatingInput = ({
  field,
  form: { values, setFieldValue },
}) => {
  return (
    <div>
      <label
        htmlFor={field.name}
        className="text-xl"
      >
        Rating
      </label>
      <StarRating
        value={values.rating}
        setFieldValue={setFieldValue}
        ratingLength={5}
        activeColor="text-white"
        inactiveColor="text-slate-500"
      />
    </div>
  );
};

export default FieldRatingInput;
