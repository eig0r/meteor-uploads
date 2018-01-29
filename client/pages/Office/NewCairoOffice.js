Meteor.subscribe('SiteAlarmAdd');
Meteor.subscribe('CairoOrange');
Meteor.subscribe('SiteAccess');
Meteor.subscribe('AllAlarms');


Template.NewCairoOffice.helpers({
  NewOffice: function() {
    return SiteAlarmAdd.find({Office:'New Cairo' ,Status: { $ne: "Clear" }},{sort:{createdAt: -1}});
  }
});
Template.NewCairoOffice.events({
    'click .View': function(event){
     event.preventDefault();
 Session.set('OneSiteID',this.SiteID);
 Session.set('SiteAlarmID',this._id);
  Session.set('AlarmName',this.AlarmName);
   Session.set('OneSiteOffice',this.Office);
 		 FlowRouter.go('/OneSite');

}
  });
