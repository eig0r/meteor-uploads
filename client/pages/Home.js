
Meteor.subscribe('ShiftEng');

Template.Home.onCreated(function(){
	this.autorun(() => {
// this.subscribe('OfficeShiftEng');
    Session.set('AccountID',Meteor.userId());



	});
});

Template.Home.events({
    'click #button':function (event) {
     event.preventDefault();
 FlowRouter.go('/mainView')

console.log('Lets check in')
 }
  });
