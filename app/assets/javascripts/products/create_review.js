$(document).ready(function () {
  $("#create_review_form").submit(function (e) {
    e.preventDefault();
    $("#submit_review_create_btn").prop("disabled", true);

    const rating = $("[name='rating__rating']:checked").val();
    const details = $("#review").val();
    const product_id = $("#product_id").val();

    $("#submit_review_create_btn");
    $.ajax("/reviews/create", {
      method: "post",
      data: {
        review: {
          rating,
          details,
          product_id,
        },
      },
      success(data) {
        console.warn(data);
      },
      error(xhr, status, error) {},
      complete() {
        closeCreateReviewOverlay();
        $("#submit_review_create_btn").prop("disabled", true);
        location.reload();
      },
    });

    return false;
  });
});

function openCreateReviewOverlay() {
  $("#create_review_overlay").removeClass("hidden");
}

function closeCreateReviewOverlay() {
  $("#create_review_overlay").addClass("hidden");
}
