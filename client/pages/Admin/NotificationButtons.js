

Template.NotificationButtons.events({
    'click #Gen': function(event){
     event.preventDefault();

Session.set('DownGenSites',PgConnection.find({ ConnectionReason:{ $ne: "Main Power Cutt Off" } }).fetch());
}
  });


  Template.NotificationButtons.events({
      'click #CW': function(event){
       event.preventDefault();
  Session.set('CWdownSites',SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML Fault','NodeB Unavailable'] },Area:{ $in: [ 'Cairo West'] } , Status: { $ne: "Clear" }}).fetch());
  }
    });

    Template.NotificationButtons.events({
        'click #CE': function(event){
         event.preventDefault();
    Session.set('CEdownSites',SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML Fault','NodeB Unavailable'] },Area:{ $in: [ 'Cairo East'] } , Status: { $ne: "Clear" }}).fetch());
    }
      });

      Template.NotificationButtons.events({
          'click #Nodal': function(event){
           event.preventDefault();
      Session.set('DownNodalSites',SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML Fault','NodeB Unavailable'] },SiteType:{ $in: [ 'NODAL'] } , Status: { $ne: "Clear" }}).fetch());
      }
        });

        Template.NotificationButtons.events({
            'click #VIP': function(event){
             event.preventDefault();
        Session.set('DownVIPSites',SiteAlarmAdd.find({ AlarmName:{ $in: [ 'OML Fault','NodeB Unavailable'] },SiteType:{ $in: [ 'VIP'] } , Status: { $ne: "Clear" }}).fetch());
        }
          });
