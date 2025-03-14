// tạo một đối tượng 
let original = {
    name : "Bod",
    age : "30",
};
// sao chép đối tượng trên thành đối tượng mới copy
let copy = {...original};
// thay đổi thuộc tính name của copy thành "Charlie"
 copy.name = "Charlie";
console.log ("original:", original );
console.log ("copy:", copy);