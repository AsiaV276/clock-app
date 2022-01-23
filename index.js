const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();


const app = express();

const port = process.env.PORT || 5000;
const apiKey = process.env.API_KEY3;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'));

app.get('/:lat?/:lon?', async (req, res) => {
    //var api_url = `https://extreme-ip-lookup.com/json/?key=${apiKey}`
    //var api_url = `https://geo.ipify.org/api/v1?apiKey=at_EMu9egFj6PfkeZZGn0Z7qQOxwpfHC&ipAddress=8.8.8.8`
    console.log(req.params);
    var latitude = req.params.lat
    var longitude = req.params.lon
    var api_url = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`
    const locationResponse = await fetch(api_url);
    const json = await locationResponse.json();
    res.json(json); //makes the api call and then sends back to client, proxy server
})