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
    Time() {return Session.get('Timer')
  },
  editing: function(){
  return Session.equals('commento', this._id);
}

});

// Insert New Alarm
Template.mainView.events({
  'submit .new-Site-Alarm':function (event) {
     event.preventDefault();
      var SiteID= event.target.SiteSearchId.value;
      var AlarmName= Session.get('FmActionF');
      var area= event.target.area.value;
      var office= event.target.office.value;
      var Status= 'not handled yet';
      var Access= 'NA';
      SiteAlarmAdd.insert({
        SiteID: SiteID,
        AlarmName: AlarmName,
        Area:area,
        Office:office,
        Status:Status,
        Access:Access,
        createdAt:new Date()
      });
       return false;
}
  });
// End

Template.mainView.events({

'click .SearchSite':function (event) {
   event.preventDefault();

   var siteresult=document.getElementById("SiteSearchId").value;
    console.log(siteresult);
Session.set('SearchSite',CairoOrange.find( { SiteCode:siteresult} ).fetch());
Session.set('FmActionF','');

   }
    });

    Template.mainView.events({
        'change select': function (e) {

            var FMaction =  $(e.target).val();
            Session.set('FmActionF',FMaction);


        }
    });








// Get  Connected Time input Value in Session
      Template.mainView.events({
        "keyup .user-input": function(event) {
          var radiusValue = event.target.value;
          Session.set('ConnectedTime',radiusValue)
        }
      });

      // End






      Template.mainView.events({

      'click .Save2':function (event) {
         event.preventDefault();
         Session.set('SiteID',this.SiteID);
          Session.set('AlarmName',this.AlarmName);
           var si= Session.get('SiteID');
            var an= Session.get('AlarmName');
              var FMaction = Session.get('FMactionF');


             AllAlarms.insert({
               SiteID: si,
               AlarmName: an,

               Status:FMaction,

               createdAt:new Date()
             });

         }
          });





// Move to Site Handelr Page with saving Site ID
Template.mainView.events({
    'click .View': function(event){
     event.preventDefault();
 Session.set('OneSiteID',this.SiteID);
 Session.set('SiteAlarmID',this._id);
 Session.set('AlarmName',this.AlarmName);
 		 FlowRouter.go('/OneSite');

}
  });
// End



Template.mainView.events({
    'click #Access': function(event){
     event.preventDefault();
 Session.set('SiteID',this.SiteID);
   var si= Session.get('SiteID');
   var Account=Session.get('AccountID');
          Session.set('SharingSites',CairoOrangeSharing.find( { SiteCode:si} ).fetch());
            Session.set('AccountDetails',MangmentTeam.find( { account:Account} ).fetch());
}
  });
// End



  Template.mainView.rendered=function() {
  	$('#my-datepicker').datepicker();
  }
