
Meteor.subscribe('SiteAccess');

Template.OpenAlarms.helpers({
  SiteAlarm: function() {
    return SiteAlarmAdd.find({},{sort:{createdAt: -1}});
  }
});

Template.OpenAlarms.events({
    'click .Details': function(event){
     event.preventDefault();
     console.log('details clicked');
 Session.equals('OneSiteID',this.SiteID);
 Session.set('SiteAlarmID','tet');
 		 FlowRouter.go('/AlarmActions');

}
  });
