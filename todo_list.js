var Task = function(id, description) {
  this.id = id;
  this.description = description;
  this.completed = false;
}

var TodoList = function() {
  this.tasks = [];
  this.current_id = 0;
};

TodoList.prototype.add = function(task){
  this.tasks.push(new Task(this.current_id, task));
  this.current_id++;
}

TodoList.prototype.list = function(){
  for(var i = 0; i < this.tasks.length; i++){
    console.log(this.tasks[i]);
  }
}

Task.prototype.complete = function(){
  this.completed = true;
}

TodoList.prototype.remove = function(task) {
  taskIndex = task.id;
  console.log("Removing task at index " + taskIndex);
  this.tasks.splice(taskIndex, 1);
}


// Driver code

var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
console.log(groceryList.tasks[0]);
groceryList.list();

var breadTask = groceryList.tasks[0];

console.log(breadTask.id); //-> 1 (some unique numerical ID)
console.log(breadTask.description); //-> 'bread'
console.log(breadTask.completed); //-> false

breadTask.complete();
console.log(breadTask.completed);
console.log(groceryList.tasks[0]);

groceryList.remove(breadTask);

groceryList.list();

groceryList.list();


