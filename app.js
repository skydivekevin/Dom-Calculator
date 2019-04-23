document.addEventListener('DOMContentLoaded', function(){
  let equalsButton = document.getElementById("equals")
  let spans = document.querySelectorAll("span")
  let screenDisplay = document.getElementById("screen")
  let buttonsArray = document.getElementById("buttons-container");
  let clearButton = document.getElementById("clear");

  equalsButton.addEventListener('click', function() {
      screenDisplay.innerHTML = validateExpression(screenDisplay.innerHTML);
      screenDisplay.innerHTML = eval(screenDisplay.innerHTML);
    });

  clearButton.addEventListener('click', function() {
    screenDisplay.innerHTML = "";
    return screenDisplay;
  });

  for( let i = 0; i < spans.length; i++ ) {
    spans[i].addEventListener('click', function() {
      let num = this.innerHTML;
      if ( num != "C" && num != "=") {
        screenDisplay.innerHTML += num;
      }
    });
  };

  function validateExpression(expression) {
      expression = expression.replace(/÷/, "/")
      expression = expression.replace(/x/i, "*")
      return expression
  }

})
