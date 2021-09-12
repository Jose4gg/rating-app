$(document).ready(function () {
  $("#create_review_form").submit(function (e) {
    e.preventDefault();

    const rating = $("[name='rating__rating']:checked").val();
    const details = $("#review").val();
    const product_id = $("#product_id").val();

    return;
  });
});
