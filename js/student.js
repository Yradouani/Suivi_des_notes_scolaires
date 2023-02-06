//--------Displaying student picture--------------

let userInfo = JSON.parse(localStorage.getItem("userInfo"));
let typeUser = userInfo.type;

console.log(typeUser);

// Student datas displayed if user connected is a student

if (typeUser == "student") {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./server/students.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var xmlDoc = JSON.parse(xhr.response);

      console.log(userInfo);
      for (let i = 0; i < xmlDoc.length; i++) {
        if (xmlDoc[i].id == userInfo.id) {
          // displaying name and picture of the student
          document.querySelector("#picAndLogout").innerHTML += `
                        <img src=${xmlDoc[i].picture} alt="student picture" class="img-fluid rounded-circle">
                        <div id="name-content">${xmlDoc[i].firstname} ${xmlDoc[i].lastname}</div>`;

          document.querySelector("h1").innerHTML = `Bulletin de ${xmlDoc[i].firstname} ${xmlDoc[i].lastname}`
        }
      }
    }
  };
  xhr.send();
  let idStudent = userInfo.id;
  console.log(idStudent);

  // Displaying school report
  let studentReport = document.querySelector("#studentReport");
  var xhr1 = new XMLHttpRequest();

  xhr1.open("GET", "./server/grades.json", true);
  xhr1.onreadystatechange = function () {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
      var xmlDoc1 = JSON.parse(xhr1.response);
      // console.log(xmlDoc1);

      let mathGrades = [];
      let historyGrades = [];
      let englishGrades = [];
      let physiqueGrades = [];
      let frenchGrades = [];
      let coefmath = null;
      let coeffrench = null;
      let coefenglish = null;
      let coefphysique = null;
      let coefhistory = null;
      for (let i = 0; i < xmlDoc1.length; i++) {
        // console.log(xmlDoc1[i].value);
        if (xmlDoc1[i].id_student == idStudent) {
          // if (i % 2 == 0) {


          switch (xmlDoc1[i].subject) {
            case 'Mathématiques':
              mathGrades.push(xmlDoc1[i].value)
              if (!coefmath) {
                document.querySelector(".maths").innerHTML += `<td class="coef-content-math"></td>`;
                coefmath = true
              }
              document.querySelector(".coef-content-math").innerHTML += `${xmlDoc1[i].coef}`
              break;
            case 'Histoire':
              historyGrades.push(xmlDoc1[i].value)
              if(!coefhistory){
                document.querySelector(".history").innerHTML += `<td class="coef-content-history"></td>`;
                coefhistory = true
              }
              document.querySelector(".coef-content-history").innerHTML += `${xmlDoc1[i].coef}`
              break;
            case 'Anglais':
              englishGrades.push(xmlDoc1[i].value)
              break;
            case 'Physique':
              physiqueGrades.push(xmlDoc1[i].value)
              break;
            case 'Français':
              frenchGrades.push(xmlDoc1[i].value)
              break;
            default:
              console.log(`Sorry, we are out of ${expr}.`);
          }
        }
      }
      let tdMath = null
      for (let j = 0; j < mathGrades.length; j++) {
        if (!tdMath) {
          document.querySelector(".maths").innerHTML += `<td class="grade-content"></td>`;
          tdMath = true;
        }
        document.querySelector(".grade-content").innerHTML += `<button>${mathGrades[j]}</button>`
      }
      for (let j = 0; j < frenchGrades.length; j++) {
        document.querySelector(".french").innerHTML += `<button>${frenchGrades[j]}</button>`
      }
      for (let j = 0; j < englishGrades.length; j++) {
        document.querySelector(".english").innerHTML += `<button>${englishGrades[j]}</button>`
      }
      for (let j = 0; j < physiqueGrades.length; j++) {
        document.querySelector(".physique").innerHTML += `<button>${physiqueGrades[j]}</button>`
      }
      for (let j = 0; j < historyGrades.length; j++) {
        document.querySelector(".history").innerHTML += `<button>${historyGrades[j]}</button>`
      }
    }
  };
  xhr1.send();

  // Displaying student datas if teacher is connected
} else if (typeUser == "teacher") {
  var xhr2 = new XMLHttpRequest();
  xhr2.open("GET", "../teachers.json", true);
  xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
      var xmlDoc2 = JSON.parse(xhr2.response);
      console.log(xmlDoc2);

      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      console.log(userInfo);
      for (let i = 0; i < xmlDoc2.length; i++) {
        if (xmlDoc2[i].id == userInfo.id) {
          // displaying teacher picture and name on header
          document.querySelector("#picAndLogout").innerHTML += `
                          <img src=${xmlDoc2[i].picture} alt="student picture" class="img-fluid rounded-circle">
                          <div id="name-content">${xmlDoc2[i].firstname} ${xmlDoc2[i].lastname}</div>
                          `;
        }
      }
    }
  };
  xhr2.send();

  // Displaying school report of the student
  let studentReport = document.querySelector("#studentReport");
  var xhr3 = new XMLHttpRequest();
  const urlParams = new URLSearchParams(window.location.search);
  console.log(window.location.search)
  const paramValue = urlParams.get("id");
  console.log(paramValue);

  xhr3.open("GET", "../server/grades.json", true);
  xhr3.onreadystatechange = function () {
    if (xhr3.readyState === 4 && xhr3.status === 200) {
      var xmlDoc3 = JSON.parse(xhr3.response);
      console.log(xmlDoc3);

      for (let i = 0; i < xmlDoc3.length; i++) {
        // console.log(JSON.stringify(xmlDoc1[i].id_student));
        if (JSON.stringify(xmlDoc3[i].id_student) == paramValue) {
          if (i % 2 == 0) {
            studentReport.innerHTML += `
              <tr class="pinkLine">
              <th scope="row">${xmlDoc3[i].subject}</th>
              <td class="type_eval_coef">${xmlDoc3[i].type}</td>
              <td class="average">(moyenne à calculer)</td>
              <td class="marks">${xmlDoc3[i].value}</td>
              <td class="graph_link"> <a href=""><img src="./assets/stats.jpg" alt="graph_link"
                          width="70"></a></td>
          </tr>
                  `;
          } else {
            studentReport.innerHTML += `
                  <tr class="whiteLine">
                  <th scope="row">${xmlDoc3[i].subject}</th>
                  <td class="type_eval_coef">${xmlDoc3[i].type}</td>
                  <td class="average">(moyenne à calculer)</td>
                  <td class="marks">${xmlDoc3[i].value}</td>
                  <td class="graph_link"> <a href=""><img src="./assets/stats.jpg" alt="graph_link"
                              width="70"></a></td>
              </tr>
                      `;
          }
        }
      }

      // Display student name on h1
      var xhr4 = new XMLHttpRequest();
      xhr4.open("GET", "../server/students.json", true);
      xhr4.onreadystatechange = function () {
        if (xhr4.readyState === 4 && xhr4.status === 200) {
          console.log("Salut")
          var xmlDoc4 = JSON.parse(xhr4.response);
          console.log(xmlDoc4);

          for (let i = 0; i < xmlDoc4.length; i++) {
            if (xmlDoc4[i].id == paramValue) {
              console.log("Salut")
              document.querySelector("h1").innerHTML = `Bulletin de ${xmlDoc4[i].firstname} ${xmlDoc4[i].lastname}`
            }
          }
        };
      }
      xhr4.send();
    };
  }
  xhr3.send();
}



// --------------Logout------------------
let deconnectionBtn = document.querySelector("#logoutBtn");

deconnectionBtn.addEventListener("click", () => {
  localStorage.removeItem("userInfo");
  window.location.href = "../index.html";
});
