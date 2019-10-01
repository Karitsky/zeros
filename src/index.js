module.exports = function zeros(expression) {

  let allTogether = [];
  let single = []; // простые факториалы
  let double = []; // двойные факториалы
  allTogether = expression.split('*');

  // делим все факториалы на простые и двойные

  for (let i = 0; i < allTogether.length; i++) {
    let temp = allTogether[i];
    if (temp.charAt(temp.length - 2) !== '!') {
      single.push(temp.slice((temp.length - temp.length), (temp.length - 1)));
    } else {
      double.push(temp.slice((temp.length - temp.length), (temp.length - 2)));
    }
  }

  // умножаем простые факториалы

  let singleTotal = 1n;
  for (let i = 0; i < single.length; i++) {
    let singleResult = 1n;
    for (let j = 1n; j <= single[i]; j++) {
      singleResult *= j;
    }
    singleTotal *= singleResult;
  }

  // умножаем двойные факториалы

  let doubleTotal = 1n;
  for (let i = 0; i < double.length; i++) {
    let doubleResult = 1n;
    for (let j = (double[i] % 2 ? 1n : 2n); j <= double[i]; j++) {
      doubleResult *= j;
      j++;
    }
    doubleTotal *= doubleResult;
  }

    // умножаем простые факториалы на двойные факториалы

  let finalTotal = []
  finalTotal = String(doubleTotal * singleTotal).split('').reverse();

    // считаем нули

  let zeroesCounter = 0;
  for (let i = 0; i < finalTotal.length; i++) {
    if (finalTotal[i] === '0') {
      zeroesCounter += 1;
    } else {
      break;
    }
  }
  return zeroesCounter;
}
