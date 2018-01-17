Meteor.subscribe('SiteAlarmAdd');
Meteor.subscribe('CairoOrange');
Meteor.subscribe('SiteAccess');
Meteor.subscribe('AllAlarms');


Template.NasrCityOffice.helpers({
  NasrOffice: function() {
    return SiteAlarmAdd.find({Office:'Nasr',Status: { $ne: "Clear" }},{sort:{createdAt: -1}});
  }
});
Template.NasrCityOffice.events({
    'click .View': function(event){
     event.preventDefault();
 Session.set('OneSiteID',this.SiteID);
  Session.set('AlarmName',this.AlarmName);
 Session.set('SiteAlarmID',this._id);
 		 FlowRouter.go('/OneSite');

}
  });
