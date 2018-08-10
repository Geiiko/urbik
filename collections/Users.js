Schema = {};

Schema.UserProfile = new SimpleSchema({
    firstName : {type: 'text'},
    lastName : {type: 'text'},
    address : {type: 'text'},
    birthday : {type: 'date'},
    country : {type: 'text'},
    gender : {type: String, allowedValues: ['male', 'female']},
    job : {type: 'select'},
});

Schema.User = new SimpleSchema({
  profile: {type: Schema.UserProfile},
});

AdminConfig = {
  adminEmails: ['alaric.degand@hotmail.fr'],
  collections:
  {
  }
}

Meteor.users.attachSchema(Schema.User);
