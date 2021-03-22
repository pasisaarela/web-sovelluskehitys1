// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

function removeDuplicates() {
    'use strict';

  //  console.log(tasks);

    const uniqueArray = [... new Set(tasks)];
  //  console.log(uniqueArray);

    tasks = [...uniqueArray];

    // For the output:
    var message = '';

        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;



    // End of task.value IF.



    // var tasks = {...uniqueArray};
    /*

      // For the output:
      var message = '';

      if (task.value) {

      // Update the page:
      message = '<h2>To-Do</h2><ol>';
      for (var i = 0, count = tasks.length; i < count; i++) {
          message += '<li>' + tasks[i] + '</li>';
      }
      message += '</ol>';
      output.innerHTML = message;

  } // End of task.value IF.

  */
    // Return false to prevent submission:
    return false;

}



// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
    document.getElementById('scanForm').onsubmit = removeDuplicates;
} // End of init() function.

function scan() {
    'use strict';
    document.getElementById('scanForm').onsubmit = removeDuplicates;
}


window.onload = init;