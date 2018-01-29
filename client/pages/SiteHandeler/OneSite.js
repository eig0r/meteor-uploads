

Template.OneSite.helpers({
  SiteAlarmInfo: function() {
    var si= Session.get('SiteAlarmID');
    return SiteAlarmAdd.findOne({_id:si});

 }

 });

 // Action taken on site from AllAlarms DB

 Template.OneSite.helpers({
   SiteAlarm: function() {
     var si=Session.get('OneSiteID');
     var sai=Session.get('AlarmName');
     return AllAlarms.find({SiteID: si ,AlarmName:sai},{sort:{createdAt: -1}});
   }
 });

 // Update Last Comment & Alarm Time Taken
 Template.OneSite.events({

 	'click .Update': function(event){



        event.preventDefault();
        var si=Session.get('OneSiteID');
        var cmValue=Session.get('usercomment');
        var ID=Session.get('SiteAlarmID');
        console.log(si);
                 var ar= document.getElementById("Area").value;
                     console.log(ar);
         var an= document.getElementById("AlarmName").value;
             console.log(an);
         var of= document.getElementById("Office").value;
      var AlarmTime= document.getElementById("AlarmTime").value;
  //   console.log(AlarmTime);
       var date = new Date();
      var AlarmTimeR = new Date(AlarmTime).getTime();
       var TimeNow = new Date().getTime();
       var hourDiff = TimeNow - AlarmTimeR; //in ms
       var secDiff = hourDiff / 1000; //in s
       var minDiff = hourDiff / 60 / 1000; //in minutes
       var hDiff = hourDiff / 3600 / 1000; //in hours
       var humanReadable = {};
       humanReadable.hours = Math.floor(hDiff);
       humanReadable.minutes = parseFloat(minDiff - 60 * humanReadable.hours).toFixed(0);


      SiteAlarmAdd.update({_id:ID},
       {$set:{LastUpdate:cmValue , AlarmSLA:humanReadable }});

        AllAlarms.insert({
          SiteID: si,
          AlarmName: an,
          LastUpdate:cmValue,
          createdAt:new Date()
        });

         Session.set('usercomment','')
         document.getElementById("Update").disabled = true;

 }
 });




 Template.OneSite.events({
   "keyup .user-input-comment": function(event) {
     var commentval = event.target.value;
     Session.set('usercomment',commentval);
         document.getElementById("Update").disabled = false;
   }
 });
