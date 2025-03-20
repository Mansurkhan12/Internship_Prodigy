let todoList = [];
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoListElement = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const task = todoInput.value;
    todoList.push(task);
    todoInput.value = '';
    renderTodoList();
});

function renderTodoList() {
    todoListElement.innerHTML = '';
    todoList.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);
        todoListElement.appendChild(li);
    });
}

function deleteTask(index) {
    todoList.splice(index, 1);
    renderTodoList();
}
