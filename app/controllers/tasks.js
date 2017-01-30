import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		removeToDo : function(){
			console.log('deleting');


			this.store.findRecord('task', 2).then(function(task) {
			  task.destroyRecord(); // => DELETE to /posts/2
			});


			// var todo = this.get('task');
			// console.log('asdf' + todo);
   //  		store.deleteRecord(todo);
		},

		editToDo : function(){
			console.log('editing');


    		
    		// todo.save();
		}
	}
});
