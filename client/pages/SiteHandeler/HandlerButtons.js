

Template.HandelerButtons.events({
    'click #Get': function(event){
     event.preventDefault();

   var si= Session.get('OneSiteID');

   var sAi= Session.get('SiteAlarmID');
   var off= Session.get('OneSiteOffice');

Session.set('OfficeShiftEngn',ShiftEng.find({Office:off} ).fetch());
     Session.set('SiteInformation',CairoOrange.find( { SiteCode:si} ).fetch());
    Session.set('SiteAlarmInformation',SiteAlarmAdd.find({_id:sAi} ).fetch());

      document.getElementById("Assign").disabled = false;
      document.getElementById("PG").disabled = false;
      document.getElementById("Access").disabled = false;
      document.getElementById("Statuso").disabled = false;
      document.getElementById("Esclation").disabled = false;
      document.getElementById("Spare").disabled = false;



}
  });
