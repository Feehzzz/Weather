const axios = require('axios');

module.exports = {
 async getWeather(req,res,next){
  const lalton = req.params.latlon;
  const latitude = lalton.split(',')[0];
  const longitude = lalton.split(',')[1];
  const api_key = process.env.api_key;

  try {
    const api = `https://api.hgbrasil.com/weather?key=${api_key}lat=${latitude}&log=${longitude}`
    const result = await axios.get(api);
    const data = result.data;
   
    return res.json(data);
  } catch (error) {
    next(error)
  }
 }
}