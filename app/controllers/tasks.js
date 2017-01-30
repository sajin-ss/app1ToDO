import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		removeToDo : function(){
			console.log('deleting');


			store.findRecord('post', 2).then(function(post) {
			  post.destroyRecord(); // => DELETE to /posts/2
			});


			// var todo = this.get('task');
			// console.log(todo);
   //  		store.deleteRecord(todo);
		},

		editToDo : function(){
			console.log('editing');


    		
    		// todo.save();
		}
	}
});
