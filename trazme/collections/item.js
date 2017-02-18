import { Meteor } from 'meteor/meteor'

Item = new Mongo.Collection('Item');

Item.allow({
	insert: function(){
		return true;
	}
});

ItemSchema = new SimpleSchema({


	user: {
		type: AccountsTemplates,
		label: "User",
		autoform: {
			type: "hidden"
		},
		autoValue: function() {
			return this.userId;
		},
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
