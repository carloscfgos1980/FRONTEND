const addTask = document.querySelector('#add-task');

const addBtn = addTask.querySelector('button');

const newTask = document.querySelector('#new-task ul');


addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const value = addTask.querySelector('input[type="text"]').value;

    postData(value);

    addingHTML(value);

});

const addingHTML = (elem) => {
    const li = document.createElement('li');
    const task = document.createElement('span');
    const deleteBtn = document.createElement('button');

    task.textContent = elem;
    deleteBtn.innerHTML = '';

    task.classList.add('task');
    deleteBtn.classList.add('delete');

    li.appendChild(task);
    li.appendChild(deleteBtn);
    newTask.appendChild(li);
}


newTask.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'delete') {

        const text = e.target.previousElementSibling.textContent;
        //console.log(text)

        deleteTasks(text);

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);

    }
});



const dataDOM = getData();


const addData = (items) => {
    console.log("Async fetch from the local host:", items)
    items.then(data => {

        console.log("Array from the fetched Async:", data)
        data.forEach((tarea) => {
            output = tarea.description;
            console.log("tareas:", output);
            const li = document.createElement('li');
            const task = document.createElement('span');
            const deleteBtn = document.createElement('button');

            task.textContent = output;
            deleteBtn.innerHTML = '';

            task.classList.add('task');
            deleteBtn.classList.add('delete');

            li.appendChild(task);
            li.appendChild(deleteBtn);
            newTask.appendChild(li);
        });
    })
}

addData(dataDOM);