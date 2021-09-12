class ReviewChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'review'
  end
end
