// window.onload = function () {
//   // let type = document.getElementById("type");
//   // let date = document.getElementById("date");
//   // let grade = document.getElementById("grade");
//   // let comment = document.getElementById("comment");

// let modal = document.getElementById("modal");
// event.target.dataset.id

//   grades = document.getElementsByClassName("grades");

//   subjects = document.getElementsByClassName;

//   // for (let i = 0; i < grades.length; i++) {
//   //   console.log(grades[i]);
//   //   grades[i].addEventListener("click", addValues);
//   //   function addValues() {
//   //     grade.innerHTML = grades[i].innerHTML;
//   //   }
//   // }
//   //--------Query to JSON grades file to get informations to display in modals -------------

//   let userInfo = JSON.parse(localStorage.getItem("userInfo"));
//   let typeUser = userInfo.type;

//   // If user connected is a student

//   if (typeUser == "student") {
//     var xhr1 = new XMLHttpRequest();
//     let idStudent = userInfo.id;

//     xhr1.open("GET", "./server/grades.json", true);
//     xhr1.onreadystatechange = function () {
//       if (xhr1.readyState === 4 && xhr1.status === 200) {
//         var xmlDoc1 = JSON.parse(xhr1.response);

//         xmlDoc1.forEach((item) => {
//           for (let i = 0; i < grades.length; i++) {
//             if (
//               item.id_student == idStudent &&
//               item.value == grades[i].innerHTML &&
//               item.subject == grades[i].parentNode.parentNode.id
//             ) {
//               console.log(grades[i].innerHTML);
//               idJSON = item.id;
//               console.log(idJSON);
//               dateJSON = item.date;
//               console.log(dateJSON);
//               typeJSON = item.type;
//               commentJSON = item.comments;
//               grades[i].id = i;
//               modal.innerHTML = `
//               <div id="div${i}">
//               <div class="item">
//                     <span class="label">Type de l'évaluation</span>
//                     <span class="value" id="type"> ${item.type}</span>
//                 </div>
//                 <div class="item">
//                     <span class="label">Date</span>
//                     <span class="value" id="date"> ${item.date}</span>
//                </div>
//                 <div class="item">
//                     <span class="label">Ma note</span>
//                     <span class="value" id="grade"> ${grades[i].innerHTML}</span>
//                 </div>
//                 <div class="comment">
//                     <span class="label">Commentaire</span>
//                     <span class="value" id="comment">${item.comments}</span>
//                 </div>
//                 </div>`;
//             }
//           }
//         });
//       }
//     };
//     xhr1.send();
//   } // if teacher is connected
//   //  else if (typeUser == "teacher") {
//   //   var xhr2 = new XMLHttpRequest();

//   //   const urlParams = new URLSearchParams(window.location.search);
//   //   console.log(window.location.search);
//   //   const paramValue = urlParams.get("id");

//   //   xhr2.open("GET", "./server/grades.json", true);
//   //   xhr2.onreadystatechange = function () {
//   //     if (xhr1.readyState === 4 && xhr2.status === 200) {
//   //       var xmlDoc2 = JSON.parse(xhr2.response);
//   //       for (let k = 0; k < xmlDoc2.length; k++) {
//   //         if (xmlDoc2[k].id_student == paramValue) {
//   //           dateJSON = xmlDoc2[k].date;
//   //           typeJSON = xmlDoc2[k].type;
//   //           commentJSON = xmlDoc2[k].comments;
//   //         }
//   //       }
//   //     }
//   //   };
//   //   xhr2.send();
//   // }
// };
