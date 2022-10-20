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

divide = function(a, b,) {
    return a / b;
};

/* operate = function(a, b, currentIndex) {
  a=parseInt(a);
  b=parseInt(b);
  return opArray[currentIndex-1](a,b);
} */

let a = null;
let b = null;
let operation = null;
let nextOperation = null;


assignValue = function(nextNumber, operator) {
  if (typeof(a) == "number") {
    operation = nextOperation;
    nextOperation = operator;
    b = parseInt(nextNumber);
    a = operation(a,b);
    displayValue = a;
    updateValue();
    displayValue = "";
  }
  else if (a == null) {
    a = parseInt(nextNumber);
    nextOperation = operator;
    displayValue = "";
  }

  if (nextOperation == "equals") {
    displayValue = a;
    updateValue();
  }

}

function updateValue() {
  document.getElementsByClassName("display")[0].innerText = displayValue;
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
  updateValue();
})

