Template.AlarmActions.helpers({
  SiteAlarmAction: function() {
    var si=Session.get('OneSiteID');
    var sai=Session.get('AlarmName');
    return AllAlarms.find({SiteID: si ,AlarmName:sai},{sort:{createdAt: -1}});
  }
});
