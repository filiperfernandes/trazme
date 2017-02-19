import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({

	'transactions.insert'(type, orderId, userA, userB){

		var info = "grsvfxc"; 

		return Transactions.insert({
	      type: type,
	      orderId: orderId,
	      userA: userA,
	      userB: userB,
	      info: info,
	      state: "open",
	    });
	}
});