import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({

	'transactions.insert'(type, orderId, userA, userB, state){

		var info = ""; 

		Transactions.insert({
	      type: type,
	      orderId: orderId,
	      userA: userA,
	      userB: userB,
	      state: state,
	      info: info,
	      createdAt: new Date() // current time
	    });
	}
});