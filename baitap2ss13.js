// tạo mảng là số
let numberList = [
  1,2,3,4,5,6,7,8,9,10
];
let userInput = +prompt (" nhập vào số bất kì");
let found = false;
for ( let i=0; i<numberList.length;i++){
    if (numberList [i] === userInput ) {
        found = true;
        // đánh dấu đã tìm thấy số
        break;}}
        // kiểm tra lại biến cờ và hiển thị kết quả
        if (found){
            alert("Bingo");

        }else {
            alert("chúc bạn mai mắn lần sau");
        }
