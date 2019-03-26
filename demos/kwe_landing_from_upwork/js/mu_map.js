// Work with a map locations in Complaints section
// function initMap() {

//     // The location of map_center
//     let center_coordinates = $("#map")
//                 .attr("data-center")
//                 .split("|")
//     let map_center = new google.maps.LatLng(center_coordinates[0], center_coordinates[1]);

//     // The map, centered at map_center
//     var map = new google.maps.Map(
//                                 document.getElementById('map'), 
//                                 {
//                                     zoom: 3.5, 
//                                     center: map_center,
//                                     disableDefaultUI: !0,
//                                     scrollwheel: !1,
//                                     gestureHandling: "cooperative",
//                                     zoomControl: !1,
//                                     styles: [
//                                         {
//                                             "featureType": "administrative",
//                                             "elementType": "labels",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "administrative.country",
//                                             "elementType": "geometry.stroke",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "on"
//                                                 },
//                                                 { 
//                                                     "color": "#bcbcbc" 
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "administrative.province",
//                                             "elementType": "geometry.stroke",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "landscape",
//                                             "elementType": "geometry",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "on"
//                                                 },
//                                                 {
//                                                     "color": "#f7f7f7"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "landscape.natural",
//                                             "elementType": "labels",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "poi",
//                                             "elementType": "all",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "road",
//                                             "elementType": "all",
//                                             "stylers": [
//                                                 {
//                                                     "color": "#cccccc"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "road",
//                                             "elementType": "labels",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "transit",
//                                             "elementType": "labels.icon",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "transit.line",
//                                             "elementType": "geometry",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "transit.line",
//                                             "elementType": "labels.text",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "transit.station.airport",
//                                             "elementType": "geometry",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "transit.station.airport",
//                                             "elementType": "labels",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "water",
//                                             "elementType": "geometry",
//                                             "stylers": [
//                                                 {
//                                                     "color": "#edf0f5"
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "featureType": "water",
//                                             "elementType": "labels",
//                                             "stylers": [
//                                                 {
//                                                     "visibility": "off"
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                 );

    

//     function mapMarker(options) {
//         let latLng = new google.maps.LatLng(options.lat, options.lng); 

//         this.latLng = latLng;
//         this.place_name = options.place_name;
//         this.place_location = options.place_location;
//         this.event_link = options.event_link;
//     }

//     mapMarker.prototype = new google.maps.OverlayView();

//     mapMarker.prototype.draw = function() {
    
//         var self = this,
//             markerDiv = this.div;

//         e || ((markerDiv = this.div = $(
//               '<div><div class="shadow"></div><div class="pin-wrap"><div class="pulse"></div><div class="pin"></div></div></div>'
//             )[0]),
//             (this.pinWrap = this.div.getElementsByClassName("pin-wrap")),
//             (this.pin = this.div.getElementsByClassName("pin")),
//             (this.pinShadow = this.div.getElementsByClassName("shadow")),
//             (markerDiv.style.position = "absolute"),
//             (markerDiv.style.cursor = "pointer"),
//             this.getPanes().overlayImage.appendChild(markerDiv),
//             google.maps.event.addDomListener(e, "click", function(markerDiv) {
//               google.maps.event.trigger(self, "click", markerDiv);
//             }),
//             google.maps.event.addDomListener(markerDiv, "mouseover", function(markerDiv) {
//               google.maps.event.trigger(self, "mouseover", markerDiv);
//             }),
//             google.maps.event.addDomListener(markerDiv, "mouseout", function(markerDiv) {
//               google.maps.event.trigger(self, "mouseout", markerDiv);
//             }));

//         var n = this.getProjection().fromLatLngToDivPixel(this.latLng);

//         n && ((markerDiv.style.left = n.x + "px"), (markerDiv.style.top = n.y + "px"));
//     };

//     mapMarker.prototype.animateDrop = function() {
//              dynamics.stop(this.pinWrap),
//             dynamics.css(this.pinWrap, {
//             transform:
//               "scaleY(2) translateY(-" + $("#map").outerHeight() + "px)",
//             opacity: "1"
//           }),
//           dynamics.animate(
//             this.pinWrap,
//             { translateY: 0, scaleY: 1 },
//             { type: dynamics.gravity, duration: 1800 }
//           ),
//           dynamics.stop(this.pin),
//           dynamics.css(this.pin, { transform: "none" }),
//           dynamics.animate(
//             this.pin,
//             { scaleY: 0.8 },
//             { type: dynamics.bounce, duration: 1800, bounciness: 600 }
//           ),
//           dynamics.stop(this.pinShadow),
//           dynamics.css(this.pinShadow, { transform: "scale(0,0)" }),
//           dynamics.animate(
//             this.pinShadow,
//             { scale: 1 },
//             { type: dynamics.gravity, duration: 1800 }
//           );
//       };

//       mapMarker.prototype.animateBounce = function() {
//         dynamics.stop(this.pinWrap),
//           dynamics.css(this.pinWrap, { transform: "none" }),
//           dynamics.animate(
//             this.pinWrap,
//             { translateY: -30 },
//             {
//               type: dynamics.forceWithGravity,
//               bounciness: 0,
//               duration: 500,
//               delay: 150
//             }
//           ),
//           dynamics.stop(this.pin),
//           dynamics.css(this.pin, { transform: "none" }),
//           dynamics.animate(
//             this.pin,
//             { scaleY: 0.8 },
//             { type: dynamics.bounce, duration: 800, bounciness: 0 }
//           ),
//           dynamics.animate(
//             this.pin,
//             { scaleY: 0.8 },
//             {
//               type: dynamics.bounce,
//               duration: 800,
//               bounciness: 600,
//               delay: 650
//             }
//           ),
//           dynamics.stop(this.pinShadow),
//           dynamics.css(this.pinShadow, { transform: "none" }),
//           dynamics.animate(
//             this.pinShadow,
//             { scale: 0.6 },
//             {
//               type: dynamics.forceWithGravity,
//               bounciness: 0,
//               duration: 500,
//               delay: 150
//             }
//           );
//       };

//     // And add all the markers from map_markers.json
//     $.getJSON("map_markers.json", function(markers_json) {
//         $.each(markers_json, function(key, data) {           
//             // Creating a custom marker and putting it on the map
//             marker = new mapMarker(data);
//             marker.setMap(map);

//         });
//     });
// } 