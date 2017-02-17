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