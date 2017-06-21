import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return this.store.findAll('company');
  },
  actions: {
    saveCompany(params) {
      var newCompany = this.store.createRecord("company", params);
      newCompany.save().then(function() {
        console.log("company added");
      });
      this.transitionTo('company-profile');
    },
    saveSubscriber(params) {
      var newSubscriber = this.store.createRecord("subscriber", params);
      newSubscriber.save().then(function() {
        console.log("subscriber added");
      });
    }
  }
});
