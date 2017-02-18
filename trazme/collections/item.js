import { Meteor } from 'meteor/meteor'

Item = new Mongo.Collection('Item');

ItemSchema = new SimpleSchema({


	user: {
		type: AccountsTemplates,
		label: "User",
	},

	origin: {
		type: String,
		label: "origin",
	},

	destination: {
		type: String,
		label: "destination",
	},

	data: {
		type: String,
		label: "Data",
	},

	price: {
		type: Number,
		label: "Preço do Serviço",
	},

	value: {
		type: Number,
		label: "Valor do item",
	},

	info: {
		type: String,
		label: "Informação adicional",
	},

	createdAt: {
		type: Date,
		label: "date",
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: "hidden"
		},
	},
});

Item.attachSchema(ItemSchema);
