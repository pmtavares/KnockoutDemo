/* 
Part 2: Account
*/

$(function () {
    $("#btnShowDetails").click(function () {
        alert(accViewModel.Id + ": " + accViewModel.Balance());

    });
    $("#btnDeposit").click(function () {
        accViewModel.Balance(accViewModel.Balance() + Number($("#txtAmount").val()));

    });

    $("#btnNewAccount").click(function () {
        var account = new Account($("#txtNewId").val(), $("#txtNewName").val(), $("#txtNewBalance").val());
        accViewModel.Accounts.push(account);
        alert(accViewModel.Accounts().length);
    });
    $("#btnRemoveAccount").click(function () {
        
        accViewModel.Accounts.pop();
        alert('Removed');
    }); 

    $("#ddListAccount").change(function () {
        var selId = $("#ddListAccount").val() - 1;
        accViewModel.SelectedAccountIndex(selId);
    });
});


