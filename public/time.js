var d = new Date();
var dayOfWeek = d.getDay();
var hour = d.getHours();

//get day of year
var start = new Date(d.getFullYear(), 0, 0);
var diff = (d - start) + ((start.getTimezoneOffset() - d.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var dayOfYear = Math.floor(diff / oneDay);

//get and format minutes
var minutes = d.getMinutes();
if(minutes < 10) {
    minutes  = "0" + minutes
}


const getLocationData = async (json) => {
    //get IP address from api.ipify, script in html, stores json variable on page load
    
    //ip address added to url and url is used to fetch latitude and longitude points
    const ipAddress = json.ip;
    const api_url = `/${ipAddress}`;
    const response = await fetch(api_url)
        .catch((error) => {
            console.error('Error:', error);
          });
    const ipJson = await response.json();
    console.log(ipJson);
    //adds json data to page
       
        document.getElementById('timezone').innerHTML = ipJson.location.country + "/" + ipJson.location.region;
        //document.getElementById('timezone').innerHTML = ipJson.location.timezone;
}

//display time info in DOM
document.getElementById('day-of-week').innerText = dayOfWeek;
document.getElementById('day-of-year').innerText = dayOfYear;

//Display full time in DOM
var fullTime = hour + ":" + minutes;
document.getElementById('currentTime').innerHTML = fullTime;

if (hour < 12) {
    document.getElementById('greeting-text').innerHTML = 'GOOD MORNING'
}
else if (hour >= 12 && hour < 18) {
    document.getElementById('greeting-text').innerHTML = 'GOOD AFTERNOON'
}
else {
    //change theme and background to nighttime
    document.getElementById('moon-icon').style.display = 'inline-block'
    document.getElementById('sun-icon').style.display = 'none'
    document.getElementById('greeting-text').innerHTML = 'GOOD EVENING'
    document.getElementById('info').style.backgroundColor = 'rgba(0,0,0, 0.75)'
    document.getElementById('info').style.color = 'white'
    document.getElementsByTagName('body')[0].classList.add('nighttime') //background
    
}

var moreInfoBox = document.getElementById('info');
var toggleBtnText = document.getElementById('more-less').children[0];
var arrowIcon = document.getElementById('arrow-icon');
var quoteContainer = document.getElementById('quote-container');

const toggleBtn = () => {
    if (moreInfoBox.style.display == 'inline-flex') {
        moreInfoBox.style.display = 'none'
        toggleBtnText.innerHTML = 'MORE'
        arrowIcon.style.transform = 'rotate(360deg)'
        quoteContainer.style.display = 'flex'
    }
    else {
        moreInfoBox.style.display = 'inline-flex'
        toggleBtnText.innerHTML = 'LESS'
        arrowIcon.style.transform = 'rotate(180deg)'
        quoteContainer.style.display = 'none'
    }
}