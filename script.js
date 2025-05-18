//These are the initial tasks for the kanban
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

//It gets the modal element from the page
const modal = document.getElementById("modal");

//This is meant to be logging all the task titles
for (let i = 0; i < initialTasks.length; i++) {
  console.log(initialTasks[i].title);
}

//It finds the column, and creates the task cards within the divs
initialTasks.forEach((task) => {
  const column = document.querySelector(
    `.tasks-container[data-status="${task.status}"]`
  );

  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");
  taskCard.textContent = task.title;
  taskCard.dataset.id = task.id;

  column.appendChild(taskCard);
});

//This is meant to be a dynamic counter for the headers
function updateTaskCounts() {
  const headers = document.querySelectorAll("h4[data-status]");

  headers.forEach((header) => {
    const status = header.dataset.status;
    const tasks = document.querySelectorAll(
      `.tasks-container[data-status="${status}"] .task-card`
    );
    header.textContent = `${status.toUpperCase()} (${tasks.length})`;
  });
}

updateTaskCounts();
//This creates event listners for the task cards for interactability
const taskCards = document.querySelectorAll(".task-card");

taskCards.forEach((card) => {
  card.addEventListener("click", () => {
    const taskId = card.dataset.id;
    const task = initialTasks.find((task) => task.id == taskId);

    document.getElementById("title-modal").value = task.title;
    document.getElementById("modal-description").value = task.description;
    document.getElementById("modal-status").value = task.status;

    modal.classList.remove("hidden-modal");
  });
});

//This is meant to close the modal
const closebtn = document.getElementById("close-btn");

closebtn.addEventListener("click", () => {
  modal.classList.add("hidden-modal");
});
