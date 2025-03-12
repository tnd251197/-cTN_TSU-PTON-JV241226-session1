// cho người dùng nhập dãy số bất kỳ
let numberInput = prompt ("nhập số bất kì có dấu phẩy ");
let numberArry = numberInput.split(",").map(Number);
// gán giá trị đầu trong dãy là lớn nhất
let minNumber = numberArry [0];
// duyệt qua vòng 
for (let i=1; i<numberArry.length;i++){
    if (numberArry[i]<minNumber){
        minNumber=numberArry[i];
    }
}
alert("số có giá trị nhỏ nhất là: "+ minNumber);