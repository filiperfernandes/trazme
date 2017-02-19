Template.itemAll.onCreated(function() {
	var self = this;

	this.selOrigin = new ReactiveVar();
	this.selDestination = new ReactiveVar();

	self.autorun(function(){
		self.subscribe('item');
		self.subscribe('transactions');
		self.subscribe('allUsers');
		Session.set("selOrigin","");
		Session.set("selDestination","");
	});
});

Template.itemAll.helpers({
	allItems: function(){
		var filter = {};
		var sO = Session.get("selOrigin");
		var sD = Session.get("selDestination");
		if ( sO )
			filter.origin = sO ;
		if ( sD )
			filter.destination = sD ;
		return Item.find(filter);
	},
	allOrigins: function(){
		return distinct( Item,"origin" ) ;
	},
	allDestinations: function(){
		return distinct( Item, "destination") ;
	},
	selOr: function(){
		return Session.get("selOrigin");
	},
	selDest: function(){
		return Session.get("selDestination");
	},
	us: function(){
		return Mongo.Collection.get('users').findOne({_id:this.user}).username;
	},

});

Template.itemAll.events({
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
	"click .createTransaction": function(e, t){

		let orderId = e.target.getAttribute("id") ;
		let uA = Item.findOne({_id:orderId}).user;

		if ( uA == Meteor.userId() )
		{
			alert("Não pode aceitar as suas próprias propostas");
		}
		else
		{
			Meteor.call('transactions.insert', "P", orderId, uA , Meteor.userId() , function(err,response) {
				if(err) {
					console.log(err);
					return;
				}
				FlowRouter.redirect('/chat/'+ response);
			});
		}
	},
});


function distinct(collection, field) {
  return _.uniq(collection.find({}, {
    sort: {[field]: 1}, fields: {[field]: 1}
  }).map(x => x[field]), true);
}
