Meteor.subscribe('SiteAlarmAdd');
Meteor.subscribe('CairoOrange');
Meteor.subscribe('SiteAccess');
Meteor.subscribe('AllAlarms');


Template.OctoberOffice.helpers({
  mdata: function() {
    return SiteAlarmAdd.find({Office:'OCT',Status: { $ne: "Clear" }},{sort:{createdAt: -1}});
  }
});
Template.OctoberOffice.events({
    'click .View': function(event){
     event.preventDefault();
 Session.set('OneSiteID',this.SiteID);
 Session.set('AlarmName',this.AlarmName);
 Session.set('SiteAlarmID',this._id);
 		 FlowRouter.go('/OneSite');

}
  });
