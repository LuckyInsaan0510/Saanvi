// let input = document.querySelector("#taskInput");
// let button = document.querySelector("#addBtn");
// let list = document.querySelector("#taskList");

// button.addEventListener("click", function () {
//   let task = input.value;

//   if (task === "") {
//     alert("please enter a task");
//     return;
//   }

//   let newItem = document.createElement("li");
//   newItem.textContent = task;
//   list.appendChild(newItem);

//   input.value = " "; //clear input
// });

let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");

button.addEventListener("click", function () {
  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  //Create a list item
  let newItem = document.createElement("li");

  //Create checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";

  //Create task text span
  let taskText = document.createElement("span");
  taskText.textContent = task;

  //Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.marginLeft = "10px";

  //Checkbox functionality
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskText.classList.add("Completed");
    } else {
      taskText.classList.remove("Completed");
    }
  });

  //Delete button functonality
  deleteBtn.addEventListener("click", function () {
    newItem.remove();
  });

  //Build list item
  newItem.appendChild(checkbox);
  newItem.appendChild(taskText);
  newItem.appendChild(deleteBtn);

  //Add to list
  list.appendChild(newItem);

  //Clear input
  input.value = "";
});
