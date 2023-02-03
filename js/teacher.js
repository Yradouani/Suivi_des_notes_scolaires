let studentsCardsContent = document.querySelector("#students-cards-content");

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