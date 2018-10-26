// event listeners
document.getElementById("enter").onclick = addStudent;
document.getElementById("retrieve").onclick = retrieve;

// global variables
let form = document.getElementById("att");
let student = document.getElementById("studentInput").value;
let ul = document.querySelector("#studentParent");

let studentList = [];

// press enter to submit the form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  addStudent();
  document.getElementById("studentInput").value = "";
});


// when user press enter, grab input, push to the list
function addStudent() {
  let student = document.getElementById("studentInput").value;
  let text = document.createTextNode(student);
  let li = document.createElement("li");

  let item = li.appendChild(text);
  studentList.push(item)
}

// when user press retrieve, append studentList to UL
function retrieve() {
  for (var i = 0; i < studentList.length; i++) {
    let text = document.createTextNode(student);
    let li = document.createElement("li");
    let item = li.appendChild(studentList[i]);
    ul.appendChild(li)

  }
}



