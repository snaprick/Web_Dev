var addButton = document.querySelector('.add-btn')
var taskList = document.querySelector('.tasks')
var newTask = document.querySelector('.new-task')
var clearAll = document.querySelector('.clear-btn')

addButton.addEventListener('click', function () {
    var addTask = newTask.value.trim();
    newTask.value = "";
    if (addTask == "")
        return;
    var taskText = document.createElement('span');
    taskText.innerHTML = addTask;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function(){
        if (this.checked)
            this.parentNode.className = 'task-item done';
        else
            this.parentNode.className = 'task-item undone';
    });

    var bin = document.createElement('img')
    bin.className = 'bin-img';
    bin.src = 'static/img/bin.png';
    bin.alt = 'Delete task';
    bin.addEventListener('click', function (){
        this.parentNode.remove();
    });

    var item = document.createElement('div');
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