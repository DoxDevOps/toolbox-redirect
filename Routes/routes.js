// jsonRoutes.js
const JsonController = require('../Controllers/JsonController');

module.exports = (app) => {
  app.post('/json/receive', JsonController.receiveJson);
};
