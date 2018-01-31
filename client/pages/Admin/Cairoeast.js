Template.Cairoeast.helpers({
    CEdownSites() {return Session.get('CEdownSites')
  },
  SitesCount: function() {

    return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML FAULT'] } ,Area:{ $in: [ 'Cairo East'] } , Status: { $ne: "Clear" }}).count();
}


});
