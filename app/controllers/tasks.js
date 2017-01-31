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
			// this.toggleProperty('isEditing', true);
			// console.log(isEditing);

		// var resource = this.get('model');
		// var newTitle = $("#edit-box").val();
		// console.log('new Title : ' + newTitle);
		// console.log(resource);
     	 // resource.save();

			// this.store.findRecord('task', params.id).then(function (task) {
				
			// });


    		
    		// todo.save();	
		},

		saveToDo : function(params, newTitle){

			console.log('saving' + params.id);
			console.log('newtitle' + newTitle);
			// var resource = this.get('model');
			// console.log(resource);




			var myStore = this.store.push({
  			data: {
  			  id: params.id,
  			  type: 'task',
  			  attributes: {
  			    title: newTitle,
  			    status: 'Done'
  			  }
  			}
			});

			myStore.save();




			var ppp = this.store.findAll('task');
			console.log(ppp);
		}
	}
});
