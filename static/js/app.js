// from data.js
var tableData = data;

//Create a string of table rows from the tableData and assign it to the html table
document.getElementById("ufo-table-rows").innerHTML = tableData.map(row => `<tr><td>${row['datetime']}</td><td>${row['city']}</td><td>${row['state']}</td>
</td><td>${row['country']}</td></td><td>${row['shape']}</td><td>${row['durationMinutes']}</td><td>${row['comments']}</td>`).join("")
