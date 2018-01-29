Template.PG.helpers({
    SAI() {return Session.get('SiteAlarmInformation')
  }

});
// PG Connected
      Template.PG.events({

      'click .PgSave':function (event) {
         event.preventDefault();

           var si=Session.get('OneSiteID');
            var ar= document.getElementById("Area").value;
            var an= document.getElementById("AlarmName").value;
            var of= document.getElementById("Office").value;
            var ConnectedTime = document.getElementById("ConnectedTime").value;
            var ConnectionReason = document.getElementById("ConnectionReason").value;

             PgConnection.insert({
               SiteID: si,
               AlarmName: an,
               Area:ar,
               Office:of,
               ConnectedTime:ConnectedTime,

              ConnectionReason:ConnectionReason,
               createdAt:new Date()
             });

             AllAlarms.insert({
               SiteID: si,
               AlarmName: an,
               Area:ar,
               Office:of,
               PG:'Connected',
               createdAt:new Date()
             });

  // Update Site AlarmAdd with PG Connection Status (Connect)..
             var ID=Session.get('SiteAlarmID');
             SiteAlarmAdd.update({_id:ID},
               {$set:{PG: 'Connected' }});

         }
          });


// PG DisConnected

          Template.PG.events({

          'click .PgSaveDisconnect':function (event) {
             event.preventDefault();
             var si=Session.get('OneSiteID');
              var ar= document.getElementById("Area").value;
              var an= document.getElementById("AlarmName").value;
              var of= document.getElementById("Office").value;
              var disConnectedTime = document.getElementById("disConnectedTime").value;
              var ConnectionReason = document.getElementById("ConnectionReason").value;

              PgConnection.insert({
                SiteID: si,
                AlarmName: an,
                Area:ar,
                Office:of,
                disConnectedTime:disConnectedTime,

               ConnectionReason:ConnectionReason,
                createdAt:new Date()
              });

                var ID=Session.get('SiteAlarmID');
                 SiteAlarmAdd.update({_id:ID},
                   {$set:{PG: 'dis-Connected' }});


             }
              });


              Template.PG.rendered=function() {
                $('.clockpicker').clockpicker();
              }
