import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({

	'transactions.insert'(type, orderId, userA, state){

		var info = "grsvfxc"; 

		Transactions.insert({
	      type: type,
	      orderId: orderId,
	      userA: userA,
	      info: info,
	    });
	}
});