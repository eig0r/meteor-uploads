

	Meteor.publish('SiteAlarmAdd', function(){
		 if(Roles.userIsInRole(this.userId, 'normal-user')) {
	   return SiteAlarmAdd.find();
	}
	  });



	Meteor.publish('CairoOrange', function(){
		 if(Roles.userIsInRole(this.userId, 'normal-user')) {
	   return CairoOrange.find();
	}
	  });

		Meteor.publish('Sales', function(){
			 if(Roles.userIsInRole(this.userId, 'admin')) {
			 return Sales.find();
		}
			});


Meteor.publish('SiteAccess', function(){
	 if(Roles.userIsInRole(this.userId, 'normal-user')) {
	 return SiteAccess.find();
}
	});

	Meteor.publish('PgConnection', function(){
		 if(Roles.userIsInRole(this.userId, 'normal-user')) {
		 return PgConnection.find();
	}
		});

		Meteor.publish('ShiftEng', function(){
			 if(Roles.userIsInRole(this.userId, 'normal-user')) {
			 return ShiftEng.find();
		}
			});




Meteor.publish('MangmentTeam', function(){
	 if(Roles.userIsInRole(this.userId, 'adnormal-usermin')) {
	 return MangmentTeam.find();
}
	});

Meteor.publish('AllAlarms', function(){
	 if(Roles.userIsInRole(this.userId, 'normal-user')) {
	 return AllAlarms.find();
}
	});

	Meteor.publish('CairoOrangeSharing', function(){
		 if(Roles.userIsInRole(this.userId, 'normal-user')) {
		 return CairoOrangeSharing.find();
	}
		});
