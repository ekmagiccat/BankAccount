// Business Logic

function BankAccount() {
this.initialEntry= 0;
this.withdrawals = 0;
this.deposits = 0; 
this.balance = 0;

};

BankAccount.prototype.addInitialEntry = function(userInitialEntry) {
  if (userInitialEntry) {
    this.initialEntry+= userInitialEntry;
}
  else { this.initialEntry = 0;
  }
return this.initialEntry;
};

BankAccount.prototype.removeWithdrawal = function(userWithdrawals) {
  // if (userWithdrawals > balance) {
  // return console.log("insufficient funds");
  // } else  (withdrawals > 0) 
  // return this.withdrawals += userWithdrawals;
  // };

  if (userWithdrawals > 0){
    return this.withdrawals += userWithdrawals;
  }
};

BankAccount.prototype.addDeposit = function(userDeposits) {
    if (userDeposits > 0){
      return this.deposits += userDeposits;
    }
  };
  
  BankAccount.prototype.totalBalance = function() {
    this.balance = (this.initialEntry + this.deposits) - this.withdrawals;
    return this.balance;
  };


// User Interface Logic

let newBankAccount = new BankAccount();


    function handleNewBankAccount(e) {
    e.preventDefault();
    console.log("loading")
    document.querySelector("form#depositWithdrawal").removeAttribute("class");
    document.querySelector("form#bankAccount").setAttribute("class", "hidden");
    document.querySelector("div#balance").removeAttribute("class");

   let username = document.querySelector("input#username").value;
   let initialEntry = parseInt(document.querySelector("input#userInitialEntry").value);
    document.querySelector("span#name").innerText = " Thank you for creating an account, " + username + "!"; 
   let totalInitialEntry = newBankAccount.addInitialEntry(initialEntry);
   document.querySelector("span#totalBalance").innerText= totalInitialEntry;
    console.log(newBankAccount);
}

    function handleDepositWithdrawals(e) {
    e.preventDefault();
    document.querySelector("span#name").innerText= null;
    document.querySelector("span#totalBalance").innerText= null;
    document.querySelector("span#minusBalance").innerText= null;

    let entryIn = parseInt(document.querySelector("input#deposits").value)
    let outputOut = parseInt(document.querySelector("input#withdrawal").value)
    //document.querySelector("span#totalBalance").innerText= userInitialEntry - output;
    
    if(entryIn){
      newBankAccount.addDeposit(entryIn);
    }
    if (outputOut){
      newBankAccount.removeWithdrawal(outputOut);
    }
    
    newTotalBalance = newBankAccount.totalBalance();
    
    document.querySelector("span#totalBalance").innerText= newTotalBalance
    document.querySelector("span#minusBalance").innerText= newBankAccount.withdrawals
    document.querySelector("span#totalDeposit").innerText= newBankAccount.deposits

    document.querySelector("input#withdrawal").value = null;
    document.querySelector("input#deposits").value = null;

    console.log(newBankAccount);
  }


window.addEventListener("load", function (){
  document.querySelector("form#bankAccount").addEventListener("submit", handleNewBankAccount);
  document.querySelector("form#depositWithdrawal").addEventListener("submit", handleDepositWithdrawals);
});

// window.location.reload(onclick)

/*function withdrawMoney (event) {
let moneyWithdrawn = document.querySelector("input#Withdrawal");
 if (bankAccount <= 0) {
    return 0
 }
 console.log(balance - moneyWithdrawn)
};*/
