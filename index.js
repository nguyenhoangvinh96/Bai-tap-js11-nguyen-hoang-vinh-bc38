//Bài 1: Tính tiền lương nhân viên

var workingDays = 20;
var salaryPerDay = 100000;

var totalSalary = salaryPerDay * workingDays;
console.log("Tổng lương là: " + totalSalary);

//Bài 2: Tính giá trị trung bình

var res1 = 1.5;
var res2 = 1.5;
var res3 = 1.5;
var res4 = 1.5;
var res5 = 1.5;

var sum = (res1 + res2 + res3 + res4 + res5) /5;
console.log ("Giá trị trung bình là: " + sum);

//Bài 3: Quy đổi tiền

var USD = 23500;
var VND = 3;

var total = VND * USD;
console.log("Xuất ra là: " + total);

//Bài 4: Tính diện tích, chu vi hình chữ nhật

var longs = 7;
var width = 5;

var area = longs * width;
console.log("area= " + area);

var perimeter = (longs + width) * 2;
console.log("perimeter= " + perimeter);

//Bài 5: Tính tổng 2 ký số

var n = 12;
var num1 = n % 10;
var num2 = Math.floor(n / 10);
var total = num1 + num2;
console.log("total= " + total);

var n = 44;
var num3 = n % 10;
var num4 = Math.floor(n / 10);
var total = num3 + num4;
console.log("total= " + total);

var n = 83;
var num5 = n % 10;
var num6 = Math.floor(n / 10);
var total = num5 + num6;
console.log("total= " + total);
