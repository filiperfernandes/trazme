import { Meteor } from 'meteor/meteor'

Trip = new Mongo.Collection('trip');

Trip.allow({
	insert: function(){
		return true;
	}
});

var cities = ['Lisboa', 'Porto', 'Coimbra', "Alcanena"];


TripSchema = new SimpleSchema({


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
		label: "Origem",
		allowedValues: cities,
	},

	destination: {
		type: String,
		label: "Destino",
		allowedValues: cities,
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

