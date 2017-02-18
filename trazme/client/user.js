Template.user.onCreated(function() {
	var self = this;

	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		//console.log(id);
		self.subscribe('transactions');
	});
});

Template.pendingRequests.helpers({
	allRequests: function(){
		var id = FlowRouter.getParam('id');
		//Ser do Tipo T, estado pendente e user que vai fazer serviço ser igual ao da página
		return Transactions.find({
			$and: [ { state: true } , { type: true } , { userA : true } ]	
		});
	},
});

Template.pendingOffers.helpers({
	allOffers: function(){
		var id = FlowRouter.getParam('id');
		//Ser do Tipo P, estado pendente e user que fez a oferta ser igual ao da página
		return Transactions.find({
			$and: [ { state: true } , { type: true } , { userA : true } ]	
		});
	},
});

Template.finishedTrips.helpers({
	tripHistory: function(){
		var id = FlowRouter.getParam('id');
		//Ser do Tipo T, estado fechado e user que fez o serviço ser igual ao da página
		return Transactions.find({
			$and: [ { state: true } , { type: true } , { userA : true } ]	
		});
	},
});