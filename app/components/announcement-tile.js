import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement) {
      if (confirm('You sure?')) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
