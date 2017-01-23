
//Creat the component for a todo Item
var app = new Vue({
  el: '#app',
  data: {
    title: 'Simple Vuejs Todo',
    list: [{name: 'test'},{name: 'test2'}],
    itemToAdd: ""
  },
  methods: {
    update: function(){
      this.$http.get('http://localhost:3000/get').then((response) => {
        this.list = response.body;
        console.log(response);
      }, (response) => {
        console.log("Error");
      })
    },
    saveItem: function(){
      var url = 'http://localhost:3000/add/' + this.itemToAdd + '/true';
      this.$http.get(url).then((response)=>{
        this.update();
      }, (response) => {
        console.log("error");
      })
    }
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template:'<div class="todo-item-class"><h2>{{ todo.name }}</h2><button class="btn btn-danger pull-xs-right">Delete</button></div>'
});

//Run the update for the first time on app load
app.update();
