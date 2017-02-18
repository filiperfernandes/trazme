// import { Meteor } from 'meteor/meteor';
// import { AccountsTemplates } from 'meteor/accounts-base';


var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  {
      _id: 'username_and_email',
      type: 'text',
      required: true,
      displayName: "Login",
  },
  pwd,
  {
    _id: 'name',
    type: 'text',
    required: true,
    displayName: "Name",
  },
  {
  	_id: 'phone',
    type: 'tel',
    displayName: "Phone",
    required: true,
  },
  {
    _id: 'NIF',
    type: 'text',
    displayName: 'NIF',
    required: true,
  },
  {
    _id: 'pcode',
    type: 'text',
    displayName: 'Postal Code',
    required: true,
  },
  {
    _id: 'date',
    type: 'hidden',
    autoValue: function() {
      return new Date()
    }
  },
]);

AccountsTemplates.configure({
  onSubmitHook: function(){
    FlowRouter.reload()
  },
});