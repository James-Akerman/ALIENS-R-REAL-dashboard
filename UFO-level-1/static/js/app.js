// from data.js
var tableData = data;

// PART 1 - Display the table
var tbody = d3.select("tbody");
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// PART 2 - Form filter
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("form");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
// Prevent the page from refreshing
   d3.event.preventDefault();

// Clear all the previous html
d3.select("tbody").html("");
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter( filtered_data => filtered_data.datetime === inputValue);

  // Return the filtered table
  console.log(filteredData)
  var tbody = d3.select("tbody");
  filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};