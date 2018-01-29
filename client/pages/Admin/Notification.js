

Template.Notification.helpers({

  DownSites: function() {

    return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML FAULT'] } , Status: { $ne: "Clear" }}).count();
},
  DownNodalSites: function() {

    return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML FAULT'] } ,SiteType:{ $in: [ 'NODAL'] } , Status: { $ne: "Clear" }}).count();
},
DownVIPSites: function() {

  return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML FAULT'] } ,SiteType:{ $in: [ 'VIP'] } , Status: { $ne: "Clear" }}).count();
},
DownAccessSites: function() {

  return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML FAULT'] } , Access:{ $ne: "Clear" }, Status: { $ne: "Clear" }}).count();
}


});
