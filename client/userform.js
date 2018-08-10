Meteor.call('UserLocation/get', function (err, res) {
  if(err){
    alert('Error');
  }else{
    Session.set("userCountry", res);
    Session.set("countryName", CountryCodes.countryName(res.country_code));
  }
});

Template.countryInput.helpers({
  located(name) {
    if (Session.get("countryName") == name)
      return true;
    else
      return false;
  },
})
