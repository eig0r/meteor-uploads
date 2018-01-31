Template.Cairowast.helpers({
    CWdownSites() {return Session.get('CWdownSites')
  },
  SitesCount: function() {

    return SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML FAULT'] } ,Area:{ $in: [ 'Cairo West'] } , Status: { $ne: "Clear" }}).count();
}

});
