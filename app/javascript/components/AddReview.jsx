import React, { useRef } from "react";
import { Stars } from "./Stars";
import { Formik } from "formik";
import { useSetNewReviewToProduct } from "../state/product_state";

export function AddReview({ productId, hidden, setModalOpen }) {
  const setNewReview = useSetNewReviewToProduct();
  const form = useRef();

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    fetch("/reviews/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: {
          product_id: values.product_id,
          details: values.details,
          rating: values.rating__rating,
        },
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((e) => {
        console.warn(e);
      })
      .then((review) => {
        setNewReview(review);
        setModalOpen(false);
        setSubmitting(false);
        form.current.reset();
      });

    return false;
  };

  return (
    <div
      id="create_review_overlay"
      className={`container ${hidden ? "hidden" : ""}`}
    >
      <div className="create-review-container">
        <div className="product-header">
          <h1>What’s your rating?</h1>
          <Formik
            validate={(values) => {
              const errors = {};
              if (!values.rating__rating) {
                errors.rating__rating = "No rating selected";
              }

              return errors;
            }}
            initialValues={{
              product_id: productId,
              details: "",
              rating__rating: null,
            }}
            onSubmit={onSubmit}
          >
            {({ handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit} ref={form}>
                <label htmlFor="rating__rating">Rating</label>
                <Stars
                  onChange={handleChange}
                  key="form_stars"
                  customId="rating"
                  form
                />
                <label htmlFor="review">Review</label>
                <input
                  type="text"
                  name="details"
                  onChange={handleChange}
                  className="input__text__field"
                  placeholder="Start typing..."
                  required
                />
                <input
                  disabled={isSubmitting}
                  type="submit"
                  value="Submit Review"
                  className="btn__primary"
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
