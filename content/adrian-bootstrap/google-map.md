---
title: 'Google Map'
weight: 12
draft: false
---
 To set your location, go to theme root directory, open js folder, find scripts.js edit it with text editor (like Notepad++). Change the `data-position-latitude` and `data-position-longitude`. First one is latitude and second one is longitude. To find your locations latitude and longitude, click [here](https://www.latlong.net/)  
**HTML Markup for Google Map**

```html
<div class="google-map">
	<div id="map"></div>
</div>
```

Change the map location info from scripts.js

```js
var map;

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(50.97797382271958, -114.107718560791)
    // styles: style_array_here
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
```