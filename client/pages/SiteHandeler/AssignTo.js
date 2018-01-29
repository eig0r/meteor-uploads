Template.AssignTo.helpers({

    ShifEngName() {return Session.get('OfficeShiftEngn')


}

});






Template.AssignTo.events({
'click .SaveShiftEng':function (event) {
   event.preventDefault();
   var si=Session.get('OneSiteID');
    var ar= document.getElementById("Area").value;
    var an= document.getElementById("AlarmName").value;
    var of= document.getElementById("Office").value;
    var ShiftEng = document.getElementById("ShiftEngName0").value;
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
