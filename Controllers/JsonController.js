// JsonController.js
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
var sendFormDataWithObjectService = require('../Services/SendData.js')

exports.receiveJson = async (req, res) => {
  try {
    const receivedData = req.body;
    const URL = process.env.EXP_URL; 

    sendFormDataWithObjectService.sendFormDataWithObject(URL, receivedData)

    res.status(200).json([]);
  } catch (error) {
    console.error('Error forwarding JSON data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
