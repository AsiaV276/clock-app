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

if (hour < 12) {
    document.getElementById('greeting-text').innerHTML = 'GOOD MORNING'
}
else if (hour >= 12 && hour < 18) {
    document.getElementById('greeting-text').innerHTML = 'GOOD AFTERNOON'
}
else {
    document.getElementById('moon-icon').style.display = 'inline-block'
    document.getElementById('sun-icon').style.display = 'none'
    document.getElementById('greeting-text').innerHTML = 'GOOD EVENING'
    document.getElementById('info').style.backgroundColor = 'rgba(0,0,0, 0.75)'
    document.getElementById('info').style.color = 'white'
    //change background to nighttime
    document.getElementsByTagName('body')[0].classList.add('nighttime')
    
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