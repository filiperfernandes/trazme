import { Meteor } from 'meteor/meteor'

Template.exchange.onCreated(function() {
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		console.log(id);
		self.subscribe('transactions.single', id);
	});
});

Template.exchange.helpers({

	single: function(){
		var id = FlowRouter.getParam('id');
		return Transactions.findOne({_id: id});
	},
	singleId: function(){
		return id = FlowRouter.getParam('id');
	}

});

Template.exchange.events({

	"click .submitExchange": function(e, t){
		FlowRouter.go('/user');
	},

});