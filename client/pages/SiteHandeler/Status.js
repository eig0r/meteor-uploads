Template.Status.helpers({
    SAI() {return Session.get('SiteAlarmInformation')
  }

});



Template.Status.events({

'click .SaveStatus':function (event) {
   event.preventDefault();
    var si=Session.get('OneSiteID');
    var ar= document.getElementById("Area").value;
    var an= document.getElementById("AlarmName").value;
    var of= document.getElementById("Office").value;
    var test3= Session.get('FmActionF');


      AllAlarms.insert({
         SiteID: si,
         AlarmName: an,
         Area:ar,
         Office:of,
        Status:test3,
      createdAt:new Date()
      });
var ID= Session.get('SiteAlarmID');

       SiteAlarmAdd.update({_id:ID},
         {$set:{Status: test3 }});

   }
    });

    Template.Status.events({
        'change select': function (e) {

            var FMaction =  $(e.target).val();
            Session.set('FmActionF',FMaction);


        }
    });
