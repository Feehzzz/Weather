require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '1mb'}));
app.use(express.static('public'));


app.get('/api/weather/:latlon', async (req, res) => {
  let lalton = req.params.latlon;
  let latitude = lalton.split(',')[0]
  let longitude = lalton.split(',')[1]
  const weather_key = process.env.api_key_weather;
  const api_key = process.env.api_key
  try {
    const api = `https://api.hgbrasil.com/weather?key=${api_key}lat=${latitude}&log=${longitude}&user_ip=remote`
    // const api = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${weather_key}&q=${lalton}&language=pt-br`;
    const result = await axios.get(api);
    const data = result.data;
    console.log(data)
    // const forecast = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${data.Key}?apikey=${weather_key}&language=pt-br`)
    // console.log(forecast.data.DailyForecasts)
    
    
    
    return res.json({locale: data})
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: "Error"})
  }
  
  
  

})
app.listen(process.env.PORT || 3000, () => {
  console.log('working')
})