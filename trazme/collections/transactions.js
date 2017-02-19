import { Meteor } from 'meteor/meteor'

Transactions = new Mongo.Collection('transactions');

Transactions.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	},
});

var stateopen = 'open';

TransactionSchema = new SimpleSchema({

	type: {
		type: String,
		label: "type"
	},

	orderId: {
		type: String,
		label: "orderId"
	},

	userA: {
		type: String,
		label: "userA"
	},

	userB: {
		type: String,
		label: "userB",
		autoValue: function() {
			return this.userId
		},
	},

	createdAt: {
		type: Date,
		label: "date",
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	},		

	state: {
		type: String,
		label: "state",

		//TEM DE SER CONFIRMADAS AS MERDAS PARA INSERIR TRANSACOES NOVAS
	},

	info: {
		type: String,
		label: "information"
	},
});

Transactions.attachSchema(TransactionSchema);
