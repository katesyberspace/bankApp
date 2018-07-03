var savBal = 0;
var savInput = document.querySelector(".sav .user-input"); //.value
var savOutput = document.querySelector(".sav .bal-output"); //.textContent
var savWithdrawBtn = document.querySelector(".sav .withdraw-btn"); //.addEventListener
var savDepBtn = document.querySelector(".sav .dep-btn"); //.addEventListener


var checkBal = 0;
var checkInput = document.querySelector(".check .user-input");
var checkOutput = document.querySelector(".check .bal-output");
var checkWithdrawBtn = document.querySelector(".check .withdraw-btn");
var checkDepBtn = document.querySelector(".check .dep-btn");


var lowBalWarning = function(){
    if (savBal === 0){
        document.querySelector(".sav").style.backgroundColor = "red";
    }
    else {
        document.querySelector(".sav").style.backgroundColor = "#e6e8ed";
    }
    if (checkBal === 0){
        document.querySelector(".check").style.backgroundColor = "red";
    }
    else {
        document.querySelector(".check").style.backgroundColor = "#e6e8ed";
    }
}

lowBalWarning();


var deposit = function(acctBal, acctOutput){
    acctOutput.textContent = ("$ " + acctBal.toFixed(2));
    lowBalWarning();
}

var withdraw = function(acctBal,acctOutput){
    acctOutput.textContent = ("$ " + acctBal.toFixed(2));
    lowBalWarning();
}



savDepBtn.addEventListener("click", function(){ 
    savBal += Number(savInput.value);
    deposit(savBal,savOutput);
})

checkDepBtn.addEventListener("click", function(){
    checkBal += Number(checkInput.value);
    deposit(checkBal, checkOutput);
})

savWithdrawBtn.addEventListener("click", function(){
    if (Number(savInput.value)>savBal){
        alert("You are broke");
        return
    }
    else{
    savBal -=Number(savInput.value);
    withdraw(savBal,savOutput);
    }
})

checkWithdrawBtn.addEventListener("click", function(){
    if (Number(checkInput.value)>checkBal){
        alert("You are broke");
        return
    }
    else{
    checkBal -=Number(checkInput.value);
    withdraw(checkBal,checkOutput);
    }    
})






//ORIGINAL SAVINGS WITHDRAWAL FUNCTION
// var savWithdrawUpdate = function() {
    // if (Number(savInput.value)>savBal){
        // alert("You don't have that much money. Go fight in a Pokemon gym to get more!");
        // return
    // }
    // else {
        // savBal = (savBal - Number(savInput.value));
        // savOutput.textContent = ("$ " + savBal + ".00");
        // lowBalWarning();
    // }
// }

// savWithdrawBtn.addEventListener("click", savWithdrawUpdate);





// var checkdeposit = function(){
    // checkBal = (checkBal + Number(checkInput.value));
    // checkOutput.textContent = ("$ " + checkBal + ".00");;
    // checkingLowBalWarning()
// };
// 
// checkDepBtn.addEventListener("click", checkdeposit);
// 
// 
// var checkWithdrawUpdate = function() {
    // if (Number(checkInput.value)>checkBal){
        // alert("You don't have that much money. Go fight in a Pokemon gym to get more!");
        // return
    // }
    // else {
        // checkBal = (checkBal - Number(checkInput.value));
        // checkOutput.textContent = ("$ " + checkBal + ".00");
        // checkingLowBalWarning()
    // }   
// };
// 
// checkWithdrawBtn.addEventListener("click", checkWithdrawUpdate);