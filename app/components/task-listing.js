import Ember from 'ember';

export default Ember.Component.extend({
	toggleEdit() {
			this.toggleProperty('isEditing');
		},
	isEditing: false,
	actions : {
    	removeToDo(params) {
    	  this.attrs.removeToDo(params);
    	  // this.get('removeToDo')(params);	//documented version

    	},
    	editToDo(params)
    	{
    		// this.$("#edit-btn").fadeOut("slow");
    		this.toggleEdit();
    		this.get('editToDo')(params);
    		console.log(this.get('newtitle'));	

    	},
    	saveToDo(params)
    	{
    		// this.$("#edit-btn").fadeOut("slow");
    		var newTitle = (this.get('newtitle'));	
    		var newStatus = (this.get('newstatus'));	
    		this.toggleEdit();
    		this.get('saveToDo')(params, newTitle, newStatus);
    	}

	}
});
