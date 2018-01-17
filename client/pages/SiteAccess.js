
Meteor.subscribe('SiteAccess');

Template.SiteAccess.helpers({
  AccessCoroprate: function() {
    return SiteAccess.find({AccessType:'Cor'},{sort:{createdAt: -1}});
  },
  AccessET: function() {
    return SiteAccess.find({AccessType:'ET'},{sort:{createdAt: -1}});
  },
  AccessVF: function() {
    return SiteAccess.find({AccessType:'VF'},{sort:{createdAt: -1}});
  },
  AccessNegotiator: function() {
    return SiteAccess.find({AccessType:'AccessNeg'},{sort:{createdAt: -1}});
  }
});
