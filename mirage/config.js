import Mirage from 'ember-cli-mirage';


export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.namespace = '/api';
  

  this.get('tasks');
  this.post('tasks');

  this.get('/tasks/:id');

  // this.del('/tasks');
  this.del('/tasks/:id');

  this.patch('/tasks/:id');

this.del('/tasks', function(db, request){
  console.log('deleting all');
  task.destroy();
});

//   this.del('/tasks/:id',function(db, request) {
//     console.log("------>" + db.tasks);
//     var id = request.params.id;
//     // console.log("=>  " + id);
//     db.tasks.remove(id );

    
// return new Mirage.Response(204, {}, {});

//     // return {
//     //     data: store.tasks.map(attrs => (
//     //         {type: 'tasks', attributes: attrs }
//     //     ))
//     // };


//   });


}
