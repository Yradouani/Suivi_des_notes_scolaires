// window.onload = function () {
console.log("Page chargée");
let type = document.getElementById("type");
let date = document.getElementById("date");
let grade = document.getElementById("grade");
let comment = document.getElementById("comment");

let grades = document.querySelectorAll(".grades");
console.log(grades);
console.log(grades.length);
for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);
  grades[i].addEventListener("click", addValues);
  function addValues() {
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "./server/grades.json", true);
    xhr1.onreadystatechange = function () {
      if (xhr1.readyState === 4 && xhr1.status === 200) {
        var xmlDoc1 = JSON.parse(xhr1.response);
        xmlDoc1.forEach((item) => {
          if (item.id == grades[i].dataset.id) {
            type.innerHTML = item.type;
            date.innerHTML = item.date;
            grade.innerHTML = item.value;
            comment.innerHTML = item.comments;


            // Delete grade
            let deleteBtn = document.querySelector(".delete-grade-btn");

            deleteBtn.addEventListener("click", () => {
              fetch("http://127.0.0.1:8000/json.php",
                {
                  method: "POST",
                  headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
                  body: "id=" + grades[i].dataset.id + "&delete=true"
                }).then((res) => {
                  console.log(res)
                }).catch((err) => {
                  console.log(err)
                })
            })
          }
        });
      }
    };
    xhr1.send();
  }
}
// };

// window.onload = function () {
//   let type = document.getElementById("type");
//   let date = document.getElementById("date");
//   let grade = document.getElementById("grade");
//   let comment = document.getElementById("comment");

//   let grades = document.querySelectorAll(".grades");
//   console.log(grades.length);

//   for (let i = 0; i < grades.length; i++) {
//     console.log(grades[i]);
//     grades[i].addEventListener("click", addValues);
//     function addValues() {
      // type.innerHTML = grades[i].dataset.id;
      // console.log(grades[i]);
      // var xhr1 = new XMLHttpRequest();
      // xhr1.open("GET", "./server/grades.json", true);
      // xhr1.onreadystatechange = function () {
      //   if (xhr1.readyState === 4 && xhr1.status === 200) {
      //     var xmlDoc1 = JSON.parse(xhr1.response);
      //     xmlDoc1.forEach((item) => {
      //       if (item.id == grades[i].dataset.id) {
      //         type.innerHTML = item.type;
      //         date.innerHTML = item.date;
      //         grade.innerHTML = item.value;
      //         comment.innerHTML = item.comments;


              // Delete grade
              // let deleteBtn = document.querySelector(".delete-grade-btn");

              // deleteBtn.addEventListener("click", () => {
              //   fetch("http://127.0.0.1:8000/json.php",
              //     {
              //       method: "POST",
              //       headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
              //       body: "id=" + grades[i].dataset.id + "&delete=true"
              //     }).then((res) => {
              //       console.log(res)
              //     }).catch((err) => {
              //       console.log(err)
              //     })
              // })
//             }
//           });

//         }
//       };
//       xhr1.send();
//     }
//   }
// };
