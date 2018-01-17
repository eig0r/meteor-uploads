
Meteor.subscribe('CairoOrange');
Template.SiteInformation.helpers({
    SI() {return Session.get('SiteInformation')
  }

});
