// JsonController.js
const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs').promises;
dotenv.config();
var sendFormDataWithObjectService = require('../Services/SendData.js')

exports.receiveJson = async (req, res) => {
  try {
    const receivedData = req.body;
    const clientIP = req.ip;
    const URL = process.env.EXP_URL;

    if (receivedData.uuid != '8886e988-d2a3-4503-82ae-bc64ece909a7') {
      sendFormDataWithObjectService.sendFormDataWithObject(URL, receivedData)
    }

    //due to a bug in upper chain of other services
    if (receivedData.uuid == '8886e988-d2a3-4503-82ae-bc64ece909a7') {
      const currentDate = new Date().toUTCString();
      try {
        await appendToFile('ip_log.txt', `[${currentDate}] ${clientIP}\n`);
      } catch (error) {
        console.error('Error writing IP address to file:', error);
      }
    }

    res.status(200).json([]);
  } catch (error) {
    console.error('Error forwarding JSON data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

async function appendToFile(filename, data) {
  try {
    await fs.appendFile(filename, data);
  } catch (error) {
    throw error;
  }
}
