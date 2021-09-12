import React, { Fragment } from "react";
import pluralize from "pluralize";

const starName = ({ review = null, customId = null }) =>
  `rating__${review?.id || customId}`;

const uncapitalize = (str1) => {
  return str1.charAt(0).toLowerCase() + str1.slice(1);
};

export function Stars({
  form = false,
  customId = null,
  review = null,
  stars = [5, 4, 3, 2, 1],
  rating = null,
  onChange = undefined,
}) {
  return (
    <div className={`d-flex ${form ? "rating_input_form" : ""}`}>
      <div className="rating__container">
        <fieldset
          className="rating"
          disabled={rating || review?.rating}
          onChange={onChange}
        >
          {stars.map((star) => (
            <Fragment key={star.toString() + (review?.id || customId)}>
              <input
                type="radio"
                id={`${starName({ review, customId })}_${star}`}
                name={starName({ review, customId })}
                value={star}
                defaultChecked={star == (rating || review?.rating)}
                disabled={rating || review?.rating}
              />
              <label
                className="full"
                htmlFor={`${starName({ review, customId })}_${star}`}
                title={pluralize("star", star, true)}
              ></label>
            </Fragment>
          ))}
        </fieldset>
      </div>

      {review && (
        <div className="review__details__container">
          <h5 className="m-0">{review.rating}</h5>
          <p className="m-0 review__details_text">{`, ${uncapitalize(
            review.details
          )}`}</p>
        </div>
      )}
    </div>
  );
}
