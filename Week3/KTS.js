function isCharacterDigit(char) {
    return !isNaN(char);
}
const charInput = prompt("Nhập vào một ký tự:");
const result = isCharacterDigit(charInput);
if (result) {
 alert("True");
} else {
alert("false");
}