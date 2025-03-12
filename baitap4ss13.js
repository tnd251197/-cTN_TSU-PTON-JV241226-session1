let numberInput = prompt ("nhập vào dãy số bất kì");
let numberArry = numberInput.split (",").map (Number);
// sử dụng mã tìm ra giá trị lớn nhất 
let maxNumber = numberArry[0]
for (let i= 1; i <= numberArry.length-1;i++ ){
if (numberArry[i]>maxNumber){
    maxNumber = numberArry[i];
}}
alert ("số lớn nhất là :"+ maxNumber);

