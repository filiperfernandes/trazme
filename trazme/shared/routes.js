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

FlowRouter.route('/listing/order',{
	name: 'order',
	action(){
		BlazeLayout.render('order');
	}
});

FlowRouter.route('/listing/trip',{
	name: 'trip',
	action(){
		BlazeLayout.render('trip');
	}
});

FlowRouter.route('/listing/',{
	name: 'listing',
	action(){
		BlazeLayout.render('listing');
	}
});

//Testing Area

FlowRouter.route('/dev',{
	name: 'dev',
	action(){
		BlazeLayout.render('dev');
	}
});