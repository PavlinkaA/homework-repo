function ATM (withDrawnAmount) { 
let account = 1000; 
if (withDrawnAmount > account) {
    console.log("Not enough money");
    }
    else {
       let leftMoney = account - withDrawnAmount;
        console.log("Left money:",leftMoney);
        console.log("Withdrawn amount:",withDrawnAmount)

        console.log("Left money:");
        console.log(leftMoney)
        console.log("Withdrawn amount:")
        console.log(withDrawnAmount)

        console.log("Withdrawn amount: " + withDrawnAmount + ",your balance is: " + leftMoney)

    }

}
 let withDrawnAmount = prompt("How much money do you want to withdraw?") ;
 let parsintWithDrawn = parseInt(withDrawnAmount);
 ATM (parsintWithDrawn);
