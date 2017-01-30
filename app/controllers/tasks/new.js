import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTask : function(){
			var Title = this.get('title');
			var Status = this.get('status');


			var taskSet = this.store.createRecord('mytasks', {
				title: Title,
				status: Status
			});

			console.log('Added');

			// var tasks = this.get('store').findAll('mytasks');
			// console.log(tasks);


			this.setProperties({
				title : '',
				status : ''
			});

			// taskSet.save();


		}
	}
});
