
Template.OfficeShiftEng.events({
    'click #OfficeShifEng':function (event) {
     event.preventDefault();

     var OfficeShiftEng = document.getElementById("OfficeShiftEng").value;
     var Office = document.getElementById("SelectOffice").value;



      ShiftEng.insert({
        OfficeShiftEng:OfficeShiftEng,
        Office:Office,




        userId:Meteor.userId()
      });

       return false;

}

  });
