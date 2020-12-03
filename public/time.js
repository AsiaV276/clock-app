//gets current time, hours
var d = new Date();
var hour = d.getHours();

//get and format minutes
var minutes = d.getMinutes();
if(minutes < 10) {
    minutes  = "0" + minutes
}

//Display full time in DOM
var fullTime = hour + ":" + minutes;
document.getElementById('currentTime').innerHTML = fullTime;


//fetch from api that gets current location, city and region
const geoFindMe = async () => {
    await fetch('https://extreme-ip-lookup.com/json/')
    .then( res => res.json())
    .then(response => {
        //displays client location city and region
        document.getElementById('location').innerText = 'IN ' + response.city + ', ' + response.region;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


//fetch from api that gets timezone, day of week, day of year, weeknumber, and abbreviation
const getLocationData = async () => {
    //calls geoFindMe function
    geoFindMe()
    const response = await fetch('http://worldtimeapi.org/api/ip')
        .catch((error) => {
            console.error('Error:', error);
          });
    const tzJson = await response.json();
    //adds time zone data to DOM
        document.getElementById('timezone').innerHTML = tzJson.timezone;
        document.getElementById('zone').innerText = tzJson.abbreviation;
        document.getElementById('day-of-year').innerText = tzJson.day_of_year;
        document.getElementById('day-of-week').innerText = tzJson.day_of_week;
        document.getElementById('week-number').innerText = tzJson.week_number;
}

//elements in the DOM changing according to the hour of the day
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

//declare variables for elements affected by the toggle button
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