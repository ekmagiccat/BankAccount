// Business Logic

function BankAccount() {
this.initialEntry = 0;
this.balance = 0;
this.withdrawals = 0;
this.deposits = 0; 

};

BankAccount.prototype.addEntryDeposit = function(initialEntry) {
    entry.id = this.assignId();
    this.initialEntry[entry.id] = entry;
};

BankAccount.prototype.assignId = function() {
this.currentId += 1;
    return this.currentId;
};

BankAccount.prototype.findEntry = function(id) {
    if (this.initialEntry[id] !== undefined) {
        return this.initialEntry[id];
    }
    return false;
};

//WITHDRAWAL
BankAccount.prototype.removeWithdrawal = function(withdrawal) {
    withdrawal.id = this.assignId();
    this.withdrawals[withdrawal.id] = withdrawal;
};

BankAccount.prototype.assignId = function() {
this.currentId += 1;
    return this.currentId;
};

BankAccount.prototype.findWithdrawal = function(id) {
    if (this.withdrawals[id] !== undefined) {
        return this.withdrawals[id];
    }
    return false;
};

//DEPOSIT
BankAccount.prototype.addDeposit = function(deposit) {
  deposit.id = this.assignId();
  this.deposits[deposits.id] = deposit;
};

BankAccount.prototype.assignId = function() {
this.currentId += 1;
  return this.currentId;
};

BankAccount.prototype.findDeposit = function(id) {
  if (this.deposits[id] !== undefined) {
      return this.deposits[id];
  }
  return false;
};

// User Interface Logic

let NewBankAccount = new BankAccount();


    function handleNewBankAccount(e) {
    e.preventDefault();
    document.querySelector("form#bankAccount").removeAttribute("class");
    document.querySelector("form#depositWithdrawal").removeAttribute("class");
    document.querySelector("div#balance").removeAttribute("class");

    let bankAccounts = document.querySelector("input#bankAccount");
    let initialEntry = parseInt.document.querySelector("input#initialEntry");
    document.querySelector("span#username").innerText= username;
    let balance = NewBankAccount.addInitialEntry(initialEntry);
    document.querySelector("span#totalBalance").innerText= initialEntry;
    console.log(NewBankAccount);
}

    function handleDepositWithdrawals(e) {
    e.preventDefault();
    document.querySelector("span#name").innerText= null;
    document.querySelector("span#totalBalance").innerText= null;
    document.querySelector("span#minusBalance").innerText= null;

    let entryIn = parseInt(document.querySelector("input#entry").value)
    let outputOut = parseInt(document.querySelector("input#withdrawal").value)

    }


window.addEventListener("load", function (){
  document.querySelector("form#bankAccount").addEventListener("submit", handleNewBankAccount);
  document.querySelector("form#depositWithdrawal").addEventListener("submit", handleDepositWithdrawals);

});




/*function withdrawMoney (event) {
let moneyWithdrawn = document.querySelector("input#Withdrawal");
 if (bankAccount <= 0) {
    return 0
 }
 console.log(balance - moneyWithdrawn)
};*/

BankAccount.prototype.withdraw = function(balance) {
  if (balance > 0 && balance <= this.initialEntry) {
  this.initialEntry -= balance;
}
};

BankAccount.prototype.deposit = function(balance) {
  if (balance > 0) {
    this.initialEntry += balance;
  }  
};