let studentsCardsContent = document.querySelector("#students-cards-content");
let deconnectionBtn = document.querySelector("#logoutBtn");

var xhr = new XMLHttpRequest();
xhr.open("GET", "../server/students.json", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var xmlDoc = JSON.parse(xhr.response);
    console.log(xmlDoc);
    let lastId = xmlDoc[xmlDoc.length];
    console.log("le dernier id est : " + lastId);

    for (let i = 0; i < xmlDoc.length; i++) {
      console.log(xmlDoc[i].picture);
      let id = xmlDoc[i].id;
      console.log(id);
      studentsCardsContent.innerHTML += `
            <div class="cards">
                <img src=${xmlDoc[i].picture} alt="">
                <span class="name">${xmlDoc[i].firstname} ${xmlDoc[i].lastname}</span>
                <div class="btn-container">
                    <button class="add-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ajouter une note</button>
                    <button class="grade-btn">
                    <a href="../student.html?id=${id}">
                    Voir le bulletin
                    </a>
                    </button>
                </div>
            </div>`;
    }

    // Ajouter une note
    let addGradeButtons = document.querySelectorAll(".add-btn");
    console.log(addGradeButtons);
    for (let j = 0; j < addGradeButtons.length; j++) {
      console.log(addGradeButtons[j]);
      addGradeButtons[j].addEventListener("click", () => {
        let validateGradeBtn = document.querySelector(".add-grade-btn");
        validateGradeBtn.addEventListener("click", () => {
          let type = document.querySelector("#eval-choice");
          let subject = document.querySelector("#subject");
          let dateInput = document.querySelector("#date");
          let gradeInput = document.querySelector("#grade");
          let commentInput = document.querySelector("#comment");

          var xhr2 = new XMLHttpRequest();
          xhr2.open("GET", "../server/grades.json", true);
          xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4 && xhr2.status === 200) {
              var xmlGrade = JSON.parse(xhr2.response);
              var gradesNumber = xmlGrade.length;

              let gradeInfo = {
                id: gradesNumber + 1,
                value: gradeInput.value,
                date: dateInput.value,
                type: type.value,
                coef: type.value == "oral" ? "1" : "2",
                id_student: j + 1,
                subject: subject.value,
                comments: commentInput.value,
              };

              // Envoi de la requête au serveur
              fetch("http://127.0.0.1:8000/json.php", {
                method: "POST",
                headers: {
                  "Content-type":
                    "application/x-www-form-urlencoded; charset=UTF-8",
                },
                body: "content=" + JSON.stringify(gradeInfo) + "&create=true",
              })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          };
          xhr2.send();
        });
      });
    }
  }
};
xhr.send();

// Affichage de la photo du professeur dynamiquement
var xhr1 = new XMLHttpRequest();
xhr1.open("GET", "../teachers.json", true);
xhr1.onreadystatechange = function () {
  if (xhr1.readyState === 4 && xhr1.status === 200) {
    var xmlDoc = JSON.parse(xhr1.response);

    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    for (let i = 0; i < xmlDoc.length; i++) {
      if (xmlDoc[i].id == userInfo.id) {
        document.querySelector("#picAndLogout").innerHTML += `
                        <img src=${xmlDoc[i].picture} alt="student picture" class="img-fluid rounded-circle">
                        <div id="name-content">${xmlDoc[i].firstname} ${xmlDoc[i].lastname}</div>
                        `;
      }
    }
  }
};
xhr1.send();

// --------------Deconnection------------------
deconnectionBtn.addEventListener("click", () => {
  localStorage.removeItem("userInfo");
  window.location.href = "../index.html";
});

// Voir le bulletin de l'élève
let watchGradeButtons = document.querySelectorAll(".grade-btn");

for (let j = 0; j < watchGradeButtons.length; j++) {
  watchGradeButtons[j].addEventListener("click", () => {
    console.log("coucou");
  });
}