const addList = document.querySelector('#list');
const myTodo = document.querySelector('.todo');
const inputTaskEl = document.querySelector('#text');
// const deleteButton = document.querySelector('.delete-item');
const resetButton = document.querySelector('#reset');
let taskNumber = addList.children.length; // every element has its properties so children is the property of ul and it stores
// result in the form of array so thats'y we use .length property
let arrTask = ['Learning HTML', 'Learning CSS'];
function deleteFn(index) {
  arrTask.splice(index, 1);
  renderTask(); //to display changes
}
function renderTask() {
  addList.innerHTML = '';
  arrTask.forEach((task, index) => {
    //index+1 so that numbering starts at 1 and if we delete some list el numbering changes accordingly
    const newTask = `<li>${
      index + 1
    }.${task}<button class="delete-item" onclick="deleteFn(${index})">Delete</button></li>
    `;

    addList.insertAdjacentHTML('beforeend', newTask);
  });
}
myTodo.addEventListener('click', () => {
  const inputText = inputTaskEl.value; //value of input type stored in new variable
  if (inputText === '') {
    alert('Please Enter a Task');
    return;
  }
  taskNumber++;
  const newTask = ` ${inputText}`; //here, we are getting task but it is not getting displayed so we  use renderTask
  // to display each list
  arrTask.push(newTask); //push task into array
  renderTask();
  inputTaskEl.value = ''; //make value zero after we add a task
  inputTaskEl.focus(); //focus mouse to input again
});
renderTask();
resetButton.addEventListener('click', () => {
  taskNumber = 0;
  arrTask = [];
  addList.innerHTML = '';
});
