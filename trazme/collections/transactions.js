Transactions = new Meteor.Collection('transactions');

TransactionSchema = new SimpleSchema({

	type: {
		type: String,
		label: "type"
	},

	origin: {
		type: String,
		label: "origin"
	},

	destination: {
		type: String,
		label: "destination"
	},

	date: {
		type: Date,
		label: "date",
	},

	user1: {
		type: String,
		label: "user1",
	},

	user2: {
		type: String,
		label: "user2"
	},

	state: {
		type: String,
		label: "state"
	},

	merchandiseType: {
		type: String,
		label: "merchandiseType"
	},

	additionalInfo: {
		type: String,
		label: "additionalInfo"
	},

	price: {
		type: Number,
		label: "price"
	},

	bail: {
		type: String,
		label: "bail"
	},
});

Transactions.attachSchema(TransactionSchema);