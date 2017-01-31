import Ember from 'ember';

export default Ember.Component.extend({
	toggleEdit() {
			this.toggleProperty('isEditing');
		},
	isEditing: false,
	actions : {
    	removeToDo(params) {
    	  this.attrs.removeToDo(params);
    	},
    	editToDo(params)
    	{
    		this.toggleEdit();
    		this.attrs.editToDo(params);
    	}
	}
});
