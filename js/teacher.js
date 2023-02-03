let studentsCardsContent = document.querySelector("#students-cards-content");
let deconnectionBtn = document.querySelector("#logoutBtn");

var xhr = new XMLHttpRequest();
xhr.open("GET", "../server/students.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var xmlDoc = JSON.parse(xhr.response);
        console.log(xmlDoc);

        for (let i = 0; i < xmlDoc.length; i++) {
            console.log(xmlDoc[i].picture)
            studentsCardsContent.innerHTML += `
            <div class="card">
                <img src=${xmlDoc[i].picture} alt="">
                <span class="name">${xmlDoc[i].firstname} ${xmlDoc[i].lastname}</span>
                <div class="btn-container">
                    <button class="add-btn">Ajouter une note</button>
                    <button class="grade-btn"><a href="../student.html">Voir le bulletin</a></button>
                </div>
            </div>
            `
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
                        <button id="logoutBtn">
                            <i class="bi bi-x-circle-fill text-danger" class="img-fluid"
                                style="font-size:50px"></i>
                        </button>
                        `
            }
        }

    }
};
xhr1.send();

// --------------Deconnection------------------
deconnectionBtn.addEventListener("click", () => {
    localStorage.removeItem('userInfo');
    window.location.href = "../index.html";
})