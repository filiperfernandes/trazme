import { Meteor } from 'meteor/meteor'


Template.dev.helpers({

	username: function(){
		console.log(Mongo.Collection.get('users').findOne({_id:Meteor.userId()}).username);

		return Mongo.Collection.get('users').findOne({_id:Meteor.userId()}).username;
	},

	ids: function(){

	},

});