---
_build:
  render: never
  list: never
  publishResources: false
---

Google map needs an working API to show perfectly. you can get your google map api from [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

### HTML Markup for Google Map

```html
<div class="map" id="map_canvas" data-latitude="51.507351" data-longitude="-0.127758" data-marker="images/marker.png"></div>
```

Change the `data-latitude` and `data-longitude` to match your location. You can find your latitude and longitude from [here](https://www.where-am-i.net/).

### Customize scripts.js

```js
window.marker = null;

function initialize() {
 var map;
 var latitude = $('#map_canvas').attr('data-latitude');
 var longitude = $('#map_canvas').attr('data-longitude');
 var mapMarker = $('#map_canvas').attr('data-marker');
 var nottingham = new google.maps.LatLng(latitude, longitude);
 var style = []; // get your style from: https://snazzymaps.com/
 var mapOptions = {
  center: nottingham,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  backgroundColor: "#000",
  zoom: 15,
  panControl: false,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  overviewMapControl: false,
  zoomControlOptions: {
   style: google.maps.ZoomControlStyle.LARGE
  }
 }
 map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
 var mapType = new google.maps.StyledMapType(style, {
  name: "Grayscale"
 });
 map.mapTypes.set('grey', mapType);
 map.setMapTypeId('grey');
 var marker_image = mapMarker;
 var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(35, 52));
 marker = new google.maps.Marker({
  position: nottingham,
  map: map,
  icon: pinIcon,
  title: '' // pointer name here
 });
}
var map = document.getElementById('map_canvas');
if (map != null) {
 google.maps.event.addDomListener(window, 'load', initialize);
}
```

Choose your map style from [here](https://snazzymaps.com/) and place it in `var style = [here];`
