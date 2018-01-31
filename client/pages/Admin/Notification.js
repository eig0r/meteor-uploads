

Template.Notification.helpers({

  DownSites: function() {

    return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML FAULT'] } , Status: { $ne: "Clear" }}).count();
},

Down3GSites: function() {

  return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'NodeB Unavailable'] } , Status: { $ne: "Clear" }}).count();
},

  DownNodalSites: function() {

    return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML FAULT'] } ,SiteType:{ $in: [ 'NODAL'] } , Status: { $ne: "Clear" }}).count();
},
DownVIPSites: function() {

  return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML FAULT'] } ,SiteType:{ $in: [ 'VIP'] } , Status: { $ne: "Clear" }}).count();
},
DownAccessSites: function() {

  return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML FAULT'] } , Access:{ $ne: "Clear" }, Status: { $ne: "Clear" }}).count();
},
AccessSites: function() {

  return SiteAlarmAdd.find({ Access:{ $ne: "Clear" }, Status: { $ne: "Clear" }}).count();
},
AccessAccessNegSites: function() {

  return SiteAlarmAdd.find({ Access:{ $in: [ 'AccessNeg'] } }).count();
}
,
AccessAccessCORSites: function() {

  return SiteAlarmAdd.find({ Access:{ $in: [ 'AccessCOR'] } }).count();
}
,
AccessVFSites: function() {

  return SiteAlarmAdd.find({ Access:{ $in: [ 'AccessVF'] } }).count();
},
AccessETSites: function() {

  return SiteAlarmAdd.find({ Access:{ $in: [ 'AccessET'] } }).count();
},

AccessGASites: function() {

  return SiteAlarmAdd.find({ Access:{ $in: [ 'AccessGA'] } }).count();
},
ExceedSLA: function() {

  return SiteAlarmAdd.find({ 'AlarmSLA.hours':{ $gt:1}}).count();
},
PmChargeSites: function() {

  return SiteAlarmAdd.find({ Status:{ $in: [ 'PM need Recharge'] } }).count();
},
DownGen: function() {

  return PgConnection.find({ ConnectionReason:{ $in: [ 'DG ET Problem','DG VF Problem','DG Orange Problem'] } }).count();
},
ConnectedPG: function() {

  return SiteAlarmAdd.find({ PG:'Connected' }).count();
}

});
