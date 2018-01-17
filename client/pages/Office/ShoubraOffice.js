Meteor.subscribe('SiteAlarmAdd');
Meteor.subscribe('CairoOrange');
Meteor.subscribe('SiteAccess');
Meteor.subscribe('AllAlarms');


Template.ShoubraOffice.helpers({
  ShobraOffice: function() {
    return SiteAlarmAdd.find({Office:'Shoubra' ,Status: { $ne: "Clear" }},{sort:{createdAt: -1}});
  }
});
Template.ShoubraOffice.events({
    'click .View': function(event){
     event.preventDefault();
 Session.set('OneSiteID',this.SiteID);
 Session.set('SiteAlarmID',this._id);
 		 FlowRouter.go('/OneSite');

}
  });
