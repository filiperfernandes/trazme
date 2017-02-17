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

//Testing Area

FlowRouter.route('/dev',{
	name: 'dev',
	action(){
		BlazeLayout.render('dev');
	}
});