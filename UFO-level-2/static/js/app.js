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
// Select the filter button
var button = d3.select("#filter-btn");
// Select the reset button
var reset_button = d3.select("#reset-btn");

// Select the form
// var form = d3.select("form");
// Create event handlers 
button.on("click", filterRows);
// form.on("submit",filterRows);
reset_button.on("click", resetTable);

function filterRows() {
// Prevent the page from refreshing
   d3.event.preventDefault();

// Clear all the previous html
d3.select("tbody").html("");
  
  // Select the input element and get the raw HTML node
  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");

  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");


  if (inputValueDate === "" || inputValueCity === "" || inputElementState === "" || inputElementCountry === "" || inputElementShape === ""){

    var filteredData = tableData.filter( filtered_data => filtered_data.datetime === inputValueDate || filtered_data.city === inputValueCity ||
      filtered_data.state === inputValueState || filtered_data.country === inputValueCountry || filtered_data.shape === inputValueShape );
  }
  else{

    var filteredData = tableData.filter( filtered_data => filtered_data.datetime === inputValueDate && filtered_data.city === inputValueCity &&
      filtered_data.state === inputValueState && filtered_data.country === inputValueCountry && filtered_data.shape === inputValueShape );
  }

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


function resetTable(){
  // Clear all the previous html
d3.select("tbody").html("");
var tbody = d3.select("tbody");
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
