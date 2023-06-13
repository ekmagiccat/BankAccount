// Business Logic

function BankAccount() {
this.initialEntry = {};
this.currentId = 0;
this.withdrawals = {};
this.deposits = {};

};

BankAccount.prototype.addEntryDeposit = function(entry) {
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
  this.Deposit[deposit.id] = deposit;
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

