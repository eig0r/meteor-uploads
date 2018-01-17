Template.searchShiftEng.events = {
  'keyup input#searchBox': function () {
      var of= document.getElementById("Office").value;
    AutoCompletion.autocomplete({

      element: 'input#searchBox',       // DOM identifier for the element
      collection: ShiftEng,              // MeteorJS collection object
      field:'of',                    // Document field name to search for
      limit: 5,
                      // Max number of elements to show
      sort: { name: 1 }});



  }

}


Template.AssignTo.events({
'click .SaveShiftEng':function (event) {
   event.preventDefault();
   var si=Session.get('OneSiteID');
    var ar= document.getElementById("Area").value;
    var an= document.getElementById("AlarmName").value;
    var of= document.getElementById("Office").value;
    var ShiftEng = document.getElementById("searchBox").value;
       AllAlarms.insert({
         SiteID: si,
         AlarmName: an,
         Office:of,
         ShiftEng:ShiftEng,
         createdAt:new Date()
       });

       // Update Site AlarmAdd with PG Connection Status (Connect)..
                  var ID=Session.get('SiteAlarmID');
                  SiteAlarmAdd.update({_id:ID},
                    {$set:{ShiftEng:ShiftEng  }});
   }
    });
