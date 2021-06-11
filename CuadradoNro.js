
/*
var nro= 123
console.log(nro);
console.log(typeof nro);

// lo llevo a String, a Array y a Number, todo junto:
var y= nro.toString(10).split('').map(Number);
console.log(y);
console.log(typeof y);

//lo elevo al cuadrado, individualmente, y luego aplico join.
var res= y.map(xx => xx**2);
console.log(res);
console.log(typeof(res));
console.log(res.join(''));
*/



function squareDigits(num){
    let a= num.toString(10).split('').map(Number);
    let b= a.map(element => element**2);
    let c= b.join('');
    console.log(typeof (c));
    let d= Number(c);
    console.log(typeof (d));
    return d;
};

console.log(squareDigits(222));
