const axios = require('axios');
const FormData = require('form-data');

async function sendFormDataWithObject(url, obj) {
  try {
    const formData = new FormData();
    formData.append('data', JSON.stringify(obj));

    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the content type to form-data
      },
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
  
 module.exports = { sendFormDataWithObject }
  