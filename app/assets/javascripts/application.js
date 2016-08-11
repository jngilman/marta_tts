$(document).ready(function (){
 function initialize() {
   var myLatlng = new google.maps.LatLng(33.784624, -84.422030);

   var mapOptions = {
     center: { lat: 33.755797, lng: -84.388789},
     zoom: 8
   };

   var map = new google.maps.Map(document.getElementById('map-canvas'),
   mapOptions);
 }

 google.maps.event.addDomListener(window, 'load,' initialize);

   var mapOptions = {
    center: { lat: -36.848738, lng: 174.752173},
    zoom: 15,
    scrollwheel: false
  }

   var marker = new google.maps.Marker({
     position: myLatlng,
     map: map
   });
});
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
