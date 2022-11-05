let a = null;
let b = null;
let operation = null;
let displayValue = "";

/* assignValue = function() {
   if (a == null) {
    a = parseFloat(displayValue);
    displayValue = "";
  }
  else {
    if ((a || a==0) && displayValue) {
      b = parseFloat(displayValue);
      a = operation(a,b);
      displayValue = ""+a;
      updateValue();
      operation = null;
      b = null;
      displayValue = "";
    }
    else if (a && !displayValue) {
      return;
    }
    else {
      if (!displayValue) {
        clear();
        displayValue = "Error";
        updateValue();
        displayValue = "";
      }
      a = parseFloat(displayValue);
      displayValue = "";
    }
  }
} */

assignValue = function() {
  
}

function updateValue() {
  let tenDigitHolder = "";
  let displayValueStr = ""+displayValue;
  if ((displayValueStr).length > 10) {
    for (i = 0; i < 10; i++) {
      tenDigitHolder += (displayValueStr[i]);
    }
    if (displayValueStr[10] >= 5) {
      tenDigitHolder[9] = parseFloat(tenDigitHolder[9]) + 1;
      tenDigitHolder = ""+tenDigitHolder;
    }
    document.getElementsByClassName("display")[0].innerText = "";
    //insert 500ms delay here.
    document.getElementsByClassName("display")[0].innerText = tenDigitHolder;
  }
  else {
    document.getElementsByClassName("display")[0].innerText = "";
    //insert 500ms delay here.
    document.getElementsByClassName("display")[0].innerText = displayValue;
  }
}

const addBtn = document.querySelector("#add");
addBtn.addEventListener('click', () => {
  if (displayValue == "") {
    displayValue = "0";
  }
  
  if (operation == null) {
    operation = add;
    assignValue();
  }
  else {
    assignValue();
    operation = add;
  }
})  

const divBtn = document.querySelector("#divide");
divBtn.addEventListener('click', () => {
  if (displayValue == "") {
    displayValue = "0";
  }
  
  if (operation == null) {
    operation = divide;
    assignValue();
  }
  else {
    assignValue();
    operation = divide;
  }
}) 

const subBtn = document.querySelector("#subtract");
subBtn.addEventListener('click', () => {
  if (displayValue == "") {
    displayValue = "0";
  }
  
  if (operation == null) {
    operation = subtract;
    assignValue();
  }
  else {
    assignValue();
    operation = subtract;
  }
}) 

const multBtn = document.querySelector("#multiply");
multBtn.addEventListener('click', () => {
  if (displayValue == "") {
    displayValue = "0";
  }
  
  if (operation == null) {
    operation = multiply;
    assignValue();
  }
  else {
    assignValue();
    operation = multiply;
  }
}) 

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener('click', () => {
  assignValue();
})

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', () => {
  clear();
})

//Math Operator functions

add = function(a, b) {
  return a + b;
};

subtract = function(a, b) {
return a - b;
};

multiply = function(a, b) {
return a * b;
};

divide = function(a, b) {
if (b == 0) {
  return "Bozo";
}
else return a / b;
};

function clear() {
  a = null;
  b = null;
  operation = null;
  displayValue = "";
  updateValue();
}

const oneBtn = document.querySelector("#one");
oneBtn.addEventListener('click', () => {
  displayValue += 1;
  updateValue();
});

const twoBtn = document.querySelector("#two");
twoBtn.addEventListener('click', () => {
  displayValue += 2;
  updateValue();
});

const threeBtn = document.querySelector("#three");
threeBtn.addEventListener('click', () => {
  displayValue += 3;
  updateValue();
});

const fourBtn = document.querySelector("#four");
fourBtn.addEventListener('click', () => {
  displayValue += 4;
  updateValue();
});

const fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener('click', () => {
  displayValue += 5;
  updateValue();
});

const sixBtn = document.querySelector("#six");
sixBtn.addEventListener('click', () => {
  displayValue += 6;
  updateValue();
});

const sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener('click', () => {
  displayValue += 7;
  updateValue();
});

const eightBtn = document.querySelector("#eight");
eightBtn.addEventListener('click', () => {
  displayValue += 8;
  updateValue();
});

const nineBtn = document.querySelector("#nine");
nineBtn.addEventListener('click', () => {
  displayValue += 9;
  updateValue();
});

const zeroBtn = document.querySelector("#zero");
zeroBtn.addEventListener('click', () => {
  displayValue += 0;
  updateValue();
});

const periodBtn = document.querySelector("#period");
periodBtn.addEventListener('click', () => {
  if (!(displayValue.includes("."))) {
    displayValue += ".";
    updateValue();
    }
});

