


// Add the new task to the list of tasks saved in local storage.
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    console.log(task);
    let tasks;
    if(localStorage.getItem('tasks') === null ){
         tasks =[];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

    alert('Task saved!');
    e.preventDefault();
});

// Clear tasks.
document.querySelector('.clear-tasks').addEventListener('click', function(e){
    tasks = [];
    localStorage.clear();
})