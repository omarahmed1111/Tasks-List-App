


// Add the new task to the list of tasks saved in local storage.
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    if(task === ''){
        alert('Enter a valid task name with length 1 or more characters');
    } else {
        let tasks;
        if(localStorage.getItem('tasks') === null ){
            tasks =[];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(task);

        localStorage.setItem('tasks',JSON.stringify(tasks));

        alert('Task saved!');
    }
    
});

// Clear tasks.
document.querySelector('.clear-tasks').addEventListener('click', function(e){
    localStorage.clear();
});


// Add the list of tasks on th UI.
let tasks = JSON.parse(localStorage.getItem('tasks'));
if(tasks !== null){
    tasks.forEach(function(task){
        
        const li = document.createElement('li');
        li.className = 'collection-item';
    
        li.appendChild(document.createTextNode(task));
        
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML='<i class="fa fa-remove"></i>';
    
        li.appendChild(link);
    
        document.querySelector('ul').appendChild(li);
    
    });
}

// Delete the task after hitting its delete button
document.querySelectorAll('.delete-item').forEach(function(deleteLink){
    deleteLink.addEventListener('click',function(e){
        let index = Array.from(deleteLink.parentElement.parentElement.children).indexOf(deleteLink.parentElement);
        let tmpTasks = [];
        let i = 0;
        tasks.forEach(function(task){
            if(i!=index){
                tmpTasks.push(task);
            }
            i++;
        });
        localStorage.setItem('tasks',JSON.stringify(tmpTasks));
        window.location.reload();
    });
});


