document.addEventListener('DOMContentLoaded', function () {
    // Lab 1 - Task List
    const addTaskButton = document.querySelector('#add-btn');
    const clearTaskButton = document.querySelector('#clear-btn');
    const inputField = document.querySelector('#input-text');
    const taskList = document.querySelector('#task-list');
    let taskCount = 0;

    // Add item to the task list
    addTaskButton.addEventListener('click', function () {
        const text = inputField.value;

        // Validation
        if (text.length === 0) {
            alert('Please enter a task.');
            return;
        } else if (text.length > 50) {
            alert('Task must be less than 50 characters.');
            return;
        }

        if (taskCount >= 10) {
            alert('You cannot add more than 10 tasks.');
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = text;
        taskList.appendChild(li);
        taskCount++;
        inputField.value = ''; // Clear input field
    });

    // Clear all tasks
    clearTaskButton.addEventListener('click', function () {
        taskList.innerHTML = ''; // Clear all list items
        taskCount = 0; // Reset task count
    });

    // Lab 2 - Student Club Roster
    const addStudentButton = document.querySelector('#add-student-btn');
    const removeStudentButton = document.querySelector('#remove-student-btn');
    const studentList = document.querySelector('#student-list');
    const studentNameInput = document.querySelector('#student-name');
    const studentIdInput = document.querySelector('#student-id');
    const studentGpaInput = document.querySelector('#student-gpa');
    const studentCountSpan = document.querySelector('#student-count');
    let studentCount = 0;

    // Add student to the roster
    addStudentButton.addEventListener('click', function () {
        const studentName = studentNameInput.value;
        const studentId = studentIdInput.value;
        const studentGpa = parseFloat(studentGpaInput.value);

        // Validation
        if (studentName.length === 0) {
            alert('Please enter a student name.');
            return;
        }
        if (studentId.length === 0) {
            alert('Please enter a student ID.');
            return;
        }
        if (isNaN(studentGpa) || studentGpa < 0 || studentGpa > 4) {
            alert('Please enter a valid GPA (0-4).');
            return;
        }

        // Create new student list item
        const li = document.createElement('li');
        li.textContent = `${studentName}, ID: ${studentId}, GPA: ${studentGpa.toFixed(1)}`;
        studentList.appendChild(li);
        studentCount++;
        studentCountSpan.textContent = studentCount;

        // Add toggle select functionality
        li.addEventListener('click', function () {
            li.classList.toggle('selected');
        });

        // Clear input fields
        studentNameInput.value = '';
        studentIdInput.value = '';
        studentGpaInput.value = '';
    });

    // Remove selected students from the roster
    removeStudentButton.addEventListener('click', function () {
        const selectedStudents = document.querySelectorAll('.selected');
        selectedStudents.forEach(function (student) {
            student.remove();
            studentCount--;
        });
        studentCountSpan.textContent = studentCount;
    });
});
// Examples from the JavaScript Intro Video

// Example of querySelector to grab an element
let button = document.querySelector('#add-btn');
console.log(button); // Logs the button element to the console

// Example of event handling with querySelector
button.addEventListener('click', function() {
    alert('Button was clicked!');
});

// Example of a callback function
function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 1000);
}

function processData() {
    console.log('Processing data...');
}

fetchData(processData); // fetchData calls processData as a callback after fetching data
