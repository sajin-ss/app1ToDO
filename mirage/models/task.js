import { Model } from 'ember-cli-mirage';
import DS from 'ember-data';


export default Model.extend({
		title : DS.attr('string'),
		status : DS.attr('string')	
});
