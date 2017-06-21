import Ember from 'ember';

export default Ember.Component.extend({
  isCompanyFormShowing: false,
  isSubscribeFormShowing: false,
  successFormShowing: false,

  actions: {
    showCompanyForm() {
      this.set('isCompanyFormShowing', true);
    },
    // hideModal() {
    //   this.set('isCompanyFormShowing', false);
    // },
    // hideModal1() {
    //   this.set('isSubscribeFormShowing', false);
    // },
    hideCompanyForm() {
      this.set('isCompanyFormShowing', false);
    },
    hideSuccessForm() {
      this.set('successFormShowing', false);
    },
    showSubscribeForm() {
      this.set('isSubscribeFormShowing', true);
      // this.set('isCompanyFormShowing', false);
    },
    hideSubscribeForm() {
      this.set('isSubscribeFormShowing', false);
    },
    submitSubscriber() {
      var params = {
        username: this.get('username'),
        useremail: this.get('useremail'),
        userphone: this.get('userphone'),
        userinterest: this.get('userinterest'),
        userlocation: this.get('userlocation'),
      };
      this.set('isSubscribeFormShowing', false);
      this.sendAction('saveSubscriber', params);
    },
    submitCompany() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        details: this.get('details'),
        email: this.get('email'),
        senderemail: this.get('senderemail'),
        phone: this.get('phone'),
        category: this.get('category'),
      };
      this.set('isCompanyFormShowing', false);
      this.sendAction('saveCompany', params);
    }
  }
});
