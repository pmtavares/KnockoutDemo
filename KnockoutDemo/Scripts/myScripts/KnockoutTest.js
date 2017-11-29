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
    this.Id = acc.Id;
    this.Name = acc.Name;
    this.Balance = ko.observable(acc.Balance);

}

var accViewModel = new AccountViewModel(acc);
ko.applyBindings(accViewModel);



