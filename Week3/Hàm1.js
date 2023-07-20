function processConfirm(answer){
    let result="";
    if (answer){
        result = "Oke bạn êi";
    }else {
        result = "Đéo nhé";
    }
    return result;
}
let confirmAnswer = confirm("Chơi không bạn êi");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);