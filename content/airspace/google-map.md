---
title: 'Google map'
weight: 9
draft: false
---
To set your location, go to theme root directory, open js folder, find main.js edit it with text editor (like Notepad++). Go to line `main.js` and change the latitude and longitude. First one is latitude and second one is longitude. To find your locations latitude and longitude, click [here](https://www.latlong.net/)  
**jQuery Code**  
```js
var map;  
function initMap() {  
 map = new google.maps.Map(document.getElementById(‘map’), {  
 center: {lat: -34.397, lng: 150.644},  
 zoom: 8  
 });  
}  
```

If you want to change styles of the google map check this [site](https://snazzymaps.com/)