const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const axios = require('axios')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '1mb'}));
app.use(express.static('public'));


app.get('/api/weather/:latlon', async (req, res) => {
  let lalton = req.params.latlon
  let latitude = lalton.split(',')[0]
  let longitude = lalton.split(',')[1]
  try {
    const api = `https://api.darksky.net/forecast/e3990efe472e1454dbf942f621cd3fc6/${latitude},${longitude}`
    const result = await axios.get(api)
    const data = result.data
    
    return res.send(data)
  } catch (error) {
    return res.status(400).json({ msg: "Error"})
  }
  
  
  

})
app.listen(process.env.PORT || 3000, () => {
  console.log('working')
})