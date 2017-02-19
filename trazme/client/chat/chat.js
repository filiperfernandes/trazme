Template.chat.onCreated(function() {
	var self = this;

	self.autorun(function(){
		
		//console.log(id);
		self.subscribe('transactions');
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
	}

});

Template.chat.events({

	"click .btn-close": function(e, t){
		let id = FlowRouter.getParam('id');
		//Transactions.findOne({_id:id}).state = "closed";
		Transactions.update({_id:id},{$set:{state:"closed"}});
		console.log( Transactions.findOne({_id:id}).state );
		//db.trip.update({_id:"8ZYyFjnS4RYdDW49z"},{$set :{origin:"LIIIIISBOA"}})
	},

});