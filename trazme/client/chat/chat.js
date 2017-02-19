Template.chat.onRendered(function() {
  GoogleMaps.load({key:"INSER YOUR GOOGLE API"});
});


Template.chat.onCreated(function() {
	var self = this;

	self.autorun(function(){
		
		//console.log(id);
		self.subscribe('transactions');
		self.subscribe('trip');
		self.subscribe('item');
		self.subscribe('allUsers');
	});


	// We can use the `ready` callback to interact with the map API once the map is ready.


  GoogleMaps.ready('lxMap', function(map) {
    // Add a marker to the map once it's ready
    // var marker = new google.maps.Marker({
    //   position: map.options.center,
    //   map: map.instance
    // });

    var id = FlowRouter.getParam('id');
    let oId = Transactions.findOne({_id:id}).orderId ;
    var torigin = Trip.findOne({_id:oId}).origin;
    var tdestination = Trip.findOne({_id:oId}).destination;

    var origin;
    var destination;

   	switch (torigin) {
	    case "Lisboa":
	    	origin=  {lat: 38.73, lng: -9.14};
	    	break;
	        
	    case "Coimbra":
	    	origin=  {lat: 40.22, lng: -8.59};
	     break;

	     case "Santarém":
	    	origin=  {lat: 39.32, lng: -8.86};
	     break;

	     case "Porto":
	    	origin=  {lat: 41.16, lng: -8.69};
	     break;

	     case "Faro":
	    	origin=  {lat: 37.01, lng: -7.97};
	     break;
   	}

   	switch (tdestination) {
	    case "Lisboa":
	    	destination=  {lat: 38.73, lng: -9.14};
	        break;
	    case "Coimbra":
	    	destination =  {lat: 40.22, lng: -8.59};
	     break;
	   	case "Santarém":
	    	destination=  {lat: 39.32, lng: -8.86};
	     break;

	     case "Porto":
	    	destination=  {lat: 41.16, lng: -8.69};
	     break;

	     case "Faro":
	    	destination=  {lat: 37.01, lng: -7.97};
	     break;
   	}


    // var origin = {lat: 38.73, lng: -9.14};
    // var destination = {lat: 40.22, lng: -8.59};

    

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


Template.chat.helpers({

	username: function(){
		return Mongo.Collection.get('users').findOne({_id:Meteor.userId()}).username;
	},

	getId: function(){
		return id = FlowRouter.getParam('id');
	},

	checkOwner: function(){
		let id = FlowRouter.getParam('id');
		return Meteor.userId() == Transactions.findOne({_id:id}).userA;
	},

	isOpen: function(){
		let id = FlowRouter.getParam('id');
		return Transactions.findOne({_id:id}).state == "open";
	},

	checkType: function(){
		let id = FlowRouter.getParam('id');
		return Transactions.findOne({_id:id}).type == "T";
	},

	currTrans: function(){
		let id = FlowRouter.getParam('id');
		return Transactions.findOne({_id:id});	
	},

	currTrip: function(){
		let id = FlowRouter.getParam('id');
		let oId = Transactions.findOne({_id:id}).orderId ;
		return Trip.findOne({_id: oId });	
	},

	currItem: function(){
		let id = FlowRouter.getParam('id');
		let oId = Transactions.findOne({_id:id}).orderId ;
		return Item.findOne({_id: oId });	
	},

	currTripUsername: function(){
		let id = FlowRouter.getParam('id');
		let oId = Transactions.findOne({_id:id}).orderId ;
		let t = Trip.findOne({_id: oId }).user;	
		return Mongo.Collection.get('users').findOne({_id:t}).username ;
	},

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

Template.chat.events({

	"click .btn-close": function(e, t){
		let id = FlowRouter.getParam('id');
		//Transactions.findOne({_id:id}).state = "closed";
		Transactions.update({_id:id},{$set:{state:"closed"}});
		//console.log( Transactions.findOne({_id:id}).state );
		//db.trip.update({_id:"8ZYyFjnS4RYdDW49z"},{$set :{origin:"LIIIIISBOA"}})
	},

	"click #cancelTransaction": function(e, t){
		let id = FlowRouter.getParam('id');
		var out = confirm("Tem a certeza que quer recusar esta oferta?");
		if ( out )
		{
			FlowRouter.redirect("/login");
			Transactions.remove({_id:id});
		}
	},

	"click #confirmTransaction": function(e,t){
		let id = FlowRouter.getParam('id');
		Transactions.update({_id:id},{$set:{state:"accepted"}});
		let tripId = Transactions.findOne({_id:id}).orderId;
		console.log(Transactions.findOne({_id:id}));
		Trip.remove({_id:tripId});

		FlowRouter.go('/login');

	},

});