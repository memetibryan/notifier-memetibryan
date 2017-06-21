import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('company', {
    path: '/company/:company_id'
  });
  this.route('company-profile');
  this.route('subscriber-profile');
  this.route('signin');
});

export default Router;
