let tasks = [];
let idCounter = 1;

function addTask(name, description) {
    const task = { id: idCounter++, name, description };
    tasks.push(task);
    return task;
}

function viewTasks() {
    return tasks;
}

function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName || task.name;
        task.description = newDescription || task.description;
        return task;
    }
    return null;
}

function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        return tasks.splice(index, 1)[0];
    }
    return null;
}

console.log(addTask("Study for midterm exam"));
console.log(addTask("Finish project", "Work on JavaScript CRUD system"));
console.log(viewTasks());
console.log(updateTask(1, "To Pass the subject and graduate", "Find Job"));
console.log(deleteTask(2));
console.log(viewTasks());
