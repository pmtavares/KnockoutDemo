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
function Account(id, name, balance) {
    this.Id = id;
    this.Name = name;
    this.Balance = balance;
}
var acc = new Account(1, "A1", 1000);
//View Model
function AccountViewModel(acc)
{
    var self = this;
    this.Id = acc.Id;
    this.Name = acc.Name;
    this.Balance = ko.observable(acc.Balance);
    var a1 = new Account(1, "A1", 1000)
    var a2 = new Account(2, "A2", 2000)
    var a3 = new Account(3, "A3", 3000)
    this.Accounts = ko.observableArray([a1, a2, a3])
    this.SelectedAccountIndex = ko.observable(0);
    this.TotalBalance = ko.computed(function () {
        var total = 0;
        for (var i = 0; i < self.Accounts().length; i++) {
            
            total += Number(self.Accounts()[i].Balance);
        }
        return total;
    });
}

var accViewModel = new AccountViewModel(acc);
ko.applyBindings(accViewModel);



