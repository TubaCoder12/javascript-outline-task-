const inputBox = document.getElementById("input-field");
const containerLi = document.getElementById("li-container");

function addTask() {
  if (inputBox.value == "") {
    alert("please add a task...");
  } else {
    const li = document.createElement("li");
    li.innerHTML = `${inputBox.value} <span class="Delete">x</span>`;
    containerLi.appendChild(li);
    saveData();
  }
  inputBox.value = "";
}

containerLi.addEventListener("click", function (e) {
  if (e.target.classList.contains("Delete")) {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("Data", containerLi.innerHTML);
}

function fetchData() {
  containerLi.innerHTML = localStorage.getItem("Data");
}
fetchData();
