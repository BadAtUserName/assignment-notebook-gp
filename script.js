//I am going to leave a lot of comments to it's easier to follow along as to what is going on

//Global variables

const assignmentForm = document.getElementById('assignment-form');
const userInput = document.getElementById('userInput');
const assignmentList = document.getElementById('assignment-list');

//TODO Add the weather


//DONE-TODO create a new item assignent in the unordered list

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

//takes in the text to add a new assignment to the assignment list
function addNewAssignment(assignment) { 
  const listItem = document.createElement('li');
  const assignmentText = document.createElement('span')
  
  assignmentText.textContent = assignment;
  listItem.appendChild(assignmentText);
  assignmentList.appendChild(listItem);
  console.log(assignmentList);

  //TODO Create a way to show the assignment is done
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  listItem.appendChild(checkBox)

  //need event listener for assignment completion
checkBox.addEventListener('change', function() {
  if (this.checked) {
    assignmentText.style.textDecoration = 'line-through';
  } else {
    assignmentText.style.textDecoration = 'none'
  }

});
}


























