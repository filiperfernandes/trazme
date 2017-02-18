FlowRouter.route('/',{
	name: 'index',
	action(){
		BlazeLayout.render('index');		//Testing Area
	}
});

FlowRouter.route('/index',{
	name: 'index',
	action(){
		BlazeLayout.render('index');
	}
});

FlowRouter.route('/user',{
	name: 'user',
	action(){
		BlazeLayout.render('user');
	}
});

FlowRouter.route('/trip/all',{
	name: 'tripAll',
	action(){
		BlazeLayout.render('tripAll');
	}
});

FlowRouter.route('/trip/add',{
	name: 'tripAdd',
	action(){
		BlazeLayout.render('tripAdd');
	}
});

FlowRouter.route('/item/all',{
	name: 'itemAll',
	action(){
		BlazeLayout.render('itemAll');
	}
});

FlowRouter.route('/item/add',{
	name: 'itemAdd',
	action(){
		BlazeLayout.render('itemAdd');
	}
});

FlowRouter.route('/exchange/:id',{
	name: 'exchange',
	action(){
		BlazeLayout.render('exchange');
	}
});

FlowRouter.route('/user/:id',{
	name: 'user',
	action(){
		BlazeLayout.render('user',{main: 'pendingRequests'}); //Alterar Aqui
	}
});

FlowRouter.route('/login',{
	name: 'login',
	action(){
		let u = Meteor.userId();
		if ( u )
			FlowRouter.redirect('/user/'+u);
		else
		{
			BlazeLayout.render('login');
		}	
	}
});

//Testing Area

FlowRouter.route('/dev',{
	name: 'dev',
	action(){
		BlazeLayout.render('dev');
	}
});

FlowRouter.route('/devb',{
	name: 'devb',
	action(){
		BlazeLayout.render('devb');
	}
});