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
});


