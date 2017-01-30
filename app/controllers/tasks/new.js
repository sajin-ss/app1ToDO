import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTask : function(){
			var Title = this.get('title');
			var Status = this.get('status');


			var taskSet = this.store.createRecord('task', {
				title: Title,
				status: Status
			});
			taskSet.save();


			// this.get('store').push({
			// 		data: [
			// 		{	
			// 			// id : 2,
			// 			type : 'task',
			// 			attributes : {
			// 				title: Title,
			// 				status: Status
			// 			}
			// 		}
			// 		]
			// 	});

			console.log('Added');

			// var tasks = this.get('store').findAll('mytasks');
			// console.log(tasks);


			this.setProperties({
				title : '',
				status : ''
			});



		}
	}
});
