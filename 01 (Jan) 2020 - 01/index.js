function showTypeOfA() {
  console.log('a =', a);
  console.log(typeof a);
  console.log('---');
}

var a;
showTypeOfA();
a = null;
showTypeOfA(); // object
a = 0;
showTypeOfA();
a = 'asd';
showTypeOfA();
a = false;
showTypeOfA();
a = Symbol();
showTypeOfA();
a = BigInt(123);
showTypeOfA();
a = { test: 1 };
showTypeOfA();
a = showTypeOfA;
showTypeOfA();

if (typeof (a) === 'date') {
  console.log('This code won\'t ever reached because no such Type in JavaScript');
}

a = null;
if (typeof (a) === 'null') {
  console.log('This code won\'t ever reached because `a` is Type of Object');
}
