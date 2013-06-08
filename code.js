//get all the images inside the div with class slideshow_container
var grabImages = document.querySelectorAll('div.slideshow img');

//set the time between images
var intervalBetweenImages = 5000;

//initialize the counter
var counter = 0;

//hide all images except the first one
$(grabImages[counter]).siblings().hide();

function slider() {

  //get the image that should be shown
  var active = $(grabImages[counter]);

  //get the siblings of the image that should be shown
  var siblings = $(active).siblings();    
  
  //hide all the siblings of the image that should be shown
  siblings.hide();
  
  //show this image
  active.show();

  //increment the counter if it's less than the grabImages array's length
  if (counter < grabImages.length) { 
    counter++ 
  } else { 
    //if the counter is equal to the grabImages array then set it to 0
    counter = 0 
  }; 
  
}

$(function() {
    setInterval( "slider()", intervalBetweenImages );
});