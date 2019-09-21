const contentful = require("contentful");

export default contentful.createClient({
  space: "czabv5x5utob",
  accessToken:"BNnqt8qr8uRnPzU5Jr71pe00h9sMdKGHeKu4TRAwzWU",
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
