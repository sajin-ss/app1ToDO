import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		// return [{
		// 	title: 'demoTitle',
		// 	status: 'demoStatus'
		// }
		// ];
		return this.store.findAll('task');
	}
});
