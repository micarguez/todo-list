// Get all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; // Getting user entered value
    if(userData.trim() != 0){ // User values different than only spaces
        addBtn.classList.add("active"); // Activate the add button
    }else{
        addBtn.classList.remove("active"); // Deactivate the add button
    }
}

showTasks(); // Calls showTasks function

// If user clicks on the add button
addBtn.onclick = ()=>{
    let userData = inputBox.value; // Getting user entered value
    let getLocalStorage = localStorage.getItem("New to-do"); // Get localstorage
    if(getLocalStorage == null){ // If localStorage is null
        listArr = []; // Create empty array
    }else{
        listArr = JSON.parse(getLocalStorage); // Transform JSON string into a js object
    }
    listArr.push(userData); // Adding user data
    localStorage.setItem("New to-do", JSON.stringify(listArr)); // Transform js object into a JSON string
    showTasks(); // Calls showTasks function
    addBtn.classList.remove("active"); // Deactive the add button once the task was added
}   

// Add task list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New to-do"); // Get localstorage
    if(getLocalStorage == null){ // If localStorage is null
        listArr = []; // Create empty array
    }else{
        listArr = JSON.parse(getLocalStorage); // Transform JSON string into a js object
    }
    const pendingNumber = document.querySelector(".pendingNumber");
    pendingNumber.textContent = listArr.length; // Pass the length value to pending tasks number
    
    if(listArr.length > 0){ // If there are tasks
        deleteAllBtn.classList.add("active"); // Activate the clear all button
    }else{
        deleteAllBtn.classList.remove("active"); // Deactivate the clear all button
    }
    
    let newLiTag = "";
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span class="icon" onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
    });

    todoList.innerHTML = newLiTag; // Adds new li tag inside ul tag
    inputBox.value = ""; // After task was added clean the input field
}

// Delete task function

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New to-do");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); // Delete the indexed li
    // After the li element is removed, update the local storage
    localStorage.setItem("New to-do", JSON.stringify(listArr));
    showTasks(); // Calls showTasks function
}

// Delete all tasks function
deleteAllBtn.onclick = ()=> {
    listArr = [];
    // After all elements are removed, update the local storage
    localStorage.setItem("New to-do", JSON.stringify(listArr));
    showTasks(); // Calls showTasks function
}