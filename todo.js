var input = document.querySelector("#txt-input");
var btn = document.querySelector(".btn-add");
// var ul = document.querySelector(".add-list");
var ul = document.querySelector(".sidenav");
let tasks = localStorage.getItem('tasks')

if (!tasks) {
  // initialize the value
  tasks = []
  // save it in localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks))
} else {
  tasks = JSON.parse(tasks);
  tasks = tasks.map(tObj => {
    return new Task(tObj)
  })
}

function add() {
 
  if (input.value === "") {
    alert("Write Something there!!!");
    return;
  }     
    const li = document.createElement("li");
    li.className="nav-item"
    // li.innerHTML = `<p>${input.value}</p>` + `<button class="btn btn-line">&#10006;</button>`;
    li.innerHTML = `<span>${input.value}</span>
                    <i class="fa-regular fa-circle-xmark" title="Delete" id="deleteTask"></i>`
    ul.appendChild(li);

    
    // const lisner = document.querySelector("li");
  
  input.value = "";
}
ul.addEventListener( "click",function (p) {
    if (p.target.tagName === "LI") {
      p.target.classList.toggle("check-li");
      p.target.childNodes[0].classList.toggle("check");
      console.log(p.target)
      
    } else if (p.target.tagName === "I" && p.target.id === "deleteTask") {
      p.target.parentElement.remove();
    }
  },
  false
);

function search_item() {
  let input = document.getElementById('txt-search').value
  input = input.toLowerCase();
  let all_items = document.getElementsByClassName('nav-item');

  for (i = 0; i < all_items.length; i++) {
    if (!all_items[i].innerHTML.toLowerCase().includes(input)) {
      all_items[i].style.display = "none";
    }
    else {
      all_items[i].style.display = "list-item";
    }
  }
}

function saveTasksToLocalStorage () {
  // save to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function taskHTML(data) {
  return `
    <div class="task ${data.status} ${data.deleted ? 'deleted' : ''}" id="${data.id}">
        <li class="nav-item">${data.title}
        <i class="fa-regular fa-${data.deleted ? 'rotate-left' : 'circle-xmark'}" aria-hidden="true"></i>
        </li>
    </div>
  `;
}

const addBtn = document.getElementById("addTask");
addBtn.addEventListener("click", () => {
  const title = document.getElementById("txt-input");
  if (!title.value) {
    alert("please enter title");
    return;
  }
  const newTask = new Task({ title: title.value })
  tasks.push(newTask);

  saveTasksToLocalStorage ();

  title.value = "";
  renderTasks();
});

const tasksList = document.getElementById("navAccordion");

function renderTasks() {
  let htmlString = "";

  const pendingTasks = tasks.filter((task) => task.status !== "completed" && task.deleted === false);
  const completedTasks = tasks.filter((task) => task.status === "completed" && task.deleted === false);
  const deletedTasks = tasks.filter((task) =>  task.deleted === true);

  pendingTasks.forEach((task) => {
    htmlString += taskHTML(task);
  });
  completedTasks.forEach((task) => {
    htmlString += taskHTML(task);
  });
  tasksList.innerHTML = htmlString;
}