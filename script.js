//I am going to leave a lot of comments to it's easier to follow along as to what is going on

//Global variables

const assignmentForm = document.getElementById('assignment-form');
const userInput = document.getElementById('userInput');
const assignmentList = document.getElementById('assignment-list');
const dueDate = document.getElementById('dueDate');

//TODO Add the weather


//DONE-TODO create a new item assignent in the unordered list

//function to create new assignment
function addNewAssignment(newAssignment) {
  const listItem = document.createElement('li');
  const assignmentText = document.createElement('span')

  assignmentText.textContent = newAssignment.assignment + " " + newAssignment.dueDate;

  const checkBox = createCheckBox(assignmentText);
  const deleteButton = createDeleteButton(listItem);

  listItem.appendChild(checkBox);
  listItem.appendChild(assignmentText);
  listItem.appendChild(deleteButton);

  assignmentList.appendChild(listItem);
  console.log(assignmentList);
}


//function to create a checkbox
//function is passed assignmentText as an arguement to make it accessible to the function
function createCheckBox(assignmentText) {
  const checkBox = document.createElement('input');

  checkBox.setAttribute('type', 'checkbox');

  checkBox.addEventListener('change', function (event) {
    if (event.target.checked) {
      assignmentText.style.textDecoration = 'line-through';
    } else {
      assignmentText.style.textDecoration = 'none'
    }
  });
  return checkBox
}

//function to create a delete button
function createDeleteButton(listItem) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';

  deleteButton.addEventListener('click', function () {
    assignmentList.removeChild(listItem);
    console.log(assignmentList);
  });
  return deleteButton;
}

//Event listeners
//event listener for submit button 
assignmentForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const newAssignment = {
    "assignment": userInput.value, 
    "dueDate": dueDate.value
  };

  if (newAssignment.assignment === '') {
    alert('You should enter an assignment');
    return;
  }
  if (newAssignment.dueDate <= Date.now()) {
    alert('Please enter a future date');
    return;
  }
  userInput.value = ''; // will clear the input field after assignment is added
  addNewAssignment(newAssignment)
});




























