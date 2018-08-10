Router.route('/', function () {
  this.render('Home');
});

Router.route('/CRUD', function () {
  this.render('UserProfileEdit');
});
