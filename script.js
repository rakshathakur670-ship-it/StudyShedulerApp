let tasks = [];

function addTask() {
    let taskName = document.getElementById("task").value;
    let deadline = document.getElementById("deadline").value;

    if (taskName === "") {
        alert("Enter task!");
        return;
    }

    let task = {
        name: taskName,
        deadline: deadline,
        status: "Pending"
    };

    tasks.push(task);
    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((t, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${t.name} - ${t.deadline} - ${t.status}
            <button onclick="markDone(${index})">✔</button>
        `;
        list.appendChild(li);
    });
}

function markDone(index) {
    tasks[index].status = "Completed";
    displayTasks();
}