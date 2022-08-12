let number = 25;
function foo(num = 5) {
  number = number - num;
  return 15;
}
foo();
console.log(number);
foo(15);
console.log(number);
function bar(string) {
  number = number - string;
}
bar(5);
console.log(number);
