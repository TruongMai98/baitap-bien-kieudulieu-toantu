let physic = +prompt('nhap diem vat ly');
let math = +prompt('nhap diem toan');
let chemistry = +prompt('nhap diem hoa');

let avg = (physic + math + chemistry)/3;
let sum = (physic + math + chemistry);

document.write('diem vat ly:' + '<br>' + physic);
document.write('<br>');
document.write('diem toan:' + '<br>' + math);
document.write('<br>');
document.write('diem hoa:' + '<br>' + chemistry);
document.write('<br>');
document.write('diem trung binh: ' + avg);
document.write('<br>');
document.write('tong diem: ' + sum);
