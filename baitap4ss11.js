// cho phép người dùng nhập số từ 0 đến 9
let nhapSo = prompt ("nhập sô từ 0 đến 9");
switch (nhapSo) {
    case 0 : console.log ("số không"); break;
    case 1 : console.log ("số Một"); break;
    case 2 : console.log ("số Hai"); break;
    case 3 : console.log ("số Ba"); break;
    case 4 : console.log ("số Bốn"); break;
    case 5 : console.log ("số Năm"); break;
    case 6 : console.log ("số Sáu"); break;
    case 7 : console.log ("số Bảy"); break;
    case 8 : console.log ("số Tám"); break;
    case 9 : console.log ("số Chín"); break;

default: alert ("số không đúng! vui lòng nhập từ số 0 đến 9");}