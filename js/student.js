//--------Displaying student picture--------------

let userInfo = JSON.parse(localStorage.getItem("userInfo"));
let typeUser = userInfo.type;
console.log(typeUser);

if (typeUser == "student") {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../server/students.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var xmlDoc = JSON.parse(xhr.response);

      console.log(userInfo);
      for (let i = 0; i < xmlDoc.length; i++) {
        if (xmlDoc[i].id == userInfo.id) {
          document.querySelector("#picAndLogout").innerHTML += `
                        <img src=${xmlDoc[i].picture} alt="student picture" class="img-fluid rounded-circle">
                        <div id="name-content">${xmlDoc[i].firstname} ${xmlDoc[i].lastname}</div>`;
        }
      }
    }
  };
  xhr.send();
} else if (typeUser == "teacher") {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../teacher.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var xmlDoc = JSON.parse(xhr.response);

      console.log(userInfo);
      for (let i = 0; i < xmlDoc.length; i++) {
        if (xmlDoc[i].id == userInfo.id) {
          document.querySelector("#picAndLogout").innerHTML += `
                        <img src=${xmlDoc[i].picture} alt="student picture" class="img-fluid rounded-circle">
                        <div id="name-content">${xmlDoc[i].firstname} ${xmlDoc[i].lastname}</div>`;
        }
      }
    }
  };
  const urlParams = new URLSearchParams(window.location.search);
  const paramValue = urlParams.get("paramName");
  xhr.send();
}

// --------------Logout------------------
let deconnectionBtn = document.querySelector("#logoutBtn");

deconnectionBtn.addEventListener("click", () => {
  localStorage.removeItem("userInfo");
  window.location.href = "../index.html";
});

// ----------Display grades ------------------

let studentMarks = document.querySelector(".marks");

// var xhr1 = new XMLHttpRequest();
// xhr1.open("GET", "../server/students.json", true);
// xhr1.onreadystatechange = function () {
//   if (xhr1.readyState === 4 && xhr.status === 200) {
//     var xmlDoc = JSON.parse(xhr.response);
//     console.log(xmlDoc);

//     for (let i = 0; i < xmlDoc.length; i++) {
//       console.log(xmlDoc[i].value);
//       studentMarks.innerHTML += `
//             <div class="cards">
//                 <img src=${xmlDoc[i].picture} alt="">
//                 <span class="name">${xmlDoc[i].firstname} ${xmlDoc[i].lastname}</span>
//                 <div class="btn-container">
//                     <button class="add-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ajouter une note</button>
//                     <button class="grade-btn"><a href="../student.html">Voir le bulletin</a></button>
//                 </div>
//             </div>
//             `;
//     }
//   }
// };
// xhr1.send();
