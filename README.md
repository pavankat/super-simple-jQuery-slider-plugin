custom-jQuery-slider-plugin
===========================

I made a really simple jQuery slider plugin for anyone to use.


This is a very simple slideshow image plugin. It cycles through a div and shows only oneimage at a time, going to the next image after 5 seconds. The time can be configured.

To use this plugin, simply include jQuery and the code.js file at the bottom of your html document, like this:

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
  <script src="code.js"></script>


Then make a div with a class of slideshow and include the images you want to cycle through inside the div like this:

  <div class="slideshow">
    <img src="cat1.jpg" alt=""/>
    <img src="cat2.jpg" alt=""/>
    <img src="cat3.jpg" alt=""/>
  </div>
