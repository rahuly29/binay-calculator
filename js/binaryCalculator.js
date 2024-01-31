document.addEventListener("DOMContentLoaded", function () {
    // Function to update the result div
    function updateResult() {
      var expression = document.getElementById("res").innerText;
      var result = eval(expression);
      document.getElementById("res").innerText = result ;
    }

    // Function to handle button clicks
    function buttonClick(value) {
      if (value === "C") {
        document.getElementById("res").innerText = "";
      } else if (value === "=") {
        updateResult();
      } else {
        document.getElementById("res").innerText += value;
      }
    }

    // Attach click event listeners to the buttons
    var buttons = document.querySelectorAll("#btns button");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttonClick(button.innerText);
      });
    });
  });