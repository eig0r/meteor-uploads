
Meteor.subscribe('SiteAccess');

Template.Pending.helpers({
  Pending: function() {
    return SiteAlarmAdd.find({ Status: { $in: [ 'Pending-Spare','Pending-Access'] } },{sort:{createdAt: -1}});
  }
});
