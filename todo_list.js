var TodoList = function() {
  this.tasks = [];
  this.counter = 0;
};
var Task = function(id, description, completed) {
  this.id = id;
  this.description = description;
  this.completed = completed;
};
TodoList.prototype.add = function(item) {
  this.tasks.push(new Task(this.counter +=1, item, false));
};
TodoList.prototype.list = function() {
  for (i = 0; i < this.tasks.length; i ++) {
    console.log(this.tasks[i]);
  };
};
Task.prototype.complete = function() {
  this.completed = true;
};
TodoList.prototype.remove = function(item) {
  this.tasks.splice(item.id-1, 1);
};


// Driver code
// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
console.log(groceryList.tasks);
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]
console.log(groceryList.tasks);
groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

console.log(breadTask.id); //-> 1 (some unique numerical ID)
console.log(breadTask.description); //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

console.log(groceryList.list());
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
