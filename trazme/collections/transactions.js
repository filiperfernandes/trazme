// import { Meteor } from 'meteor/meteor'

// Transactions = new Mongo.Collection('transactions');

// Transactions.allow({
// 	insert: function(){
// 		return true;
// 	}
// });

// var stateopen = 'open';

// TransactionSchema = new SimpleSchema({

// 	type: {
// 		type: String,
// 		label: "type"
// 	},

// 	id {
// 		type: String,
// 		label: "id"
// 	},

// 	userA: {
// 		type: String,
// 		label: "userA"
// 	},

// 	userB: {
// 		type: String,
// 		label: "userB"
// 		autoValue: function() {
// 			return this.userId
// 		},
// 		autoform: {
// 			type: "hidden"
// 		}
// 	},
// 	},

// 	createdAt: {
// 		type: Date,
// 		label: "date",
// 		autoValue: function() {
// 			return new Date();
// 		},
// 		autoform: {
// 			type: "hidden"
// 		}
// 	},		

// 	state: {
// 		type: String,
// 		label: "state",
// 		autoValue: function() {
// 			return stateopen
// 		},
// 		autoform: {
// 			type: "hidden"
// 		}
// 	},

// 	info: {
// 		type: String,
// 		label: "information"
// 	},
// });

// Transactions.attachSchema(TransactionSchema);
