Template.user.onCreated(function() {
	var self = this;

	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		//console.log(id);
		self.subscribe('transactions');
		self.subscribe('allUsers');
	});
});

Template.user.helpers({

	currentUsername: function(){
		return "@" + Mongo.Collection.get('users').findOne({_id:Meteor.userId()}).username ;
	},
	currentName: function(){
		return Mongo.Collection.get('users').findOne({_id:Meteor.userId()}).profile.name ;
	},

});

Template.pendingRequests.helpers({
	allRequests: function(){
		var id = FlowRouter.getParam('id');
		//Ser do Tipo T, estado pendente e user que vai fazer serviço ser igual ao da página
		return Transactions.find({
			$and: [ { type: "T" } , { state:"open" } , { userA : Meteor.userId() } ]	
		});
	},
	userA: function(){
		return Mongo.Collection.get('users').findOne({_id:this.userA}).username;
	},
	userB: function(){
		return Mongo.Collection.get('users').findOne({_id:this.userB}).username;
	},
});

Template.pendingRequests.events({

	"click .openChat": function(e,t){
		console.log("here");
		let chatId = e.target.getAttribute("id") ;
		FlowRouter.go('/chat/' + chatId ) ;
    },

})


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

Template.acceptedTrips.helpers({
	tripHistory: function(){
		var id = FlowRouter.getParam('id');
		//Ser do Tipo T, estado aceite e user que fez o serviço ser igual ao da página
		return Transactions.find({
			$and: [ { type: "T" } , { state: "accepted" } , { userA : Meteor.userId() } ]	
		});
	},
	userA: function(){
		return Mongo.Collection.get('users').findOne({_id:this.userA}).username;
	},
	userB: function(){
		return Mongo.Collection.get('users').findOne({_id:this.userB}).username;
	},
});



Template.user.events({

	"click #userHistory": function(){

	FlowRouter.go('/signin');
    $('html, body').animate({
    }, 0); 
  },

  	"click #userOffersMade": function(){
		FlowRouter.go('/user/' + Meteor.userId() + '/requests');
    },

    "click #inTransitOffers": function(){
		FlowRouter.go('/user/' + Meteor.userId() + '/transit');
    },

    "click #userSendMessage": function(){
	FlowRouter.go('/signin');
    $('html, body').animate({
    }, 0); 
  },


});
