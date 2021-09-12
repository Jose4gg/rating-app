import React from "react";

export default function ProductDetails() {
  return (
    <div class="container">
      <div class="product-container">
        <div class="product-header">
          <h1>{/* <%= @product.name %> */}</h1>

          <div class="review-row">
            <div class="d-flex">
              <h2 class="m-0" style={{ paddingRight: 8 }}>
                {/* <%= number_with_precision(@product.rating, precision: 2) %> */}
              </h2>
              {/* <%= render partial: "shared/stars", locals: { custom_id: "total_score", rating: 4 } %> */}
            </div>
            <div>
              <button class="btn__primary" onclick="openCreateReviewOverlay()">
                Add review
              </button>
            </div>
          </div>
        </div>

        <div class="product-bottom">
          <div class="divider"></div>

          <h3 class="m-0" style={{ paddingBottom: 8 }}>
            Reviews
          </h3>

          <div class="reviews__container">
            {/* <% @product.reviews.order(created_at: :desc).each do |review| %>
          <%= render partial: "shared/stars", locals: { review: review } %>
        <% end %> */}
          </div>
        </div>
      </div>
      {/* <%= render partial: "create_review", locals: { product_id: @product.id } %> */}
    </div>
  );
}
