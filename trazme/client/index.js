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
		return Trip.find({}, {limit: 5});
	},
	shortItems: function(){
		return Item.find({}, {limit: 5});
	},

});

Template.navbar.events({

"click #navbarSeeTrip": function(){
	FlowRouter.go('/trip/all');
    $('html, body').animate({
    }, 0);
  },

"click #navbarSeeItem": function(){
	FlowRouter.go('/item/all');
    $('html, body').animate({
    }, 0); 
  },

"click #navbarTrazMe": function(){
	FlowRouter.go('/');
    $('html, body').animate({
    }, 0); 
  },

"click #navbarSignIn": function(){
	/* FALTA POR A PAGINA DE SING IN*/
	FlowRouter.go('/');
    $('html, body').animate({
    }, 0); 
  },

});

