// NHẬP TÊN
let user = prompt( "Nhập Tên");
// XÉT ĐIỀU KIỆN
if (user === "ADMIN"){
 let matKhau = prompt ( "Nhập Mật Khẩu");
if (matKhau === "TheMaster"){
    alert ("Welcome");
}else if( matKhau === null){
  alert ("Cancelled");
}else {
    alert ( "Wrong Password");
}
}else if ( user===null ){
    alert("Cancelled");
}else {
    alert ("I Don`t know you");
}