//created with love by t&yim
const numberBtn = document.querySelectorAll('.data-number');
const operatorBtn = document.querySelectorAll('.dataoperator');
const equalsBtn = document.getElementById('equals');
const deleteBtn = document.getElementById('del');
const clearBtn = document.getElementById('clear');
const previousOutputBtn = document.querySelector('.previous-output');
const currentOutputBtn = document.querySelector('.current-output');

const calculator = {
  firstOperand: 0,
  secondOperand: 0,
  operator: '',
};
//event listener for add button
equalsBtn.addEventListener('click', () => {
  let temp;
  if (calculator.operator !== '' && currentOutputBtn.innerHTML !== '') {
    if (calculator.operator === '+') {
      calculator.secondOperand = parseFloat(currentOutputBtn.innerHTML);
      temp = calculator.firstOperand + calculator.secondOperand;
    } else if (calculator.operator === '-') {
      calculator.firstOperand -= parseFloat(currentOutputBtn.innerHTML);
      temp = calculator.firstOperand;
    } else if (calculator.operator === '/') {
      if (currentOutputBtn.innerHTML === '0') {
        alert('division by zero error');
        temp = 0;
      } else {
        calculator.firstOperand /= parseFloat(currentOutputBtn.innerHTML);
        temp = calculator.firstOperand;
      }
    } else {
      calculator.firstOperand *= parseFloat(currentOutputBtn.innerHTML);
      temp = calculator.firstOperand;
    }
  }
  clearTextBox();
  currentOutputBtn.innerHTML = temp;
});

const operation = (operator) => {
  if (currentOutputBtn.innerHTML === '') {
    return;
  } else {
    if (calculator.operator !== '') {
      switch (calculator.operator) {
        case '+':
          calculator.firstOperand += parseFloat(currentOutputBtn.innerHTML);
          break;
        case '-':
          calculator.firstOperand -= parseFloat(currentOutputBtn.innerHTML);
          break;
        case 'x':
          calculator.firstOperand *= parseFloat(currentOutputBtn.innerHTML);
          break;
        case '/':
          if (currentOutputBtn.innerHTML === '0') {
            alert('divizion by zero error');
          } else {
            calculator.firstOperand /= parseFloat(currentOutputBtn.innerHTML);
          }
          break;
        default:
          break;
      }
      calculator.operator = operator.innerHTML;
      previousOutputBtn.innerHTML = calculator.firstOperand + operator.innerHTML;
      currentOutputBtn.innerHTML = '';
    } else {
      calculator.firstOperand = parseFloat(currentOutputBtn.innerHTML);
      calculator.operator = operator.innerHTML;
      previousOutputBtn.innerHTML = calculator.firstOperand + operator.innerHTML;
      currentOutputBtn.innerHTML = '';
    }
  }
};
numberBtn.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.innerHTML === '.' && currentOutputBtn.innerHTML.includes('.')) {
      return;
    }
    currentOutputBtn.innerHTML += element.innerHTML;
  });
});
operatorBtn.forEach((element) => {
  element.addEventListener('click', () => {
    if (
      currentOutputBtn.innerHTML.includes('+') ||
      currentOutputBtn.innerHTML.includes('-') ||
      currentOutputBtn.innerHTML.includes('/') ||
      currentOutputBtn.innerHTML.includes('x')
    ) {
      return;
    }
    operation(element);
  });
});
const clearTextBox = () => {
  currentOutputBtn.innerHTML = '';
  previousOutputBtn.innerHTML = '';
  calculator.firstOperand = 0;
  calculator.secondOperand = 0;
  calculator.operator = '';
};
clearBtn.addEventListener('click', clearTextBox);
deleteBtn.addEventListener('click', () => {
  currentOutputBtn.innerHTML = currentOutputBtn.innerHTML.slice(
    0,
    currentOutputBtn.innerHTML.length - 1,
  );
});
