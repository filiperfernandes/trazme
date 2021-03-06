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

	tripHistoryCount: function(){
		var id = FlowRouter.getParam('id');
		//Ser do Tipo T, estado fechado e user que fez o serviço ser igual ao da página
		return Transactions.find({
			$and: [ { state: "closed" } , { userA : Meteor.userId() } ]	
		}).count();
	},

	currentUsername: function(){
		return "@" + Mongo.Collection.get('users').findOne({_id:Meteor.userId()}).username ;
	},
	currentName: function(){
		return Mongo.Collection.get('users').findOne({_id:Meteor.userId()}).profile.name ;
	},

	userPageName: function(){
		var id = FlowRouter.getParam('id');
		return Mongo.Collection.get('users').findOne({_id:id}).profile.name ;
	},

	userPageUsername: function(){
		var id = FlowRouter.getParam('id');
		return Mongo.Collection.get('users').findOne({_id:id}).username ;
	},

	userPageEmail: function(){
		var id = FlowRouter.getParam('id');
		return Mongo.Collection.get('users').findOne({_id:id}).emails[0].address ;
	},	
	userPagePhone: function(){
		var id = FlowRouter.getParam('id');
		return Mongo.Collection.get('users').findOne({_id:id}).profile.phone ;
	},
	userPageNIF: function(){
		var id = FlowRouter.getParam('id');
		return Mongo.Collection.get('users').findOne({_id:id}).profile.NIF ;
	},
	userPcode: function(){
		var id = FlowRouter.getParam('id');
		return Mongo.Collection.get('users').findOne({_id:id}).profile.pcode ;
	},

	checkUser: function(){
		let id = FlowRouter.getParam('id');
		return Mongo.Collection.get('users').findOne({_id:id})._id == Meteor.userId();
	},
});

Template.pendingRequests.helpers({
	allRequests: function(){
		var id = FlowRouter.getParam('id');
		//Ser do Tipo T, estado pendente e user que vai fazer serviço ser igual ao da página
		return Transactions.find({
			$and: [ { state:"open" } , { userA : Meteor.userId() } ]	
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
			$and: [ { type: "P" } , { state: "open" } , { userA : Meteor.userId() } ]
		});
	},
	userA: function(){
		return Mongo.Collection.get('users').findOne({_id:this.userA}).username;
	},
	userB: function(){
		return Mongo.Collection.get('users').findOne({_id:this.userB}).username;
	},
});

Template.finishedTrips.helpers({
	tripHistory: function(){
		var id = FlowRouter.getParam('id');
		//Ser do Tipo T, estado fechado e user que fez o serviço ser igual ao da página
		return Transactions.find({
			$and: [ { state: "closed" } , { userA : Meteor.userId() } ]	
		});
	},
	userA: function(){
		return Mongo.Collection.get('users').findOne({_id:this.userA}).username;
	},
	userB: function(){
		return Mongo.Collection.get('users').findOne({_id:this.userB}).username;
	},
});

Template.acceptedTrips.helpers({
	tripAccepted: function(){
		var id = FlowRouter.getParam('id');
		//Ser do Tipo T, estado aceite e user que fez o serviço ser igual ao da página
		return Transactions.find({
			$or: [{ $and: [ { type: "P" } , { state: "accepted" } , { userA : Meteor.userId() } ]},
			{$and: [ { type: "T" } , { state: "accepted" } , { userB : Meteor.userId() } ]}
			]}
		);
	},
	userA: function(){
		return Mongo.Collection.get('users').findOne({_id:this.userA}).username;
	},
	userB: function(){
		return Mongo.Collection.get('users').findOne({_id:this.userB}).username;
	},
});

Template.acceptedTrips.events({
	"click .closeTransaction": function(e,t){
		let orderId = e.target.getAttribute("id") ;
		Transactions.update({_id:orderId},{$set:{state:"closed"}});
		FlowRouter.go('/login');
	},
});


Template.user.events({

	"click #userHistory": function(){
		var id = FlowRouter.getParam('id');
		FlowRouter.go('/user/' + id + '/history');
  	},

  	"click #userOffersMade": function(){
		FlowRouter.go('/user/' + Meteor.userId() + '/requests');
    },

    "click #inTransitOffers": function(){
		FlowRouter.go('/user/' + Meteor.userId() + '/transit');
    },

    "click #userLogout": function(){
    	Meteor.logout();
		FlowRouter.go('/');
    },

    "click #userSendMessage": function(){
	FlowRouter.go('/signin');
    $('html, body').animate({
    }, 0); 
  },


});
