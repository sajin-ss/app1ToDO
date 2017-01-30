import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		// return [{
		// 	title: 'demoTitle',
		// 	status: 'demoStatus'
		// }
		// ];

				// this.get('store').push({
				// 	data: [
				// 	{	
				// 		type : 'task',
				// 		attributes : {
				// 			title: 'demo title',
				// 			status: 'demo status'
				// 		}
				// 	}
				// 	]
				// });

		return this.get('store').findAll('task');
		
	}
});
