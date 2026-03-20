document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  // Safety check
  if (!input || !addBtn || !taskList) {
    console.error("HTML elements not found!");
    return;
  }

  addBtn.addEventListener("click", addTask);

  // Press Enter to add task
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const task = input.value.trim();

    if (task === "") {
      alert("Please enter a task!");
      return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    span.addEventListener("click", function () {
      span.classList.toggle("completed");
    });

    const delBtn = document.createElement("span");
    delBtn.textContent = "X";
    delBtn.classList.add("delete");

    delBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    input.value = "";
  }

});