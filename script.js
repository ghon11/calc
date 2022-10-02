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

operate = function(a, b, currentIndex) {
  a=parseInt(a);
  b=parseInt(b);
  return opArray[currentIndex-1](a,b);
}

function updateValue() {
  document.getElementsByClassName("display")[0].innerText = displayValue;
}

let displayValue = "";
let numCount = 0;
let opCount = 0;
let numArray = [];
let opArray = [];

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
  numCount = numArray.push(displayValue);
  opCount = opArray.push(add);
  displayValue = "";
})  

const divBtn = document.querySelector("#divide");
divBtn.addEventListener('click', () => {
  numCount = numArray.push(displayValue);
  opCount = opArray.push(divide);
  displayValue = "";
}) 

const subBtn = document.querySelector("#subtract");
subBtn.addEventListener('click', () => {
  numCount = numArray.push(displayValue);
  opCount = opArray.push(subtract);
  displayValue = "";
}) 

const multBtn = document.querySelector("#multiply");
multBtn.addEventListener('click', () => {
  numCount = numArray.push(displayValue);
  opCount = opArray.push(multiply);
  displayValue = "";
}) 

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener('click', () => {
  numCount = numArray.push(displayValue);
  displayValue = numArray.reduce(operate);
  updateValue();
  numArray = [];
  opArray = [];
  displayValue="";
})

