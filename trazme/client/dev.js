import { Meteor } from 'meteor/meteor'


Template.dev.helpers({

	username: function(){
		console.log("1");
		console.log(Meteor.userId());
		console.log(Mongo.Collection.get('users').findOne({_id:Meteor.userId()}).username);

		return Mongo.Collection.get('users').findOne({_id:Meteor.userId()}).username;
	}

});