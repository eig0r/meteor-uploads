
Meteor.subscribe('ShiftEng');

Template.Home.onCreated(function(){
	this.autorun(() => {
// this.subscribe('OfficeShiftEng');
    Session.set('AccountID',Meteor.userId());



	});
});

Template.Home.events({
    'click #button':function (event) {
     event.preventDefault();
 FlowRouter.go('/mainView')

console.log('Lets check in')
 }
  });


Template.Home.events({
    'click #OfficeShifEng':function (event) {
     event.preventDefault();

     var Oct = document.getElementById("OctEng").value;
     var Mohandsen = document.getElementById("MohandsenEng").value;
     var Gisr = document.getElementById("GisrEng").value;
		 var Maade = document.getElementById("MaadieEng").value;
		 var Nasr = document.getElementById("NasrEng").value;
		 var Shoubra = document.getElementById("ShoubraEng").value;
		 var NewCairo = document.getElementById("NewCairoEng").value;


      ShiftEng.insert({
        Eng: Oct-'OCT',
        Eng:Mohandsen,
        Eng: Gisr,
				  Eng: Maade,
					  Eng: Nasr,
						  Eng: Shoubra,
							  Eng: NewCairo,


        userId:Meteor.userId()
      });

       return false;

}

  });
