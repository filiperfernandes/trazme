Template.navbar.events({

"click #navbarSeeTrip": function(){
	FlowRouter.go('/trip/all');
    $('html, body').animate({
    }, 0);
  },

"click #navbarSeeItem": function(){
	FlowRouter.go('/item/all');
    $('html, body').animate({
    }, 0); 
  },

"click #navbarTrazMe": function(){
	FlowRouter.go('/');
    $('html, body').animate({
    }, 0); 
  },

"click #navbarSignIn": function(){
	/* FALTA POR A PAGINA DE SING IN*/
	FlowRouter.go('/login');
    $('html, body').animate({
    }, 0); 
  },

});

Template.navbar.helpers({

  isLogged: function(){
    return Meteor.userId();
  },

  getUsername: function(){
    return "@" + Mongo.Collection.get('users').findOne({_id:Meteor.userId()}).username;
  },

});

