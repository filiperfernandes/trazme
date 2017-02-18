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

// 	origin: {
// 		type: String,
// 		label: "origin"
// 	},

// 	destination: {
// 		type: String,
// 		label: "destination"
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

// 	DateOfShipping: {
// 		type: String,
// 		label: "Data de viagem",
// 	},	

// 	driver: {
// 		type: String,
// 		label: "Driver",
// 		autoValue: function() {
// 			return this.userId
// 		},
// 		autoform: {
// 			type: "hidden"
// 		}
// 	},

// 	sender: {
// 		type: String,
// 		label: "Sender",
// 		autoform: {
// 		 	type: "hidden"
// 		},
// 		optional: true,
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

// 	merchandiseType: {
// 		type: String,
// 		label: "merchandiseType",
// 		autoform: {
// 			type: "hidden"
// 		},
// 		optional: true,
// 	},

// 	additionalInfo: {
// 		type: String,
// 		label: "additionalInfo",
// 		optional: true,
// 		autoform: {
// 			type: "hidden"
// 		},
// 	},

// 	price: {
// 		type: Number,
// 		label: "price",
// 		optional: true,
// 		autoform: {
// 			type: "hidden"
// 		},
// 	},

// 	bail: {
// 		type: String,
// 		label: "bail",
// 		optional: true,
// 		autoform: {
// 			type: "hidden"
// 		},
// 	},

// 	proposals: {
// 		type: [String],
// 		label: "Propostas",
// 		optional: true,
// 		autoform: {
// 			type: "hidden"
// 		},
// 	},	
// });

// Transactions.attachSchema(TransactionSchema);
