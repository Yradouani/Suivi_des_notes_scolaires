window.onload = function () {
  let type = document.getElementById("type");
  let date = document.getElementById("date");
  let grade = document.getElementById("grade");
  let comment = document.getElementById("comment");

  let grades = document.querySelectorAll(".grades");
  console.log(grades.length);

  for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
    grades[i].addEventListener("click", addValues);
    function addValues() {
      // type.innerHTML = grades[i].dataset.id;
      // console.log(grades[i]);
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
}

// MODAL GRAPH INDIVIDUEL
const ctx = document.getElementById('myChart');
const chart = document.querySelectorAll(".chartButton");
console.log(chart);
let graphik = new Chart();

const subjectToColor = {
  "Mathématiques": "red",
  "Histoire": "blue",
  "Anglais": "green",
  "Physique": "purple",
  "Français": "yellow"
};
fetch('./server/grades.json')
  .then(response => response.json())
  .then(data => {
    //---------pour une valeur défini 

    for (let i = 0; i < chart.length; i++) {
      console.log(chart);
      chart[i].addEventListener("click", graph);
      function graph() {
        const labels = [];
        const values = [];
        console.log(chart);
        data.filter(grade => grade.subject == chart[i].dataset.subject && grade.id_student == chart[i].dataset.student).forEach(grade => {
          console.log(chart[i].dataset.subject);
          labels.push(grade.subject);
          values.push(grade.value);
          console.log(chart);
        });
        
        graphik = Chart(ctx, {
          
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Notes',
              data: values,
              backgroundColor: labels.map(label => subjectToColor[label])
            }]

          },
          options: {

            scales: {
              xAxes: [{
                ticks: {
                  min: 0,
                  max: 20,
                  stepSize: 1
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          },
        });
      }

    }
   
    let closebtn = document.querySelector(".btn-close");
    closebtn.addEventListener("click", () => {
      graphik.destroy();
    })

  });  
