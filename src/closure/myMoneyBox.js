/* function moneyBox (coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`Tienes en MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5); */

function moneyBox () {
  let saveCoins = 0;

  function countCoins (coins) {
    saveCoins += coins;
    console.log(`Tienes en Money Box: $${saveCoins}`);
  }

  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);

const myMoneyBoxDaniel = moneyBox();
myMoneyBoxDaniel(15);
myMoneyBoxDaniel(15);