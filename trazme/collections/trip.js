import { Meteor } from 'meteor/meteor'

Trip = new Mongo.Collection('trip');

TripSchema = new SimpleSchema({


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

Trip.attachSchema(TripSchema);