import { Meteor } from 'meteor/meteor'

Meteor.publish('trip', function(){
	return Trip.find();
});

Meteor.publish('item', function(){
	return Item.find();
});

Meteor.publish('transactions', function(){
	return Transactions.find();
});

Meteor.publish('transactions.single', function(id){
	return Transactions.find({_id:id});
});