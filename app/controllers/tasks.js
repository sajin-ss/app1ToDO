import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		removeToDo : function(params){
			// console.log('deleting' + params.id);


			if (params == undefined) {
				console.log('in undefined');
				this.store.findAll('task').then(function(task) {
			  		 
			  		 task.content.forEach(function(rec) {
     				   Ember.run.once(this, function() {
     				      rec.deleteRecord();
     				      rec.save();
     				   });
     				}, this);

				});
			}
			else
			{
				this.store.findRecord('task', params.id).then(function(task) {
			  		task.destroyRecord(); // => DELETE to /posts/2
				});
			}
			


			// var todo = this.get('task');
			// console.log('asdf' + todo);
   //  		store.deleteRecord(todo);
    		// todo.save();

		},

		editToDo : function(params){
			console.log('editing');

			// $("#edit-btn").removeClass('btn-warning');
			// $("#edit-btn").addClass('btn-success');
			// $("#edit-btn").html('Save');
			this.$().removeClass('btn-warning');


			this.store.findRecord('task', params.id).then(function (task) {
				
			});


    		
    		// todo.save();	
		}
	}
});
