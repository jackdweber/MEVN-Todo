
//Creat the component for a todo Item
var app = new Vue({
  el: '#app',
  data: {
    title: 'Simple Vuejs Todo',
    list: [{name: 'test'},{name: 'test2'}],
    itemToAdd: ""
  },
  methods: {
    //Function to get all current to do's
    update: function(){
      this.$http.get('http://localhost:3000/get').then((response) => {
        this.list = response.body;
        console.log(response);
      }, (response) => {
        alert('Error getting items');
      })
    },
    //Function to add a todo
    saveItem: function(){
      var url = 'http://localhost:3000/add/' + this.itemToAdd + '/true';
      this.$http.get(url).then((response)=>{
        this.itemToAdd = '';
        this.update();
      }, (response) => {
        alert('Error adding item');
      })
    },
    //Function to Delete a todo.
    delete: function(itemToDelete){
      var url = 'http://localhost:3000/delete/' + itemToDelete;
      this.$http.delete(url).then((response) => {
        this.update();
      }, (response) => {
        alert('Error deleting item');
      })
    }
  }
});

//Run the update for the first time on app load
app.update();
