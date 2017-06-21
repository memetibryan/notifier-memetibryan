import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  useremail: DS.attr(),
  userphone: DS.attr(),
  userinterest: DS.attr(),
  userlocation: DS.attr()
});
