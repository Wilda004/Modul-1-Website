document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    let taskInputElement = document.getElementById('taskInput');
    let taskInput = taskInputElement.value.trim();

    if (taskInput === '') {
        // Jika input kosong, tampilkan pesan peringatan dan ubah border menjadi merah
        alert('Please enter a task!');
        return;
    }

    // Jika input tidak kosong, reset border kembali normal
    taskInputElement.style.border = '';

    let taskList = document.getElementById('taskList');
    let listItem = document.createElement('li');

    let taskText = document.createElement('span');
    taskText.textContent = taskInput;

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.onclick = deleteTask;

    let editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    editButton.onclick = editTask;

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    listItem.appendChild(taskText);
    listItem.appendChild(buttonContainer);
    taskList.appendChild(listItem);

    taskInputElement.value = ''; // Mengosongkan input setelah menambah
}

function deleteTask(event) {
    let taskItem = event.target.closest('li');
    taskItem.remove();
}

function editTask(event) {
    let taskItem = event.target.closest('li');
    let taskText = taskItem.querySelector('span').textContent;
    let newTask = prompt('Edit task:', taskText);

    if (newTask !== null && newTask.trim() !== '') {
        taskItem.querySelector('span').textContent = newTask;
    }
}
