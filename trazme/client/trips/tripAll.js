Template.tripAll.onCreated(function() {
	var self = this;

	this.selOrigin = new ReactiveVar();
	this.selDestination = new ReactiveVar();

	self.autorun(function(){
		self.subscribe('trip');
		Session.set("selOrigin","");
		Session.set("selDestination","");
	});
});

Template.tripAll.helpers({
	allTrips: function(){
		var filter = {};
		var sO = Session.get("selOrigin");
		var sD = Session.get("selDestination");
		if ( sO )
			filter.origin = sO ;
		if ( sD )
			filter.destination = sD ;
		return Trip.find(filter);
	},
	allOrigins: function(){
		return distinct( Trip,"origin" ) ;
	},
	allDestinations: function(){
		return distinct( Trip, "destination") ;
	},
	selOr: function(){
		return Session.get("selOrigin");
	},
	selDest: function(){
		return Session.get("selDestination");
	},

});

Template.tripAll.events({
	"click .selOrigin": function(e, t){
		var text = $(e.target).text();
		Session.set("selOrigin",text);
	},
	"click .orReset": function(e, t){
		Session.set("selOrigin","");
	},
	"click .selDestination": function(e, t){
		var text = $(e.target).text();
		Session.set("selDestination",text);
	},
	"click .destReset": function(e, t){
		Session.set("selDestination","");
	},
	"click #subs": function(e, t){
		console.log(e.target);
		//Transaction.insert({type:"A",orderId:"sdv"});
	},

});


function distinct(collection, field) {
  return _.uniq(collection.find({}, {
    sort: {[field]: 1}, fields: {[field]: 1}
  }).map(x => x[field]), true);
}
