import React, { useState } from "react";
import { Stars } from "./Stars";
import { AddReview } from "./AddReview";
import { useProductWithReview } from "../state/product_state";
import { orderBy } from "lodash";

export function ProductDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const product = useProductWithReview();

  if (!product) return null;

  return (
    <>
      <div className="container">
        <div className="product-container">
          <div className="product-header">
            <h1>{product.name}</h1>

            <div className="review-row">
              <div className="d-flex">
                <h2 className="m-0" style={{ paddingRight: 8 }}>
                  {parseFloat(product.rating).toFixed(2)}
                </h2>
                <Stars
                  key="total_score"
                  customId="total_score"
                  rating={Math.round(product.rating * 2) / 2}
                />
              </div>
              <div>
                <button
                  className="btn__primary"
                  onClick={() => setModalOpen(true)}
                >
                  Add review
                </button>
              </div>
            </div>
          </div>

          <div className="product-bottom">
            <div className="divider"></div>

            <h3 className="m-0" style={{ paddingBottom: 8 }}>
              Reviews
            </h3>

            <div className="reviews__container">
              {orderBy(product.reviews, "created_at", "desc").map((review) => (
                <Stars key={review.id.toString()} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <AddReview
        productId={product.id}
        hidden={!modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
}
