import { Meteor } from 'meteor/meteor'

Meteor.publish('trip', function(){
	return Trip.find();
});

Meteor.publish('item', function(){
	return Item.find();
});