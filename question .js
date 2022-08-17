//Question1
var a = 10,
  b = 5,
  c = 12,
  e = 8;
var d;
d = parseInt((a * (c - b)) / e + (b + c) <= (e * (c + a)) / (b + c) + a);
console.log(d);
if (d == 1) {
  console.log((a * (c - b)) / e + (b + c));
} else {
  console.log((e * (c + a)) / (b + c) + a);
}

//Question2
var n = 2,
  p = 4,
  q = 5,
  w = 3;
console.log(-p);
console.log(-n);
if (!((p * q) / n) <= q * w + n / p) {
  //(!10)<=(15.5)
  console.log(++p + w++ + " " + ++n); // (5+3  3)
} else {
  console.log(-p + q - +" " + -n); //(-4+4- -3)
}