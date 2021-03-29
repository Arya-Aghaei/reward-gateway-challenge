const proxy = require("add http-proxy-middleware");
const API_URL = process.env.REACT_APP_API_URL;

const API_USERNAME = process.env.REACT_APP_API_USERNAME;
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD;
module.exports = function (app) {
  app.use(
    proxy("/list", {
      target: API_URL,
      //   auth: API_USERNAME + ":" + API_PASSWORD,
      //   changeOrigin: true,
    })
  );
};
