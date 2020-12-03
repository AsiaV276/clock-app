const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();


const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'));

app.get('/:ipAddress?/', async (req, res) => {
    console.log(req.params);
    const ipAddress = req.params.ipAddress;
    var api_url = `https://geo.ipify.org/api/v1?apiKey=${process.env.IP_API_KEY}&ipAddress=${ipAddress}`
    const ipAddressResponse = await fetch(api_url)
        .catch((error) => {
            console.error('Error:', error);
        });
    const json = await ipAddressResponse.json();
    res.json(json); //makes the api call and then sends back to client, proxy server
})