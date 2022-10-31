//Math Operator functions

add = function(a, b) {
    if (a == null) {
      a = 0;
    }
    return a + b;
};

subtract = function(a, b) {
  if (a == null) {
    a = 0;
  }
  return a - b;
};

multiply = function(a, b) {
  if (a == null) {
    a = 0;
  }
  return a * b;
};

divide = function(a, b) {
  if (a == null) {
    a = 0;
  }
  else if (b == 0) {
    return "Bozo";
  }
  return a / b;
};

let a = null;
let b = null;
let operation = null;
let nextOperation = null;
let lastButtonWasOperator = false;

assignValue = function(nextNumber, operator) {
  if (typeof(a) == "number") {
    operation = nextOperation;
    nextOperation = operator;
    if (nextNumber) {
      b = parseFloat(nextNumber);
    }
    a = operation(a,b);
    displayValue = a;
    updateValue();
    displayValue = "";
  }
  else if (a == null) {
    a = parseFloat(nextNumber);
    nextOperation = operator;
    displayValue = "";
  }
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
      console.log(`TDH: ${tenDigitHolder}`);
    }
    document.getElementsByClassName("display")[0].innerText = tenDigitHolder;
  }
  else {
    document.getElementsByClassName("display")[0].innerText = displayValue;
  }
}

function clear() {
  a = null;
  b = null;
  operation = null;
  nextOperation = null;
  displayValue = "";
  updateValue();
}

let displayValue = "";

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
  displayValue += ".";
  updateValue();
});

const addBtn = document.querySelector("#add");
addBtn.addEventListener('click', () => {
  assignValue(displayValue, add);
})  

const divBtn = document.querySelector("#divide");
divBtn.addEventListener('click', () => {
  assignValue(displayValue, divide);
}) 

const subBtn = document.querySelector("#subtract");
subBtn.addEventListener('click', () => {
  assignValue(displayValue, subtract);
}) 

const multBtn = document.querySelector("#multiply");
multBtn.addEventListener('click', () => {
  assignValue(displayValue, multiply);
}) 

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener('click', () => {
  assignValue(displayValue, "equals");
})

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', () => {
  clear();
})

