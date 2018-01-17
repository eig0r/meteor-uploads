Template.Access.helpers({
    SAI() {return Session.get('SiteAlarmInformation')
  }

});

// Insert Access Negotiator
Template.Access.events({
  'click .AccessNeg':function (event) {
     event.preventDefault();
     var si=Session.get('OneSiteID');
      var ar= document.getElementById("Area").value;
      var an= document.getElementById("AlarmName").value;
      var of= document.getElementById("Office").value;

    var ShiftEng= document.getElementById("ShiftEng").value;
     console.log(ShiftEng);
      var AssignedNegotiatorName= document.getElementById("AssignedNegotiatorName").value;

      var RepeatedCase= document.getElementById("RepeatedCase").value;
      var solvingDuration= document.getElementById("solvingDuration").value;
      var NegotiatorFeedback= document.getElementById("NegotiatorFeedback").value;
      var Solved= document.getElementById("Solved").value;
      var AccessClearanceTime= document.getElementById("AccessClearanceTime").value;
      var Negotiatorinformingtime= document.getElementById("Neg-info-time").value;
      var Impact= document.getElementById("Impact").value;


      SiteAccess.insert({
      SiteID:si,
      AlarmName: an+' and no Access',
      Area: ar,
      Office:of,
       AssignedNegotiatorName:AssignedNegotiatorName,
     ShiftEng:ShiftEng,
       RepeatedCase:RepeatedCase,
       solvingDuration:solvingDuration,
       NegotiatorFeedback:NegotiatorFeedback,
       Solved:Solved,
       AccessClearanceTime:AccessClearanceTime,
       Negotiatorinformingtime:Negotiatorinformingtime,
       Impact:Impact,
       AccessType:'AccessNeg',


        createdAt:new Date()
      });
      AllAlarms.insert({
        SiteID: si,
        AlarmName: an,
     Access:'AccessNeg',
        createdAt:new Date()
      });
    //   return false;
       var ID=Session.get('SiteAlarmID');

       SiteAlarmAdd.update({_id:ID},
         {$set:{Access: 'AccessNeg' }});
}
  });


// End
Template.Access.rendered=function() {
  //$('#ConnectedTime').datepicker();
  $('.clockpicker').clockpicker();
}
