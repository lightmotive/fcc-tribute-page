require('../src/style-common.css');
require('../src/style.css');
require('readmore-js');
import $ from 'jquery';
import assetChevronDown from '../src/assets/font-awesome/chevron-down.svg';
import assetChevronUp from '../src/assets/font-awesome/chevron-up.svg';
import bodyContent from '../src/body-content.html'

$('.event-description').readmore({
    moreLink: '<a href="#"><img src="' + assetChevronDown + '" class="read-more-open" alt="Read more" /></a>',
    lessLink: '<a href="#"><img src="' + assetChevronUp + '" class="read-more-close" alt="Close" /></a>',
    heightMargin: 50
});

document.getElementById("body").innerHTML += bodyContent;