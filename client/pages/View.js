Meteor.subscribe('SiteAlarmAdd');
Meteor.subscribe('CairoOrange');
Meteor.subscribe('SiteAccess');
Meteor.subscribe('AllAlarms');
Meteor.subscribe('PgConnection');
Meteor.subscribe('CairoOrangeSharing');



Template.mainView.helpers({
  mdata: function() {
    return SiteAlarmAdd.find({Status: { $ne: "Clear" }},{sort:{createdAt: -1}});
  },
    limitamountvalue() {return Session.get('amountvaluetarget')
  },
      SearchSiteresult() {return Session.get('SearchSite')
    },
    SharingSitesH() {return Session.get('SharingSites')
},
    AccountDetailsF() {return Session.get('AccountDetails')
},
  Alarmncounter: function() {
    var today = new Date();
    return SiteAlarmAdd.find({Status: { $ne: "Clear" }}).count();
},
  AlarmncounterPending: function() {
    var today = new Date();
    return SiteAlarmAdd.find({ Status: { $in: [ 'Pending-Spare','Pending-Access'] } }).count();
},
AlarmncounterOnprogress: function() {
  var today = new Date();
  return SiteAlarmAdd.find({ Status: { $in: [ 'Team in the way','Team in Site','Waiting FM Action','Clear on PG','not handled yet'] } }).count();









},
    Time() {return Session.get('Timer')
  },
  editing: function(){
  return Session.equals('commento', this._id);
}

});



// Move to Site Handelr Page with saving Site ID
Template.mainView.events({
    'click .View': function(event){
     event.preventDefault();
 Session.set('OneSiteID',this.SiteID);
 Session.set('SiteAlarmID',this._id);
 Session.set('AlarmName',this.AlarmName);
 Session.set('OneSiteOffice',this.Office);
 		 FlowRouter.go('/OneSite');

}
  });
// End
