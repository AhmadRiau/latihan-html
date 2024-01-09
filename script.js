var addbutton = document.getElementById("input-btn");
addbutton.addEventListener("click", addToDoItem);

var toDoInput = document.getElementById("todo-input");
var toDoList = document.getElementById("todo-list")

function newToDoItem(itemText, completed) {
   var toDoItem = document.createElement("li");
   var toDoText = document.createTextNode(itemText);
   toDoItem.appendChild(toDoText);

   if(completed) {
      toDoItem.classList.add("completed");
   }
   toDoList.appendChild(toDoItem);
   toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
   var itemText = toDoInput.value;
   newToDoItem(itemText, false);
   toDoInput.value = "";
}
  
function toggleToDoItemState() {
   if (this.classList.contains("completed")) {
      this.classList.remove("completed");
   } else {
      this.classList.add("completed");
   }
}

function clearItem() {
   var completedItems = toDoList.getElementsByClassName("completed");

   while (completedItems.length > 0) {
       completedItems.item(0).remove();
   }
}

function emptyList() {
   var toDoItems = toDoList.children;
   while (toDoItems.length > 0) {
       toDoItems.item(0).remove();
   }
}


