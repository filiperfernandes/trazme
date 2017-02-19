Template.gMap.onRendered(function() {
  GoogleMaps.load({key:""});
});


Template.gMap.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(38.73, -9.14),
        zoom: 8
      };
    }
  }
});



Template.gMap.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.


  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    // var marker = new google.maps.Marker({
    //   position: map.options.center,
    //   map: map.instance
    // });

    var origin = {lat: 38.73, lng: -9.14};
    var destination = {lat: 40.22, lng: -8.59};

    // var map = new google.maps.Map(document.getElementById('map'), {
    //       center: chicago,
    //       scrollwheel: false,
    //       zoom: 7
    // });

    var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map.instance
    });

    // Set destination, origin and travel mode.
    var request = {
        destination: destination,
        origin: origin,
        travelMode: 'DRIVING'
    };

    // Pass the directions request to the directions service.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
        if (status == 'OK') {
        	// Display the route on the map.
            directionsDisplay.setDirections(response);
        }
    });


  });
});




