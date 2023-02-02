let connectTeacherBtn = document.querySelector("#connect-teacher-btn");
let connectStudentBtn = document.querySelector("#connect-student-btn");

// ---------------Connexion du professeur----------------------
connectTeacherBtn.addEventListener("click", () => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../teachers.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xmlDoc = xhr.response;
            console.log(xmlDoc);
        }
    };
    xhr.send();
})

// ---------------Connexion de l'élève----------------------
connectStudentBtn.addEventListener("click", () => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../server/students.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xmlDoc = xhr.response;
            console.log(xmlDoc);
        }
    };
    xhr.send();
})