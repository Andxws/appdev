const todos = [];

function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value.trim();
    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    if (title === '') {
        alert('Please enter a task');
        return;
    }

    todos.push({ title, dueDate, completed: false });
    textbox.value = '';
    datePicker.value = '';
    render();
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    render();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}

function render() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item' + (todo.completed ? ' completed' : '');

        const titleSpan = document.createElement('span');
        titleSpan.innerText = `${todo.title} - ${todo.dueDate}`;
        titleSpan.onclick = () => toggleComplete(index);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteTodo(index);

        todoItem.appendChild(titleSpan);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    });
}

render();
