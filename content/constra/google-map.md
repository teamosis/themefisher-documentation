---
title: 'Google Map'
weight: 12
draft: false
---
 To set your location, go to theme root directory, open js folder, find scripts.js edit it with text editor (like Notepad++). Change the `lat` and `lng`. First one is latitude and second one is longitude. To find your locations latitude and longitude, click [here](https://www.latlong.net/)  
**HTML Markup for Google Map**

```html
<div id="map" class="map"></div>
```

Change the map location info from scripts.js

```js
//  Contact Map 
if ($('#map').length > 0) {

  var contactmap = {
    lat: 40.742964,
    lng: -73.992277
  };

  $('#map')
    .gmap3({
      zoom: 13,
      center: contactmap,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    })

    .marker({
      position: contactmap
    })

    .infowindow({
      position: contactmap,
      content: 'NYC Seminar and Conference Center, New York'
    })

    .then(function (infowindow) {
      var map = this.get(0);
      var marker = this.get(1);
      marker.addListener('click', function () {
        infowindow.open(map, marker);
      });
    });
}
```