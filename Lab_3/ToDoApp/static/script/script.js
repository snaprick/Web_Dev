const addButton = document.querySelector('.add-btn')
const taskList = document.querySelector('.tasks')
const newTask = document.querySelector('.new-task')
const clearAll = document.querySelector('.clear-btn')

addButton.addEventListener('click', function () {
    const addTask = newTask.value.trim();
    newTask.value = "";
    if (addTask == "")
        return;
    const taskText = document.createElement('span');
    taskText.innerHTML = addTask;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function(){
        if (this.checked)
            this.parentNode.className = 'task-item done';
        else
            this.parentNode.className = 'task-item undone';
    });

    const bin = document.createElement('img')
    bin.className = 'bin-img';
    bin.src = 'static/img/bin.png';
    bin.alt = 'Delete task';
    bin.addEventListener('click', function (){
        this.parentNode.remove();
    });

    const item = document.createElement('div');
    item.className = 'task-item'
    item.appendChild(checkbox)
    item.appendChild(taskText);
    item.appendChild(bin);

    taskList.appendChild(item);
});

clearAll.addEventListener('click', function () {
    while(document.querySelector('.task-item')!=null){
        document.querySelector('.task-item').remove();
    }
});