module ApplicationHelper
  def star_name(review: nil, custom_id: nil)
    "rating__#{review&.id || custom_id}"
  end
end
