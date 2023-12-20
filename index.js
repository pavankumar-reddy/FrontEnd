function toggleInnerDiv(boxNumber, innerDivId) {
  let selectedBox = 0;
  var innerDivs = document.querySelectorAll(".inner-div");

  // Hide all inner divs
  innerDivs.forEach(function (div) {
    div.style.display = "none";
  });

  // Show the selected inner div
  document.getElementById(innerDivId).style.display = "block";

  for (let i = 1; i <= 3; i++) {
    document.getElementById("box" + i).style.backgroundColor = "#FFF";
    document.getElementById("box" + i).style.border = " 1px solid #C8C8C8";
  }

  // Set the background color of the clicked box to red
  document.getElementById("box" + boxNumber).style.backgroundColor = "#F4FBF9";
  document.getElementById("box" + boxNumber).style.border = "2px solid #007F61";

  // Update the selected box
  selectedBox = boxNumber;
}
//
//  ;
