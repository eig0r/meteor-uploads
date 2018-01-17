Template.ExceedSLA.helpers({
  ExceedAlarm: function() {
    return SiteAlarmAdd.find({ 'AlarmSLA.hours':{ $gt:1}});
  }
});
