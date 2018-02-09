
Meteor.subscribe('SiteAccess');

Template.DownSites.helpers({
  SiteAlarm: function() {
    return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML Fault','NodeB Unavailable'] } , Status: { $ne: "Clear" }},{sort:{createdAt: -1}});
  }
});

Template.DownSites.events({
    'click .Details': function(event){
     event.preventDefault();
     console.log('details clicked');
 Session.equals('OneSiteID',this.SiteID);
 Session.set('SiteAlarmID','tet');
 		 FlowRouter.go('/AlarmActions');

}
  });
