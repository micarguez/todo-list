
// Get all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; // Getting user entered value
    if(userData.trim() != 0){ // User values different than only spaces
        addBtn.classList.add("active"); // Activate the add button
    }else{
        addBtn.classList.remove("active"); // Deactivate the add button
    }
}
