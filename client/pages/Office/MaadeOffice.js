Meteor.subscribe('SiteAlarmAdd');
Meteor.subscribe('CairoOrange');
Meteor.subscribe('SiteAccess');
Meteor.subscribe('AllAlarms');


Template.MaadieOffice.helpers({
  MaadeOffice: function() {
    return SiteAlarmAdd.find({Office:'Maadi' ,Status: { $ne: "Clear" }},{sort:{createdAt: -1}});
  }
});
Template.MaadieOffice.events({
    'click .View': function(event){
     event.preventDefault();
 Session.set('OneSiteID',this.SiteID);
  Session.set('AlarmName',this.AlarmName);
 Session.set('SiteAlarmID',this._id);
  Session.set('OneSiteOffice',this.Office);
 		 FlowRouter.go('/OneSite');

}
  });
