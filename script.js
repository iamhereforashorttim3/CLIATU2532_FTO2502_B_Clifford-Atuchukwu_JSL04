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

for (let i = 0; i < initialTasks.length; i++) {
  console.log(initialTasks[i].title);
}

initialTasks.forEach((task) => {
  const column = document.querySelector(
    `.tasks-container[data-status="${task.status}"]`
  );

  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");
  taskCard.textContent = task.title;

  column.appendChild(taskCard);
});

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
