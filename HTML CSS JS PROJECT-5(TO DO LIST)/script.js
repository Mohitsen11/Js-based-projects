//Create Variables

const addTask = document.getElementById('AddTask');
const addInput = document.getElementById('inputTaker');
const taskContainer = document.getElementById('task-Container');

//Event kistener for Add Button

addTask.addEventListener('click' , function(){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${addInput.value}`;

    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can id="trash"></i>`;
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if(addInput.value === ""){
        alert('Please enter a task!');
    }
    else{
        taskContainer.appendChild(task);
    }

    addInput.value = "";

    checkBtn.addEventListener('click' , function(){
          
        checkBtn.parentElement.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener('click' , function(e){

        let target = e.target;
          target.parentElement.parentElement.remove();
    });

});