import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './userform.html';
import './userform.js';
import '../config/accountConfig.js';
import '../Route/router.js';
import '../collections/Users.js'

Template.Home.helpers({
  country() {
    return Session.get("countryName");
  },
});

Template.Table.helpers({
	users() {
		Meteor.users.find().forEach(function(oneUser) {
			console.log(oneUser);
		})

		return Meteor.users.find();
	},
})
