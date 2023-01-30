export default class Counter {
  constructor(money) {
   this.money = money;
  }

   convertMoneys() {
   const ourMoney = this.money;
   if (isNaN(ourMoney)) {
    return "Not a number";
   }
    const quarters = Math.round(ourMoney / .25);
    const dimes = Math.round((ourMoney - (quarters * .25)) / .10);
    const nickles = Math.round((ourMoney - (quarters * .25) - (dimes * .10)) / .05);
    const pennies = Math.round((ourMoney-(quarters * .25) - (dimes * .10)-(nickles * .05)) / .01);
 
    return ('Quarters: ' + quarters + ' Dimes: ' + dimes + ' Nickles ' + nickles + ' Pennies: ' + pennies);
  }

}

//if money % .25 == 0 { return quarters } => if money % 10 === 0 { return dimes }
//money % .25





  const coinCounter = (coinIndex) => {
  const coinArray = [.25, .10, .05, .01];
  return (totalMoney) => {
    if (totalMoney == 0) {
      return "no coin of this value";
    }
    const money = totalMoney / coinArray[coinIndex];
    if (money >= 1) {
      //amount of specified coin
      const coinNum = Math.floor(totalMoney / coinArray[coinIndex]);
      console.log(coinArray[coinIndex] + ' ' + coinNum)
      //leftover money
      return coinCounter(coinIndex + 1)(totalMoney - coinNum * coinArray[coinIndex]);
    } 
    if (money < 1){
      const coinNum = 0;
      return coinCounter(coinIndex + 1)(totalMoney - coinNum * coinArray[coinIndex]);
    }
   }
}
 coinCounter(0)(4.99); 


