let todos = [];

function addTodo() {
    const title = document.getElementById('todo-title').value;
    const dueDate = document.getElementById('date-picker').value;

    if (title === '') {
        alert("Please enter a task!");
        return;
    }

    const newTodo = {
        id: Date.now(), 
        title: title,
        dueDate: dueDate,
        completed: false
    };

    todos.push(newTodo);
    render();
}

function toggleComplete(id) {
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;

    render();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}

function editTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    const newTitle = prompt("Edit task:", todo.title);
    const newDueDate = prompt("Edit due date (yyyy-mm-dd):", todo.dueDate); 

    if (newTitle !== null && newTitle !== '') {
        todo.title = newTitle;
    }

    if (newDueDate !== null && newDueDate !== '' && !isNaN(new Date(newDueDate))) {
        todo.dueDate = newDueDate;
    } else if (newDueDate !== null && newDueDate !== '') {
        alert("Please enter a valid date.");
        return;
    }

    render();
}

function render() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.id = todo.id;
        todoElement.classList.add('todo-item');

        const title = document.createElement('span');
        title.innerText = `${todo.title}`;
        if (todo.completed) {
            title.classList.add('completed'); 
        }

        const dueDate = document.createElement('span');
        dueDate.classList.add('date');
        dueDate.innerText = formatDate(todo.dueDate);

        todoElement.appendChild(title);
        todoElement.appendChild(dueDate);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('todo-item-buttons');

        const completeButton = document.createElement('button');
        completeButton.innerText = todo.completed ? 'Mark as Incomplete' : 'Mark as Completed';
        completeButton.onclick = () => toggleComplete(todo.id);
        buttonContainer.appendChild(completeButton);

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = () => editTodo(todo.id);
        buttonContainer.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteTodo(todo.id);
        buttonContainer.appendChild(deleteButton);

        
        todoElement.appendChild(buttonContainer); 

        todoList.appendChild(todoElement);
    });
}


function toggleComplete(id) {
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed; 

    render(); 
}


function formatDate(dateString) {
    const [year, month, day] = dateString.split("-"); 
    return `${day}/${month}/${year}`; 
}

function addTodo() {
    const title = document.getElementById('todo-title').value;
    const dueDate = document.getElementById('date-picker').value;

    if (title === '') {
        alert("Please enter a task!");
        return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(dueDate);

    if (selectedDate < currentDate) {
        alert("The selected date has already passed. Please choose a valid date.");
        return;
    }

    const newTodo = {
        id: Date.now(),
        title: title,
        dueDate: dueDate,
        completed: false
    };

    todos.push(newTodo);
    render();
}
