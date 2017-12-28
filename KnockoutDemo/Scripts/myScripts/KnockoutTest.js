/* Part 1

var NameViewModel = function (fname, lname) {
    this.FirstName = ko.observable(fname);
    this.LastName = ko.observable(lname);
    this.FullName = ko.computed(function () {
        return this.FirstName() + " " + this.LastName()
    }, this)
}
ko.applyBindings(new NameViewModel("pedro", "Tavares"))

Part 2: Account
*/
//Model Object
function Account(id, name, balance, deposits) {
    this.Id = id;
    this.Name = name;
    this.Balance = ko.observable(balance);
    this.Deposits = deposits;
}
var acc = new Account(1, "A1", 1000);
//View Model
function AccountViewModel(acc)
{
    var self = this;

    self.SelectedAccount = ko.observable();
    this.Id = acc.Id;
    this.Name = acc.Name;
    this.Balance = ko.observable(acc.Balance);
    this.Deposits = acc.deposits;

    var a1 = new Account(1, "A1", 1000, [1000,1500,2200]);
    var a2 = new Account(2, "A2", 2000, [900, 800, 500]);
    var a3 = new Account(3, "A3", 3000, [5600, 1500]);
    var a4 = new Account(3, "A3", 3000);
    self.Accounts = ko.observableArray([a1, a2, a3])

    self.SelectedAccountIndex = ko.observable(0);

    this.TotalBalance = ko.computed(function () {
        var total = 0;
        for (var i = 0; i < self.Accounts().length; i++) {
            
            total += Number(self.Accounts()[i].Balance);
        }
        return total;
    });

    self.showHideSection = ko.observable(true);
    self.Phone = { home: 123456, office: 654321 };
    self.Colors = ko.observable(["red", "blue", "green"]);
    self.Accounts2 = ko.observableArray([a1, a2, a4])

    self.Count = ko.computed(function () {
        return self.Accounts2().length;

    });

    self.SelecteAccount = function (account) {
        self.SelectedAccount(account);
        alert("selected");
    }

    self.AmountToDeposit = ko.observable(0);
    self.Deposit = function () {
        
        self.SelectedAccount().Balance(self.SelectedAccount().Balance() + Number(self.AmountToDeposit()));
        alert("Deposited");
    }

    self.DeleteAccount = function (account) {
        self.Accounts2.remove(account);
        alert("Deleted");
    }
}

var accViewModel = new AccountViewModel(acc);
ko.applyBindings(accViewModel);



