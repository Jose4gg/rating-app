import consumer from "./consumer";

export const createReviewSub = (options) => {
  return consumer.subscriptions.create({ channel: "ReviewChannel" }, options);
};
