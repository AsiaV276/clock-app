const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();


const app = express();

const port = process.env.PORT || 5000;
const apiKey = process.env.API_KEY2;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'));

app.get('/:locationApiCall', async (req, res) => {
    var api_url = `https://extreme-ip-lookup.com/json/?key=${apiKey}`
    const locationResponse = await fetch(api_url);
    const json = await locationResponse.json();
    res.json(json); //makes the api call and then sends back to client, proxy server
})