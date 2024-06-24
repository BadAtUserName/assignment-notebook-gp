//I am going to leave a lot of comments to it's easier to follow along as to what is going on

//Global variables

const assignmentForm = document.getElementById('assignment-form');
const userInput = document.getElementById('userInput');
const assignmentList = document.getElementById('assignment-list');

//TODO Add the weather


//DONE-TODO create a new item assignent in the unordered list

//takes in the text to add a new assignment to the assignment list
function addNewAssignment(assignment) { 
  const listItem = document.createElement('li');
  const assignmentText = document.createElement('span')
  
  assignmentText.textContent = assignment;


  //TODO Create a way to show the assignment is done
  //create a checkbox checkbox is intentianal 
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');

  //create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete'

  //append the checkbox before the assignment text add delete button
  listItem.appendChild(checkBox)
  listItem.appendChild(assignmentText);
  listItem.appendChild(deleteButton)

  //append list item to assignment list
  assignmentList.appendChild(listItem);
  console.log(assignmentList);

    //event listener delete button
  deleteButton.addEventListener('click', function() {
    assignmentList.removeChild(listItem);
    console.log(assignmentList);
  });

  //need event listener for assignment completion
  checkBox.addEventListener('change', function() {
  if (this.checked) {
    assignmentText.style.textDecoration = 'line-through';
  } else {
    assignmentText.style.textDecoration = 'none'
  }


});
}

//event listener for the add assignment button
assignmentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newAssignment = userInput.value

  if (newAssignment === '') {
    alert('You should enter an assignment');
    return;
  }
  userInput.value = ''; // will clear the input field after assignment is added
  addNewAssignment(newAssignment)
});

























