const inputbox = document.getElementById("inputbox");
const list_cont = document.getElementById("list_cont");

function addTask() {
  if (inputbox.value === "") {
    alert("You must enter a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    list_cont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  inputbox.value = "";
  saveData();
}

list_cont.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("tasks", list_cont.innerHTML);
}

function showTask() {
  list_cont.innerHTML = localStorage.getItem("tasks");
}

showTask();
