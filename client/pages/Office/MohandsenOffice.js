Meteor.subscribe('SiteAlarmAdd');
Meteor.subscribe('CairoOrange');
Meteor.subscribe('SiteAccess');
Meteor.subscribe('AllAlarms');


Template.MohandsenOffice.helpers({
  MohandseenOffice: function() {
    return SiteAlarmAdd.find({Office:'Mohandseen',Status: { $ne: "Clear" }},{sort:{createdAt: -1}});
  }
});
Template.MohandsenOffice.events({
    'click .View': function(event){
     event.preventDefault();
 Session.set('OneSiteID',this.SiteID);
  Session.set('AlarmName',this.AlarmName);
 Session.set('SiteAlarmID',this._id);
  Session.set('OneSiteOffice',this.Office);
 		 FlowRouter.go('/OneSite');

}
  });
