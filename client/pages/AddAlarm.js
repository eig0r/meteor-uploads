
Template.AddAlarm.helpers({

      SearchSiteresult() {return Session.get('SearchSite')
    }

});
// Insert New Alarm
Template.AddAlarm.events({
  'submit .new-Site-Alarm':function (event) {
     event.preventDefault();
      var SiteID= event.target.SiteSearchId.value;
      var AlarmName= event.target.SiteAlarmName.value;
      var area= event.target.SelectArea.value;
      var SiteType= event.target.SiteCategory.value;
      var PowerSource= event.target.PowerSource.value;
      var office= event.target.SearchSelectOffice.value;
        var SiteName= event.target.SearchSelectSiteName.value;
      var Status= 'not handled yet';
      var Access= 'Clear';
      SiteAlarmAdd.insert({
        SiteID: SiteID,
        AlarmName: AlarmName,
        Area:area,
        SiteType:SiteType,
        PowerSource:PowerSource,
        Office:office,
        Status:Status,
        SiteName:SiteName,
        Access:Access,
        createdAt:new Date()
      });
       return false;
}
  });
// End

Template.AddAlarm.events({

'click .SearchSite':function (event) {
   event.preventDefault();

   var siteresult=document.getElementById("SiteSearchId").value;
    console.log(siteresult);
Session.set('SearchSite',CairoOrange.find( { SiteCode:siteresult} ).fetch());
//Session.set('FmActionF','');

   }
    });

    Template.AddAlarm.events({
        'change select': function (e) {

            var FMaction =  $(e.target).val();
              console.log(FMaction);
          //  Session.set('FmActionF',FMaction);


        }
    });



// Move to Site Handelr Page with saving Site ID
Template.AddAlarm.events({
    'click .View': function(event){
     event.preventDefault();
 Session.set('OneSiteID',this.SiteID);
 Session.set('SiteAlarmID',this._id);
 Session.set('AlarmName',this.AlarmName);
 		 FlowRouter.go('/OneSite');

}
  });
// End

  Template.AddAlarm.rendered=function() {
  	$('#my-datepicker').datepicker();
  }
