// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `bin/rails generate channel` command.

let createConsumer = () => {};

if (typeof window !== "undefined") {
  const { createConsumer: cC } = require("@rails/actioncable");
  createConsumer = cC;
}

export default createConsumer();
