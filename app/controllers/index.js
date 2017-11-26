import Controller from '@ember/controller';

export default Controller.extend({
  firstName: 'Vedran',
  lastName: 'Jaić',
  password: 'apple',

  actions: {
    createUser() {
      let newUser = this.store.createRecord('user', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        password: this.get('password')
      });
      newUser.save();
    }
  }
});
