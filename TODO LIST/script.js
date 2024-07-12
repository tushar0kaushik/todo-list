const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

console.log('list wrrr')


function addTask(){
    if(inputbox.value === ''){
        alert("YOU MUST WRITE SOMETHING!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
}


if(listContainer){
    console.log('listcontainer',listContainer)
    listContainer.addEventListener("click", function(e){
    console.log('list wrking')
        if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagNmae === "SPAN"){
    e.target.parentElement.remove();
    }
    saveData();
} , false);
}
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');

}
showTask()