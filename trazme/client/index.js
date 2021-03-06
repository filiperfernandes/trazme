import 'bootstrap';

Template.index.onCreated(function() {
	var self = this;

	self.autorun(function(){
		self.subscribe('item');
		self.subscribe('trip');
	});
});

Template.index.helpers({
	shortTrips: function(){
		return Trip.find({}, {limit: 3});
	},
	shortItems: function(){
		return Item.find({}, {limit: 3});
	},

});




